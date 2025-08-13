<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse">
      </div>
      <div
        class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000">
      </div>
    </div>

    <!-- Header Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto text-center">
        <div
          class="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-8">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
            </path>
          </svg>
        </div>

        <h1
          class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 tracking-tight">
          Latest Stories
        </h1>
        <p class="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Discover inspiring stories, expert insights, and thought-provoking articles from our community of writers.
        </p>

        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-8 mt-12">
          <div class="text-center">
            <div class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {{ posts.length }}
            </div>
            <div class="text-sm text-muted-foreground">Articles</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ∞
            </div>
            <div class="text-sm text-muted-foreground">Inspiration</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <div v-if="loading" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="n in 6" :key="n" class="group">
          <Card class="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-500">
            <div class="aspect-video relative overflow-hidden rounded-t-lg">
              <Skeleton class="w-full h-full" />
            </div>
            <CardContent class="p-6">
              <Skeleton class="h-6 w-3/4 mb-3" />
              <div class="space-y-2">
                <Skeleton class="h-4 w-full" />
                <Skeleton class="h-4 w-5/6" />
                <Skeleton class="h-4 w-4/6" />
              </div>
              <div class="flex items-center justify-between mt-6">
                <Skeleton class="h-4 w-24" />
                <Skeleton class="h-4 w-20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Card class="border-red-200 bg-red-50/50 backdrop-blur-sm">
        <CardContent class="p-12 text-center">
          <div
            class="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-red-900 mb-3">Unable to load posts</h3>
          <p class="text-red-700 mb-8 text-lg">{{ error }}</p>
          <Button @click="fetchPosts" size="lg"
            class="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
              </path>
            </svg>
            Try Again
          </Button>
        </CardContent>
      </Card>
    </div>

    <!-- Posts Grid -->
    <div v-else class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <!-- Empty State -->
      <div v-if="posts.length === 0" class="text-center py-20">
        <Card class="max-w-md mx-auto border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm">
          <CardContent class="p-12">
            <div
              class="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                </path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">No stories yet</h3>
            <p class="text-muted-foreground">Be the first to discover amazing content when it arrives!</p>
          </CardContent>
        </Card>
      </div>

      <!-- Posts Grid -->
      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card v-for="post in posts" :key="post.id"
          class="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm"
          @click="navigateToPost(post.id)">

          <!-- Card Header with Gradient -->
          <div class="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"></div>

          <CardContent class="p-6">
            <!-- Author Info -->
            <div class="flex items-center space-x-3 mb-4">
              <Avatar class="h-10 w-10 ring-2 ring-blue-200">
                <AvatarFallback class="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm">
                  {{ getAuthorInitials(post.author?.name || 'Anonymous') }}
                </AvatarFallback>
              </Avatar>
              <div>
                <p class="font-medium text-sm">{{ post.author?.name || 'Anonymous' }}</p>
                <p class="text-xs text-muted-foreground">{{ formatDate(post.createdAt) }}</p>
              </div>
            </div>

            <!-- Post Title -->
            <h3
              class="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
              {{ post.title }}
            </h3>

            <!-- Post Preview -->
            <p class="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {{ getContentPreview(post.content) }}
            </p>

            <!-- Reading Time -->
            <div class="flex items-center justify-between">
              <Badge variant="secondary" class="text-xs">
                <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {{ getReadingTime(post.content) }} min read
              </Badge>

              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
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
  // Strip HTML tags and limit to first 150 characters
  const textContent = content.replace(/<[^>]*>/g, '')
  return textContent.length > 150 ? textContent.substring(0, 150) + '...' : textContent
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
