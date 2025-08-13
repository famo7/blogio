<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10">
    </div>

    <div class="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <!-- Header Section -->
        <div class="text-center mb-8">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
          </div>
          <h1 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2">
            Welcome back
          </h1>
          <p class="text-gray-600">
            Sign in to continue your reading journey
          </p>
        </div>

        <!-- Login Form Card -->
        <Card class="backdrop-blur-sm bg-white/80 border-blue-100 shadow-xl shadow-blue-100/20">
          <CardContent class="p-8">
            <!-- Alerts -->
            <div v-if="error" class="mb-6">
              <Alert variant="destructive" class="border-red-200 bg-red-50">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <AlertDescription class="text-red-700">{{ error }}</AlertDescription>
              </Alert>
            </div>

            <div v-if="success" class="mb-6">
              <Alert variant="success" class="border-green-200 bg-green-50">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <AlertDescription class="text-green-700">{{ success }}</AlertDescription>
              </Alert>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-2">
                <Label for="email" class="text-sm font-medium text-gray-700">Email address</Label>
                <div class="relative">
                  <Input id="email" v-model="formData.email" type="email" required placeholder="Enter your email"
                    class="pl-11 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/50" />
                  <svg class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207">
                    </path>
                  </svg>
                </div>
              </div>

              <div class="space-y-2">
                <Label for="password" class="text-sm font-medium text-gray-700">Password</Label>
                <div class="relative">
                  <Input id="password" v-model="formData.password" type="password" required
                    placeholder="Enter your password"
                    class="pl-11 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/50" />
                  <svg class="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                    </path>
                  </svg>
                </div>
              </div>

              <div class="flex items-center justify-between text-sm">
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-4 w-4">
                  <span class="ml-2 text-gray-600">Remember me</span>
                </label>
                <a href="#" class="text-blue-600 hover:text-blue-700 font-medium">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" :disabled="loading"
                class="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                {{ loading ? 'Signing in...' : 'Sign In' }}
              </Button>
            </form>
          </CardContent>
        </Card>

        <!-- Footer -->
        <div class="text-center mt-8">
          <p class="text-gray-600">
            Don't have an account?
            <router-link to="/signup" class="font-semibold text-blue-600 hover:text-blue-700 ml-1 transition-colors">
              Create one here
            </router-link>
          </p>
        </div>

        <!-- Trust Indicators -->
        <div class="flex items-center justify-center mt-8 space-x-6 text-xs text-gray-500">
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"></path>
            </svg>
            <span>Secure login</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
            </svg>
            <span>Privacy protected</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService, type LoginData } from '@/services/authService'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

const router = useRouter()

const formData = ref<LoginData>({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref<string | null>(null)
const success = ref<string | null>(null)

const handleSubmit = async () => {
  if (!formData.value.email || !formData.value.password) {
    error.value = 'Please fill in all fields'
    return
  }

  loading.value = true
  error.value = null
  success.value = null

  try {
    await authService.login(formData.value)
    success.value = 'Login successful! Redirecting to blog...'

    // Redirect to blog page after successful login
    setTimeout(() => {
      router.push('/blog')
    }, 1500)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Login failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.bg-grid-slate-100 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
}
</style>
