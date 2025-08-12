<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <!-- Hero Section -->
    <section class="relative py-24 overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-40">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse">
        </div>
        <div
          class="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000">
        </div>
        <div
          class="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000">
        </div>
      </div>

      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Icon Badge -->
        <div
          class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl mb-8 shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-transform duration-300">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
            </path>
          </svg>
        </div>

        <!-- Main Heading -->
        <h1
          class="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8 leading-none tracking-tight">
          Blogio
        </h1>

        <!-- Subheading -->
        <div class="max-w-4xl mx-auto mb-12">
          <p class="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed mb-6">
            Where <span class="font-semibold text-blue-600">authentic stories</span> meet
            <span class="font-semibold text-purple-600">passionate readers</span>
          </p>
          <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
            A modern platform built for creators who believe in the power of storytelling
          </p>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div class="text-sm md:text-base text-gray-600 font-medium">Creators</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50K+</div>
            <div class="text-sm md:text-base text-gray-600 font-medium">Stories</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">100K+</div>
            <div class="text-sm md:text-base text-gray-600 font-medium">Readers</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">4.8★</div>
            <div class="text-sm md:text-base text-gray-600 font-medium">Rating</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="py-20 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <!-- Card with floating elements -->
            <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <div
                class="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20">
              </div>
              <div
                class="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-20">
              </div>

              <div class="relative">
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Every voice
                  <span class="text-blue-600">matters</span>
                </h2>
                <p class="text-lg text-gray-600 leading-relaxed mb-6">
                  We've built Blogio on the belief that authentic storytelling has the power to change perspectives,
                  build bridges, and create meaningful connections across the globe.
                </p>
                <p class="text-lg text-gray-600 leading-relaxed">
                  From first-time writers to seasoned authors, our platform provides the perfect environment to share
                  your unique perspective with the world.
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <!-- Feature cards -->
            <div
              class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                  </path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Smart Editor</h3>
              <p class="text-sm text-gray-600">Advanced writing tools that adapt to your style</p>
            </div>

            <div
              class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 mt-8">
              <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                  </path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Community</h3>
              <p class="text-sm text-gray-600">Connect with like-minded creators</p>
            </div>

            <div
              class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
              <div class="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                  </path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Analytics</h3>
              <p class="text-sm text-gray-600">Track your story's impact</p>
            </div>

            <div
              class="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 mt-8">
              <div class="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                  </path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Privacy</h3>
              <p class="text-sm text-gray-600">Your content, your control</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the <span class="text-blue-600">Dreamers</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate team behind Blogio's mission to democratize storytelling
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="group text-center">
            <div class="relative mb-6">
              <div
                class="w-32 h-32 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <span class="text-white text-2xl font-bold">AS</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-1">Alex Stone</h3>
            <p class="text-blue-600 font-medium mb-2">Founder & CEO</p>
            <p class="text-sm text-gray-600">Storytelling evangelist</p>
          </div>

          <div class="group text-center">
            <div class="relative mb-6">
              <div
                class="w-32 h-32 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <span class="text-white text-2xl font-bold">MJ</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-1">Maria Johnson</h3>
            <p class="text-purple-600 font-medium mb-2">Head of Content</p>
            <p class="text-sm text-gray-600">Community architect</p>
          </div>

          <div class="group text-center">
            <div class="relative mb-6">
              <div
                class="w-32 h-32 bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <span class="text-white text-2xl font-bold">DL</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-1">David Lee</h3>
            <p class="text-indigo-600 font-medium mb-2">Lead Developer</p>
            <p class="text-sm text-gray-600">Code storyteller</p>
          </div>

          <div class="group text-center">
            <div class="relative mb-6">
              <div
                class="w-32 h-32 bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 rounded-full mx-auto flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <span class="text-white text-2xl font-bold">SK</span>
              </div>
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-1">Sarah Kim</h3>
            <p class="text-cyan-600 font-medium mb-2">UX Designer</p>
            <p class="text-sm text-gray-600">Experience crafter</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-6">
        </div>
      </div>

      <div class="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Your story starts
          <span class="block text-yellow-300">here</span>
        </h2>
        <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join a community that celebrates authenticity, creativity, and the power of words to change the world.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg"
            class="px-10 py-5 bg-white text-blue-700 hover:bg-yellow-100 hover:text-blue-800 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-2xl"
            as-child>
            <router-link to="/signup">
              Begin Your Journey
            </router-link>
          </Button>
          <Button size="lg"
            class="px-10 py-5 border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700 font-bold text-lg transition-all duration-300 transform hover:scale-105 rounded-2xl"
            as-child>
            <router-link to="/blog">
              Discover Stories
            </router-link>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<style scoped>
.bg-grid-slate-100 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
}
</style>
