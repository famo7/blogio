import { useAuthStore } from '@/stores/auth'
import { API_CONFIG, buildApiUrl } from '@/config/api'

// Types
export interface Post {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
  author: {
    name: string
  } | null
}

export interface Comment {
  id: number
  content: string
  createdAt: string
  user: {
    name: string
  }
}

export interface CreateCommentData {
  content: string
}

// Post Service
export const postService = {
  // Get all posts
  async getAllPosts(): Promise<Post[]> {
    try {
      const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.POSTS.ALL))

      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching posts:', error)
      throw new Error('Unable to fetch posts. Please try again later.')
    }
  },

  // Get single post by ID
  async getPostById(id: number): Promise<Post> {
    try {
      const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.POSTS.BY_ID(id)))

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Post not found')
        }
        throw new Error('Failed to fetch post')
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching post:', error)
      throw new Error('Unable to fetch post. Please try again later.')
    }
  },

  // Get comments for a post
  async getComments(postId: number): Promise<Comment[]> {
    try {
      const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.POSTS.COMMENTS(postId)))

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Post not found')
        }
        throw new Error('Failed to fetch comments')
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching comments:', error)
      throw new Error('Unable to fetch comments. Please try again later.')
    }
  },

  // Create a comment (requires authentication)
  async createComment(postId: number, commentData: CreateCommentData): Promise<Comment> {
    const authStore = useAuthStore()

    if (!authStore.token) {
      throw new Error('Authentication required to comment')
    }

    try {
      const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.POSTS.COMMENTS(postId)), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authStore.token}`
        },
        body: JSON.stringify(commentData)
      })

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Please log in to comment')
        }
        if (response.status === 404) {
          throw new Error('Post not found')
        }
        if (response.status === 400) {
          throw new Error('Comment content is required')
        }
        throw new Error('Failed to create comment')
      }

      return await response.json()
    } catch (error) {
      console.error('Error creating comment:', error)
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Unable to create comment. Please try again later.')
    }
  },

  // Update a comment (requires authentication and ownership)
  async updateComment(postId: number, commentId: number, commentData: CreateCommentData): Promise<Comment> {
    const authStore = useAuthStore()

    if (!authStore.token) {
      throw new Error('Authentication required to update comment')
    }

    try {
      const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.POSTS.COMMENT_BY_ID(postId, commentId)), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authStore.token}`
        },
        body: JSON.stringify(commentData)
      })

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Please log in to update comment')
        }
        if (response.status === 403) {
          throw new Error('You can only update your own comments')
        }
        if (response.status === 404) {
          throw new Error('Comment not found')
        }
        throw new Error('Failed to update comment')
      }

      return await response.json()
    } catch (error) {
      console.error('Error updating comment:', error)
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Unable to update comment. Please try again later.')
    }
  },

  // Delete a comment (requires authentication and ownership)
  async deleteComment(postId: number, commentId: number): Promise<void> {
    const authStore = useAuthStore()

    if (!authStore.token) {
      throw new Error('Authentication required to delete comment')
    }

    try {
      const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.POSTS.COMMENT_BY_ID(postId, commentId)), {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${authStore.token}`
        }
      })

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Please log in to delete comment')
        }
        if (response.status === 403) {
          throw new Error('You can only delete your own comments')
        }
        if (response.status === 404) {
          throw new Error('Comment not found')
        }
        throw new Error('Failed to delete comment')
      }
    } catch (error) {
      console.error('Error deleting comment:', error)
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Unable to delete comment. Please try again later.')
    }
  }
}
