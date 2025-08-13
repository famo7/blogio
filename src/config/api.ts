// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://blog-api-mydt.onrender.com/api',
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      SIGNUP: '/auth/signup',
    },
    POSTS: {
      ALL: '/posts',
      UNPUBLISHED: '/posts/unpublished/all',
      BY_ID: (id: number) => `/posts/${id}`,
      CREATE: '/posts',
      UPDATE: (id: number) => `/posts/${id}`,
      DELETE: (id: number) => `/posts/${id}`,
      COMMENTS: (postId: number) => `/posts/${postId}/comments`,
      COMMENT_BY_ID: (postId: number, commentId: number) => `/posts/${postId}/comments/${commentId}`,
    },
  },
} as const

// Helper function to build full API URLs
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`
}
