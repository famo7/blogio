<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse">
      </div>
      <div
        class="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000">
      </div>
      <div
        class="absolute bottom-0 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-500">
      </div>
    </div>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <!-- Animated Badge -->
        <div
          class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/50 backdrop-blur-sm text-purple-800 text-sm font-semibold mb-8 animate-fade-in-up">
          <div class="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse mr-3"></div>
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          Join 10,000+ readers worldwide
        </div>

        <!-- Main Headline with Gradient Animation -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in-up delay-100">
          <span class="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent">
            Stories that
          </span>
          <br />
          <span
            class="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
            inspire
          </span>
          <span class="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent">
            & inform
          </span>
        </h1>

        <!-- Enhanced Subheadline -->
        <p
          class="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Discover thought-provoking articles, expert insights, and authentic stories from our global community of
          <span
            class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">passionate
            writers</span>
          and creators.
        </p>

        <!-- Enhanced CTA Buttons -->
        <div v-if="!authStore.isAuthenticated"
          class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-300">
          <Button size="lg"
            class="group px-10 py-5 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            as-child>
            <router-link to="/blog" class="flex items-center">
              <svg class="w-5 h-5 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                </path>
              </svg>
              Start Reading Free
              <svg class="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                </path>
              </svg>
            </router-link>
          </Button>

          <Button variant="outline" size="lg"
            class="group px-10 py-5 text-lg font-semibold border-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            as-child>
            <router-link to="/signup" class="flex items-center">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
              Join Community
            </router-link>
          </Button>
        </div>

        <!-- Enhanced Welcome Back Message -->
        <div v-else class="mb-16 animate-fade-in-up delay-300">
          <Card
            class="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200/50 backdrop-blur-sm shadow-2xl max-w-3xl mx-auto">
            <CardContent class="p-10">
              <div class="flex items-center justify-center mb-6">
                <Avatar class="w-16 h-16 border-4 border-purple-300">
                  <AvatarImage :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${authStore.user?.username}`" />
                  <AvatarFallback class="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold">
                    {{ authStore.user?.name?.charAt(0) }}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3
                class="text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-4">
                Welcome back, {{ authStore.user?.name }}! 👋
              </h3>
              <p class="text-lg text-purple-700 mb-8">
                Ready to {{ authStore.isAuthor ? 'continue crafting amazing stories' : 'discover inspiring new content'
                }}?
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg"
                  class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  as-child>
                  <router-link to="/blog" class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                    {{ authStore.isAuthor ? 'My Dashboard' : 'Explore Stories' }}
                  </router-link>
                </Button>

                <Button v-if="authStore.isAuthor" variant="outline" size="lg"
                  class="px-8 py-4 border-purple-300 text-purple-700 hover:bg-purple-50 bg-white/80 backdrop-blur-sm"
                  as-child>
                  <router-link to="/write" class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                      </path>
                    </svg>
                    Write New Story
                  </router-link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Enhanced Social Proof -->
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-8 text-slate-600 animate-fade-in-up delay-400">
          <div class="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div class="flex -space-x-3 mr-4">
              <Avatar class="w-10 h-10 border-2 border-white">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" />
                <AvatarFallback class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">U1</AvatarFallback>
              </Avatar>
              <Avatar class="w-10 h-10 border-2 border-white">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" />
                <AvatarFallback class="bg-gradient-to-r from-purple-500 to-pink-500 text-white">U2</AvatarFallback>
              </Avatar>
              <Avatar class="w-10 h-10 border-2 border-white">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3" />
                <AvatarFallback class="bg-gradient-to-r from-green-500 to-blue-500 text-white">U3</AvatarFallback>
              </Avatar>
              <div
                class="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                10k+
              </div>
            </div>
            <span class="font-semibold">Active readers</span>
          </div>

          <div class="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div class="flex text-yellow-400 mr-3">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            </div>
            <span class="font-semibold">4.9/5 rating</span>
          </div>

          <div class="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
              </path>
            </svg>
            <span class="font-semibold">100% free</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Features Section -->
    <section class="py-20 bg-white/70 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6">
            Why readers love Blogio
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to discover, read, and share amazing content in one beautiful, modern platform.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <Card
            class="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent class="p-8 text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                  </path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Curated Excellence</h3>
              <p class="text-slate-600">Hand-picked articles from expert writers across diverse topics and industries,
                ensuring quality every time.</p>
            </CardContent>
          </Card>

          <!-- Feature 2 -->
          <Card
            class="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent class="p-8 text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                  </path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Vibrant Community</h3>
              <p class="text-slate-600">Connect with like-minded readers and writers from around the world in meaningful
                conversations.</p>
            </CardContent>
          </Card>

          <!-- Feature 3 -->
          <Card
            class="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent class="p-8 text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                  </path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Pure Reading</h3>
              <p class="text-slate-600">Enjoy distraction-free reading with our clean, minimalist design and zero
                advertisements.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section class="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 relative overflow-hidden">
      <!-- Background Animation -->
      <div class="absolute inset-0">
        <div
          class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse">
        </div>
      </div>

      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
        <div v-if="!authStore.isAuthenticated">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to start your journey?
          </h2>
          <p class="text-xl text-purple-100 mb-10">
            Join our community today and discover stories that will inspire, educate, and transform your perspective.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg"
              class="px-10 py-5 bg-white text-purple-700 hover:bg-purple-50 hover:text-purple-800 font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
              as-child>
              <router-link to="/signup" class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
                Create Free Account
              </router-link>
            </Button>

            <Button size="lg"
              class="px-10 py-5 border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple-700 font-semibold transition-all duration-300 transform hover:scale-105"
              as-child>
              <router-link to="/login" class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                  </path>
                </svg>
                Sign In
              </router-link>
            </Button>
          </div>
        </div>

        <div v-else>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to explore amazing stories?
          </h2>
          <p class="text-xl text-purple-100 mb-10">
            Discover new articles, share your thoughts, and connect with our vibrant community of readers and writers.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg"
              class="px-10 py-5 bg-white text-purple-700 hover:bg-purple-50 hover:text-purple-800 font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
              as-child>
              <router-link to="/blog" class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                  </path>
                </svg>
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
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Initialize auth state on mount
onMounted(() => {
  authStore.initAuth()
})
</script>

<style scoped>
@keyframes animate-gradient-x {

  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }

  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-gradient-x {
  animation: animate-gradient-x 3s ease infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-700 {
  animation-delay: 0.7s;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
