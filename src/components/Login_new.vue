<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse">
      </div>
      <div
        class="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000">
      </div>
    </div>

    <div class="max-w-md w-full relative">
      <!-- Logo Section -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center space-x-3 mb-6">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-sm opacity-70">
            </div>
            <div class="relative bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                </path>
              </svg>
            </div>
          </div>
          <div>
            <h1
              class="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Blogio
            </h1>
            <p class="text-xs text-muted-foreground">Where stories come alive</p>
          </div>
        </div>

        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p class="text-muted-foreground">Sign in to continue your reading journey</p>
        </div>
      </div>

      <!-- Login Form Card -->
      <Card class="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
        <CardContent class="p-8">
          <!-- Alerts -->
          <div v-if="error" class="mb-6">
            <Alert variant="destructive" class="border-red-200 bg-red-50/80 backdrop-blur-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <AlertDescription class="text-red-800">{{ error }}</AlertDescription>
            </Alert>
          </div>

          <div v-if="success" class="mb-6">
            <Alert class="border-green-200 bg-green-50/80 backdrop-blur-sm">
              <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <AlertDescription class="text-green-800">{{ success }}</AlertDescription>
            </Alert>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Email Field -->
            <div class="space-y-2">
              <Label for="email" class="text-sm font-medium">Email address</Label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207">
                    </path>
                  </svg>
                </div>
                <Input id="email" v-model="formData.email" type="email" placeholder="Enter your email"
                  class="pl-10 h-12 border-border/50 bg-background/50 backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500"
                  required />
              </div>
            </div>

            <!-- Password Field -->
            <div class="space-y-2">
              <Label for="password" class="text-sm font-medium">Password</Label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                    </path>
                  </svg>
                </div>
                <Input id="password" v-model="formData.password" type="password" placeholder="Enter your password"
                  class="pl-10 h-12 border-border/50 bg-background/50 backdrop-blur-sm focus:border-blue-500 focus:ring-blue-500"
                  required />
              </div>
            </div>

            <!-- Submit Button -->
            <Button type="submit" :disabled="loading"
              class="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              <div v-if="loading" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                Signing in...
              </div>
              <div v-else class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                  </path>
                </svg>
                Sign In
              </div>
            </Button>
          </form>

          <!-- Divider -->
          <div class="mt-8">
            <Separator class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-border/50"></div>
              </div>
              <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-white px-2 text-muted-foreground">New to Blogio?</span>
              </div>
            </Separator>
          </div>

          <!-- Sign Up Link -->
          <div class="mt-6 text-center">
            <p class="text-sm text-muted-foreground">
              Don't have an account?
              <Button variant="link" as-child class="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700">
                <router-link to="/signup">
                  Create your account
                </router-link>
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>

      <!-- Trust Indicators -->
      <div class="mt-8 text-center">
        <div class="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <div class="flex items-center space-x-1">
            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
              </path>
            </svg>
            <span>Secure login</span>
          </div>
          <div class="flex items-center space-x-1">
            <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
              </path>
            </svg>
            <span>Lightning fast</span>
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
import { Separator } from '@/components/ui/separator'

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
