<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse">
      </div>
      <div
        class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-700">
      </div>
      <div
        class="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000">
      </div>
    </div>

    <div class="max-w-2xl w-full relative">
      <!-- Logo Section -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center space-x-3 mb-6">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-sm opacity-70">
            </div>
            <div class="relative bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
            </div>
          </div>
          <div>
            <h1
              class="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
              Blogio
            </h1>
            <p class="text-xs text-muted-foreground">Where stories come alive</p>
          </div>
        </div>

        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tight">Join our community</h2>
          <p class="text-muted-foreground">Create your account and start your reading journey</p>
        </div>
      </div>

      <!-- SignUp Form Card -->
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
            <!-- Name and Username Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <Label for="name" class="text-sm font-medium">Full Name</Label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <Input id="name" v-model="formData.name" type="text" placeholder="Enter your full name"
                    class="pl-10 h-12 border-border/50 bg-background/50 backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500"
                    required />
                </div>
              </div>

              <div class="space-y-2">
                <Label for="username" class="text-sm font-medium">Username</Label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z">
                      </path>
                    </svg>
                  </div>
                  <Input id="username" v-model="formData.username" type="text" placeholder="Choose a username"
                    class="pl-10 h-12 border-border/50 bg-background/50 backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500"
                    required />
                </div>
              </div>
            </div>

            <!-- Email Field -->
            <div class="space-y-2">
              <Label for="email" class="text-sm font-medium">Email Address</Label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207">
                    </path>
                  </svg>
                </div>
                <Input id="email" v-model="formData.email" type="email" placeholder="Enter your email address"
                  class="pl-10 h-12 border-border/50 bg-background/50 backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500"
                  required />
              </div>
            </div>

            <!-- Password Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Input id="password" v-model="formData.password" type="password" placeholder="Min. 6 characters"
                    class="pl-10 h-12 border-border/50 bg-background/50 backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500"
                    required />
                </div>
              </div>

              <div class="space-y-2">
                <Label for="repeatPassword" class="text-sm font-medium">Confirm Password</Label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <Input id="repeatPassword" v-model="formData.repeatPassword" type="password"
                    placeholder="Repeat password"
                    class="pl-10 h-12 border-border/50 bg-background/50 backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500"
                    required />
                </div>
              </div>
            </div>

            <!-- Account Type Selection -->
            <div class="space-y-4">
              <Label class="text-sm font-medium">I want to join as a</Label>
              <RadioGroup v-model="formData.role" class="grid grid-cols-2 gap-4">
                <div class="relative">
                  <RadioGroupItem value="USER" id="reader" class="sr-only" />
                  <Label for="reader" :class="[
                    'flex items-center justify-center rounded-xl border-2 bg-white/70 backdrop-blur-sm p-6 cursor-pointer transition-all duration-200 hover:shadow-lg',
                    formData.role === 'USER'
                      ? 'border-purple-500 bg-purple-50/80 shadow-lg'
                      : 'border-border/50 hover:border-purple-300'
                  ]">
                    <div class="text-center">
                      <div class="relative mb-3">
                        <div :class="[
                          'w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-all',
                          formData.role === 'USER'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : 'bg-muted text-muted-foreground'
                        ]">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div :class="[
                        'font-semibold text-sm mb-1',
                        formData.role === 'USER' ? 'text-purple-900' : 'text-foreground'
                      ]">Reader</div>
                      <div class="text-xs text-muted-foreground">Browse & read articles</div>
                    </div>
                  </Label>
                </div>

                <div class="relative">
                  <RadioGroupItem value="AUTHOR" id="author" class="sr-only" />
                  <Label for="author" :class="[
                    'flex items-center justify-center rounded-xl border-2 bg-white/70 backdrop-blur-sm p-6 cursor-pointer transition-all duration-200 hover:shadow-lg',
                    formData.role === 'AUTHOR'
                      ? 'border-purple-500 bg-purple-50/80 shadow-lg'
                      : 'border-border/50 hover:border-purple-300'
                  ]">
                    <div class="text-center">
                      <div class="relative mb-3">
                        <div :class="[
                          'w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-all',
                          formData.role === 'AUTHOR'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                            : 'bg-muted text-muted-foreground'
                        ]">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <div :class="[
                        'font-semibold text-sm mb-1',
                        formData.role === 'AUTHOR' ? 'text-purple-900' : 'text-foreground'
                      ]">Author</div>
                      <div class="text-xs text-muted-foreground">Write & publish</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <!-- Submit Button -->
            <Button type="submit" :disabled="loading"
              class="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              <div v-if="loading" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 818-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                Creating Account...
              </div>
              <div v-else class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
                Create Account
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
                <span class="bg-white px-2 text-muted-foreground">Already have an account?</span>
              </div>
            </Separator>
          </div>

          <!-- Login Link -->
          <div class="mt-6 text-center">
            <p class="text-sm text-muted-foreground">
              Already have an account?
              <Button variant="link" as-child class="p-0 h-auto font-semibold text-purple-600 hover:text-purple-700">
                <router-link to="/login">
                  Sign in here
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
            <span>100% secure</span>
          </div>
          <div class="flex items-center space-x-1">
            <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Free forever</span>
          </div>
          <div class="flex items-center space-x-1">
            <svg class="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
import { Separator } from '@/components/ui/separator'

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
