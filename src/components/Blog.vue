<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <!-- Header Section -->
    <section class="relative py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h1
          class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
          Latest Stories
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover inspiring stories, expert insights, and thought-provoking articles from our community of writers.
        </p>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="loading" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="grid gap-8">
        <div v-for="n in 3" :key="n" class="animate-pulse">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div class="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div class="space-y-3">
              <div class="h-4 bg-gray-200 rounded"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
              <div class="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
            <div class="flex items-center justify-between mt-6">
              <div class="h-4 bg-gray-200 rounded w-24"></div>
              <div class="h-4 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-red-900 mb-2">Unable to load posts</h3>
        <p class="text-red-700 mb-6">{{ error }}</p>
        <Button @click="fetchPosts" class="bg-red-600 hover:bg-red-700">
          Try Again
        </Button>
      </div>
    </div>

    <!-- Posts Grid -->
    <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div v-if="posts.length === 0" class="text-center py-16">
        <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
            </path>
          </svg>
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-2">No posts yet</h3>
        <p class="text-gray-600">Be the first to share your story with the community!</p>
      </div>

      <!-- Posts List -->
      <div v-else class="grid gap-8">
        <article v-for="post in posts" :key="post.id"
          class="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200 overflow-hidden cursor-pointer"
          @click="navigateToPost(post.id)">
          <div class="p-8">
            <!-- Post Header -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-semibold text-sm">
                    {{ getAuthorInitials(post.author?.name || 'Anonymous') }}
                  </span>
                </div>
                <div>
                  <p class="font-medium text-gray-900">{{ post.author?.name || 'Anonymous' }}</p>
                  <p class="text-sm text-gray-500">{{ formatDate(post.createdAt) }}</p>
                </div>
              </div>
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>

            <!-- Post Title -->
            <h2 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
              {{ post.title }}
            </h2>

            <!-- Post Preview -->
            <p class="text-gray-600 leading-relaxed mb-6 line-clamp-3">
              {{ getContentPreview(post.content) }}
            </p>

            <!-- Post Footer -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {{ getReadingTime(post.content) }} min read
                </span>
              </div>
              <Button variant="ghost" size="sm" class="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                Read More
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { postService, type Post } from '@/services/postService'

const router = useRouter()

// State
const posts = ref<Post[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

// Methods
const fetchPosts = async () => {
  try {
    loading.value = true
    error.value = null
    posts.value = await postService.getAllPosts()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unexpected error occurred'
  } finally {
    loading.value = false
  }
}

const navigateToPost = (postId: number) => {
  router.push(`/blog/${postId}`)
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
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getContentPreview = (content: string): string => {
  // Strip HTML tags and limit to first 200 characters
  const textContent = content.replace(/<[^>]*>/g, '')
  return textContent.length > 200 ? textContent.substring(0, 200) + '...' : textContent
}

const getReadingTime = (content: string): number => {
  // Estimate reading time based on average 200 words per minute
  const wordCount = content.split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / 200))
}

// Lifecycle
onMounted(() => {
  fetchPosts()
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
