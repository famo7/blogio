<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <!-- Background Pattern -->
      <div
        class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10">
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div class="text-center">
          <!-- Badge -->
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            Join thousands of readers worldwide
          </div>

          <!-- Main Headline -->
          <h1
            class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 bg-clip-text text-transparent mb-8 leading-tight">
            Stories that
            <span class="text-blue-600">inspire</span>
            <br />and inform
          </h1>

          <!-- Subheadline -->
          <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover thought-provoking articles, expert insights, and authentic stories from our global community of
            passionate writers and creators.
          </p>

          <!-- CTA Buttons -->
          <div v-if="!authStore.isAuthenticated"
            class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg"
              class="px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
              as-child>
              <router-link to="/blog" class="flex items-center">
                Start Reading Free
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
              </router-link>
            </Button>
            <Button variant="outline" size="lg"
              class="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-200" as-child>
              <router-link to="/blog">
                Browse Articles
              </router-link>
            </Button>
          </div>

          <!-- Logged in user message -->
          <div v-else class="mb-16">
            <div class="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 class="text-2xl font-bold text-blue-900 mb-4">
                Welcome back, {{ authStore.user?.name }}! 👋
              </h3>
              <p class="text-blue-700 mb-6">
                Ready to {{ authStore.isAuthor ? 'continue writing' : 'discover new stories' }}?
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold" as-child>
                  <router-link to="/blog">
                    {{ authStore.isAuthor ? 'My Dashboard' : 'Explore Stories' }}
                  </router-link>
                </Button>
                <Button v-if="authStore.isAuthor" variant="outline" size="lg"
                  class="px-8 py-4 border-blue-300 text-blue-700 hover:bg-blue-50" as-child>
                  <router-link to="/write">
                    Write New Story
                  </router-link>
                </Button>
              </div>
            </div>
          </div>

          <!-- Social Proof -->
          <div class="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div class="flex items-center">
              <div class="flex -space-x-2 mr-4">
                <div class="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white">
                </div>
                <div class="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white">
                </div>
                <div class="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white">
                </div>
                <div
                  class="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  +</div>
              </div>
              <span>10k+ active readers</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <span>4.8/5 reader rating</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                </path>
              </svg>
              <span>100% free to start</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why readers choose our platform
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to discover, read, and share amazing content in one beautiful place.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="text-center group">
            <div
              class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                </path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Curated Content</h3>
            <p class="text-gray-600">Hand-picked articles from expert writers across diverse topics and industries.</p>
          </div>

          <!-- Feature 2 -->
          <div class="text-center group">
            <div
              class="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                </path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Vibrant Community</h3>
            <p class="text-gray-600">Connect with like-minded readers and writers from around the world.</p>
          </div>

          <!-- Feature 3 -->
          <div class="text-center group">
            <div
              class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Ad-Free Reading</h3>
            <p class="text-gray-600">Enjoy distraction-free reading with our clean, minimalist design.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div v-if="!authStore.isAuthenticated">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to start your reading journey?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Join our community today and discover stories that matter to you.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg"
              class="px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              as-child>
              <router-link to="/signup">
                Create Free Account
              </router-link>
            </Button>
            <Button size="lg"
              class="px-8 py-4 border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700 font-semibold transition-all duration-200"
              as-child>
              <router-link to="/login">
                Sign In
              </router-link>
            </Button>
          </div>
        </div>
        <div v-else>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to explore amazing stories?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Discover new articles and share your thoughts with our community.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg"
              class="px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              as-child>
              <router-link to="/blog">
                Start Reading
              </router-link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Initialize auth state on mount
onMounted(() => {
  authStore.initAuth()
})
</script>

<style scoped>
.bg-grid-slate-100 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
}
</style>
