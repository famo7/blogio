<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10">
    </div>

    <div class="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-lg w-full">
        <!-- Header Section -->
        <div class="text-center mb-8">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>
          </div>
          <h1 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2">
            Join our community
          </h1>
          <p class="text-gray-600">
            Create your account and start your reading journey
          </p>
        </div>

        <!-- SignUp Form Card -->
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

            <form @submit.prevent="handleSubmit" class="space-y-5">
              <!-- Name and Username Row -->
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label for="name" class="text-sm font-medium text-gray-700">Full Name</Label>
                  <div class="relative">
                    <Input id="name" v-model="formData.name" type="text" required placeholder="John Doe"
                      class="pl-11 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/50" />
                    <svg class="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                </div>

                <div class="space-y-2">
                  <Label for="username" class="text-sm font-medium text-gray-700">Username</Label>
                  <div class="relative">
                    <Input id="username" v-model="formData.username" type="text" required placeholder="johndoe"
                      class="pl-11 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/50" />
                    <svg class="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <Label for="email" class="text-sm font-medium text-gray-700">Email Address</Label>
                <div class="relative">
                  <Input id="email" v-model="formData.email" type="email" required placeholder="john@example.com"
                    class="pl-11 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/50" />
                  <svg class="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207">
                    </path>
                  </svg>
                </div>
              </div>

              <!-- Password Row -->
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label for="password" class="text-sm font-medium text-gray-700">Password</Label>
                  <div class="relative">
                    <Input id="password" v-model="formData.password" type="password" required
                      placeholder="Min. 6 characters"
                      class="pl-11 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/50" />
                    <svg class="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                      </path>
                    </svg>
                  </div>
                </div>

                <div class="space-y-2">
                  <Label for="repeatPassword" class="text-sm font-medium text-gray-700">Confirm</Label>
                  <div class="relative">
                    <Input id="repeatPassword" v-model="formData.repeatPassword" type="password" required
                      placeholder="Repeat password"
                      class="pl-11 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/50" />
                    <svg class="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Account Type -->
              <div class="space-y-3">
                <Label class="text-sm font-medium text-gray-700">I want to join as a</Label>
                <RadioGroup v-model="formData.role" class="grid grid-cols-2 gap-4">
                  <div class="relative">
                    <RadioGroupItem value="USER" id="reader" class="sr-only" />
                    <Label for="reader" :class="[
                      'flex items-center justify-center rounded-lg border-2 bg-white p-4 cursor-pointer transition-all',
                      formData.role === 'USER'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    ]">
                      <div class="text-center">
                        <svg :class="[
                          'w-6 h-6 mx-auto mb-2',
                          formData.role === 'USER' ? 'text-blue-600' : 'text-gray-600'
                        ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                          </path>
                        </svg>
                        <div :class="[
                          'font-medium text-sm',
                          formData.role === 'USER' ? 'text-blue-900' : 'text-gray-900'
                        ]">Reader</div>
                        <div class="text-xs text-gray-500">Browse & read articles</div>
                      </div>
                    </Label>
                  </div>

                  <div class="relative">
                    <RadioGroupItem value="AUTHOR" id="author" class="sr-only" />
                    <Label for="author" :class="[
                      'flex items-center justify-center rounded-lg border-2 bg-white p-4 cursor-pointer transition-all',
                      formData.role === 'AUTHOR'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    ]">
                      <div class="text-center">
                        <svg :class="[
                          'w-6 h-6 mx-auto mb-2',
                          formData.role === 'AUTHOR' ? 'text-blue-600' : 'text-gray-600'
                        ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                          </path>
                        </svg>
                        <div :class="[
                          'font-medium text-sm',
                          formData.role === 'AUTHOR' ? 'text-blue-900' : 'text-gray-900'
                        ]">Author</div>
                        <div class="text-xs text-gray-500">Write & publish</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" :disabled="loading"
                class="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 mt-6">
                <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                {{ loading ? 'Creating Account...' : 'Create Account' }}
              </Button>
            </form>
          </CardContent>
        </Card>

        <!-- Footer -->
        <div class="text-center mt-8">
          <p class="text-gray-600">
            Already have an account?
            <router-link to="/login" class="font-semibold text-blue-600 hover:text-blue-700 ml-1 transition-colors">
              Sign in here
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
            <span>100% secure</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Free forever</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1.5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z">
              </path>
            </svg>
            <span>No spam</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService, type SignUpData } from '@/services/authService'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Alert, AlertDescription } from '@/components/ui/alert'

const router = useRouter()

const formData = ref<SignUpData>({
  name: '',
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
  role: 'USER'
})

const loading = ref(false)
const error = ref<string | null>(null)
const success = ref<string | null>(null)

const handleSubmit = async () => {
  // Validation
  if (!formData.value.name || !formData.value.username || !formData.value.email ||
    !formData.value.password || !formData.value.repeatPassword) {
    error.value = 'Please fill in all fields'
    return
  }

  if (formData.value.password !== formData.value.repeatPassword) {
    error.value = 'Passwords do not match'
    return
  }

  if (formData.value.password.length < 6) {
    error.value = 'Password must be at least 6 characters long'
    return
  }

  loading.value = true
  error.value = null
  success.value = null

  try {
    await authService.signUp(formData.value)
    success.value = 'Account created successfully! Redirecting to login...'

    // Redirect to login page after successful signup
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Sign up failed. Please try again.'
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
