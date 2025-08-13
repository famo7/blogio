<template>
  <nav class="bg-white border-b border-blue-100 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-3 group">
            <img src="/images/Blogio.png" alt="Blogio Logo"
              class="h-8 w-auto transition-transform duration-200 group-hover:scale-105" />
            <span
              class="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all duration-200">
              Blogio
            </span>
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link to="/"
              class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-blue-600 bg-blue-50 font-semibold': $route.name === 'Home' }">
              Home
            </router-link>
            <router-link to="/about"
              class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </router-link>
            <router-link to="/blog"
              class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </router-link>
          </div>
        </div>

        <!-- Auth Links -->
        <div class="flex items-center space-x-3">
          <!-- Auth buttons -->
          <div v-if="authStore.isAuthenticated" class="flex items-center space-x-4">
            <span class="text-sm text-blue-700 font-medium">Welcome, {{ authStore.user?.name }}</span>
            <Button @click="handleLogout" variant="outline" size="sm"
              class="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300">
              Logout
            </Button>
          </div>
          <div v-else class="flex items-center space-x-2">
            <router-link to="/login">
              <Button variant="outline" size="sm"
                class="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300">Login</Button>
            </router-link>
            <router-link to="/signup">
              <Button size="sm" class="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">Sign Up</Button>
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <Button variant="ghost" size="sm" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 pt-4 pb-3">
        <div class="space-y-1">
          <router-link to="/"
            class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
            @click="mobileMenuOpen = false">
            Home
          </router-link>
          <router-link to="/about"
            class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
            @click="mobileMenuOpen = false">
            About
          </router-link>
          <router-link to="/blog"
            class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
            @click="mobileMenuOpen = false">
            Blog
          </router-link>
        </div>
        <div class="pt-4 border-t border-blue-100">
          <div v-if="authStore.isAuthenticated" class="space-y-2">
            <div class="px-3 py-2 text-sm text-blue-700 font-medium">
              Welcome, {{ authStore.user?.name }}
            </div>
            <Button @click="handleLogout; mobileMenuOpen = false" variant="outline" size="sm"
              class="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300">
              Logout
            </Button>
          </div>
          <div v-else class="space-y-2">
            <router-link to="/login"
              class="block w-full text-left px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md border border-blue-200"
              @click="mobileMenuOpen = false">
              Login
            </router-link>
            <router-link to="/signup"
              class="block w-full text-left px-3 py-2 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md"
              @click="mobileMenuOpen = false">
              Sign Up
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth'

const mobileMenuOpen = ref(false)
const authStore = useAuthStore()

// Initialize auth state on mount
onMounted(() => {
  authStore.initAuth()
})

const handleLogout = () => {
  authStore.logout()
}
</script>
