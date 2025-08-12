<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <!-- Loading State -->
    <div v-if="loading" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="animate-pulse">
        <!-- Header skeleton -->
        <div class="mb-8">
          <div class="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
              <div class="h-4 bg-gray-200 rounded w-24 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
        </div>

        <!-- Content skeleton -->
        <div class="space-y-4 mb-12">
          <div class="h-4 bg-gray-200 rounded"></div>
          <div class="h-4 bg-gray-200 rounded w-5/6"></div>
          <div class="h-4 bg-gray-200 rounded w-4/6"></div>
          <div class="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-red-900 mb-2">Unable to load post</h3>
        <p class="text-red-700 mb-6">{{ error }}</p>
        <div class="flex justify-center space-x-4">
          <Button @click="fetchPost" class="bg-red-600 hover:bg-red-700">
            Try Again
          </Button>
          <Button variant="outline" @click="$router.push('/blog')">
            Back to Blog
          </Button>
        </div>
      </div>
    </div>

    <!-- Post Content -->
    <div v-else-if="post" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Back Button -->
      <Button variant="ghost" @click="$router.push('/blog')" class="mb-8 text-gray-600 hover:text-gray-900">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Blog
      </Button>

      <!-- Post Header -->
      <header class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {{ post.title }}
        </h1>

        <div class="flex items-center space-x-4 mb-6">
          <div
            class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span class="text-white font-semibold">
              {{ getAuthorInitials(post.author?.name || 'Anonymous') }}
            </span>
          </div>
          <div>
            <p class="font-medium text-gray-900">{{ post.author?.name || 'Anonymous' }}</p>
            <div class="flex items-center space-x-4 text-sm text-gray-500">
              <span>{{ formatDate(post.createdAt) }}</span>
              <span>•</span>
              <span>{{ getReadingTime(post.content) }} min read</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Post Content -->
      <article class="prose prose-lg max-w-none mb-16">
        <div class="text-gray-700 leading-relaxed whitespace-pre-wrap">{{ post.content }}</div>
      </article>

      <!-- Comments Section -->
      <section class="border-t border-gray-200 pt-12">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-gray-900">
            Comments ({{ comments.length }})
          </h2>
          <Button v-if="!authStore.isAuthenticated" @click="$router.push('/login')" variant="outline" size="sm">
            Login to Comment
          </Button>
        </div>

        <!-- Comment Form -->
        <div v-if="authStore.isAuthenticated" class="mb-8">
          <div class="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div class="flex items-start space-x-4">
              <div
                class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white font-semibold text-sm">
                  {{ getAuthorInitials(authStore.user?.name || 'User') }}
                </span>
              </div>
              <div class="flex-1">
                <textarea v-model="newComment" placeholder="Share your thoughts..." rows="3"
                  class="w-full p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  @keydown.ctrl.enter="submitComment"></textarea>
                <div class="flex justify-between items-center mt-4">
                  <p class="text-sm text-gray-500">
                    Press Ctrl+Enter to submit
                  </p>
                  <div class="flex space-x-3">
                    <Button variant="outline" size="sm" @click="newComment = ''"
                      :disabled="!newComment.trim() || commentSubmitting">
                      Cancel
                    </Button>
                    <Button @click="submitComment" :disabled="!newComment.trim() || commentSubmitting" size="sm">
                      <span v-if="commentSubmitting">Posting...</span>
                      <span v-else>Post Comment</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Comments List -->
        <div v-if="commentsLoading" class="space-y-6">
          <div v-for="n in 3" :key="n" class="animate-pulse">
            <div class="bg-white rounded-xl p-6 border border-gray-100">
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div class="flex-1">
                  <div class="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div class="space-y-2">
                    <div class="h-3 bg-gray-200 rounded"></div>
                    <div class="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="comments.length === 0" class="text-center py-12">
          <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.455L3 21l2.455-5.094A8.959 8.959 0 013 12a8 8 0 018-8 8 8 0 018 8z">
              </path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No comments yet</h3>
          <p class="text-gray-600">
            {{ authStore.isAuthenticated ? 'Be the first to share your thoughts!' : 'Login to start the conversation.'
            }}
          </p>
        </div>

        <div v-else class="space-y-6">
          <div v-for="comment in comments" :key="comment.id"
            class="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <div class="flex items-start space-x-4">
              <div
                class="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white font-semibold text-sm">
                  {{ getAuthorInitials(comment.user.name) }}
                </span>
              </div>
              <div class="flex-1">
                <div class="flex items-center space-x-2 mb-2">
                  <span class="font-medium text-gray-900">{{ comment.user.name }}</span>
                  <span class="text-gray-400">•</span>
                  <span class="text-sm text-gray-500">{{ formatDate(comment.createdAt) }}</span>
                </div>
                <p class="text-gray-700 leading-relaxed whitespace-pre-wrap">{{ comment.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { postService, type Post, type Comment } from '@/services/postService'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const authStore = useAuthStore()

// State
const post = ref<Post | null>(null)
const comments = ref<Comment[]>([])
const loading = ref(true)
const commentsLoading = ref(true)
const error = ref<string | null>(null)
const newComment = ref('')
const commentSubmitting = ref(false)

// Computed
const postId = computed(() => parseInt(route.params.id as string))

// Methods
const fetchPost = async () => {
  try {
    loading.value = true
    error.value = null
    post.value = await postService.getPostById(postId.value)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unexpected error occurred'
  } finally {
    loading.value = false
  }
}

const fetchComments = async () => {
  try {
    commentsLoading.value = true
    comments.value = await postService.getComments(postId.value)
  } catch (err) {
    console.error('Error loading comments:', err)
    // Don't show error for comments, just log it
  } finally {
    commentsLoading.value = false
  }
}

const submitComment = async () => {
  if (!newComment.value.trim() || commentSubmitting.value) return

  try {
    commentSubmitting.value = true
    const comment = await postService.createComment(postId.value, {
      content: newComment.value.trim()
    })

    // Add new comment to the beginning of the list
    comments.value.unshift(comment)
    newComment.value = ''
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Failed to post comment'
    alert(errorMessage) // You might want to use a proper notification system here
  } finally {
    commentSubmitting.value = false
  }
}

const getAuthorInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

  if (diffInHours < 1) return 'Just now'
  if (diffInHours < 24) return `${diffInHours}h ago`
  if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getReadingTime = (content: string): number => {
  const wordCount = content.split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / 200))
}

// Lifecycle
onMounted(async () => {
  await fetchPost()
  if (post.value) {
    await fetchComments()
  }
})
</script>
