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
    <section class="relative py-20 md:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Logo with enhanced styling -->
          <div class="flex justify-center mb-8">
            <div class="relative group">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
              </div>
              <div class="relative bg-white rounded-3xl p-6 shadow-2xl">
                <img src="/images/Blogio.png" alt="Blogio Logo" class="w-16 h-16 md:w-20 md:h-20 mx-auto" />
              </div>
            </div>
          </div>

          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span class="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span class="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Blogio
            </span>
          </h1>

          <div class="space-y-6 mb-16">
            <p class="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
              Where <span class="font-bold text-purple-600">authentic stories</span> meet
              <span class="font-bold text-indigo-600">passionate readers</span>
            </p>
            <p class="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
              A modern platform built for creators who believe in the power of storytelling to change the world,
              one story at a time.
            </p>
          </div>

          <!-- Enhanced Stats with modern cards -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card
              class="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl">
              <CardContent class="p-6 text-center">
                <div
                  class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  10K+</div>
                <div class="text-sm font-medium text-slate-600">Active Writers</div>
              </CardContent>
            </Card>
            <Card
              class="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl">
              <CardContent class="p-6 text-center">
                <div
                  class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  50K+</div>
                <div class="text-sm font-medium text-slate-600">Published Stories</div>
              </CardContent>
            </Card>
            <Card
              class="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl">
              <CardContent class="p-6 text-center">
                <div
                  class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  100K+</div>
                <div class="text-sm font-medium text-slate-600">Monthly Readers</div>
              </CardContent>
            </Card>
            <Card
              class="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl">
              <CardContent class="p-6 text-center">
                <div
                  class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  4.9★</div>
                <div class="text-sm font-medium text-slate-600">User Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="relative py-20 bg-white/50 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="space-y-8">
            <div class="space-y-4">
              <div
                class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/50 text-purple-800 text-sm font-semibold">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                Our Mission
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Every voice <span class="text-purple-600">matters</span>
              </h2>
            </div>
            <div class="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                We've built Blogio on the belief that authentic storytelling has the power to change perspectives,
                build bridges, and create meaningful connections across the globe.
              </p>
              <p>
                From first-time writers to seasoned authors, our platform provides the perfect environment to share
                your unique perspective with readers who truly care about your story.
              </p>
              <p>
                Join thousands of creators who are already sharing their passion, expertise, and experiences with our
                engaged community of readers.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <Button size="lg"
                class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild>
                <router-link to="/signup">
                  Start Writing Today
                </router-link>
              </Button>
              <Button size="lg" variant="outline"
                class="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl transition-all duration-300"
                asChild>
                <router-link to="/blog">
                  Explore Stories
                </router-link>
              </Button>
            </div>
          </div>

          <!-- Feature Grid -->
          <div class="grid grid-cols-2 gap-6">
            <Card
              class="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg hover:shadow-xl">
              <CardContent class="p-8">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                    </path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">Smart Editor</h3>
                <p class="text-slate-600 leading-relaxed">Advanced writing tools with AI assistance that adapts to your
                  unique style</p>
              </CardContent>
            </Card>

            <Card
              class="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg hover:shadow-xl mt-8">
              <CardContent class="p-8">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                    </path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">Global Community</h3>
                <p class="text-slate-600 leading-relaxed">Connect with passionate writers and readers from around the
                  world</p>
              </CardContent>
            </Card>

            <Card
              class="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50 border-0 shadow-lg hover:shadow-xl">
              <CardContent class="p-8">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                    </path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">Analytics</h3>
                <p class="text-slate-600 leading-relaxed">Detailed insights to understand your audience and optimize
                  content</p>
              </CardContent>
            </Card>

            <Card
              class="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-lg hover:shadow-xl mt-8">
              <CardContent class="p-8">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                    </path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">Privacy First</h3>
                <p class="text-slate-600 leading-relaxed">Complete control over your content with industry-leading
                  security</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="relative py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200/50 text-indigo-800 text-sm font-semibold mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z">
              </path>
            </svg>
            Our Team
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet the <span class="text-purple-600">Dreamers</span>
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The passionate team behind Blogio's mission to democratize storytelling and amplify every voice
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            class="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl">
            <CardContent class="p-8 text-center">
              <div class="relative mb-6 mx-auto">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000">
                </div>
                <Avatar class="relative w-20 h-20 mx-auto shadow-xl">
                  <AvatarFallback class="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xl font-bold">AS
                  </AvatarFallback>
                </Avatar>
                <Badge
                  class="absolute -bottom-1 -right-1 w-6 h-6 p-0 bg-emerald-500 border-2 border-white rounded-full">
                </Badge>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1">Alex Stone</h3>
              <p class="text-blue-600 font-semibold mb-3">Founder & CEO</p>
              <p class="text-sm text-slate-600">Storytelling evangelist with 10+ years in digital media</p>
            </CardContent>
          </Card>

          <Card
            class="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl">
            <CardContent class="p-8 text-center">
              <div class="relative mb-6 mx-auto">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000">
                </div>
                <Avatar class="relative w-20 h-20 mx-auto shadow-xl">
                  <AvatarFallback class="bg-gradient-to-br from-purple-500 to-purple-600 text-white text-xl font-bold">
                    MJ</AvatarFallback>
                </Avatar>
                <Badge
                  class="absolute -bottom-1 -right-1 w-6 h-6 p-0 bg-emerald-500 border-2 border-white rounded-full">
                </Badge>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1">Maria Johnson</h3>
              <p class="text-purple-600 font-semibold mb-3">Head of Content</p>
              <p class="text-sm text-slate-600">Community architect fostering creative connections</p>
            </CardContent>
          </Card>

          <Card
            class="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl">
            <CardContent class="p-8 text-center">
              <div class="relative mb-6 mx-auto">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000">
                </div>
                <Avatar class="relative w-20 h-20 mx-auto shadow-xl">
                  <AvatarFallback class="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white text-xl font-bold">
                    DL</AvatarFallback>
                </Avatar>
                <Badge
                  class="absolute -bottom-1 -right-1 w-6 h-6 p-0 bg-emerald-500 border-2 border-white rounded-full">
                </Badge>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1">David Lee</h3>
              <p class="text-indigo-600 font-semibold mb-3">Lead Developer</p>
              <p class="text-sm text-slate-600">Code storyteller building seamless experiences</p>
            </CardContent>
          </Card>

          <Card
            class="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl">
            <CardContent class="p-8 text-center">
              <div class="relative mb-6 mx-auto">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000">
                </div>
                <Avatar class="relative w-20 h-20 mx-auto shadow-xl">
                  <AvatarFallback
                    class="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-xl font-bold">SK
                  </AvatarFallback>
                </Avatar>
                <Badge
                  class="absolute -bottom-1 -right-1 w-6 h-6 p-0 bg-emerald-500 border-2 border-white rounded-full">
                </Badge>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1">Sarah Kim</h3>
              <p class="text-emerald-600 font-semibold mb-3">UX Designer</p>
              <p class="text-sm text-slate-600">Experience crafter with a passion for user delight</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 md:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 border-0 shadow-2xl">
          <!-- Background Pattern -->
          <div class="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-500/20"></div>

          <CardContent class="relative p-12 md:p-20 text-center">
            <div class="max-w-4xl mx-auto">
              <div
                class="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-8">
                <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-3"></div>
                Join our community today
              </div>

              <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Your story starts
                <span class="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  here
                </span>
              </h2>

              <p class="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join a community that celebrates authenticity, creativity, and the transformative power of words.
                Start sharing your unique perspective with the world.
              </p>

              <div class="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg"
                  class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
                  asChild>
                  <router-link to="/signup">
                    Begin Your Journey
                  </router-link>
                </Button>
                <Button size="lg" variant="outline"
                  class="border-2 border-white/30  hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  asChild>
                  <router-link to="/blog">
                    Discover Stories
                  </router-link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
</script>

<style scoped>
.bg-grid-white {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

@keyframes gradient-x {

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

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}
</style>
