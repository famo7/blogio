import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
  id: number
  name: string
  username: string
  email: string
  role: 'USER' | 'AUTHOR'
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const token = ref<string | null>(localStorage.getItem('token'))
  const user = ref<User | null>(null)

  // Getters
  const isAuthenticated = computed(() => !!token.value)
  const isAuthor = computed(() => user.value?.role === 'AUTHOR')
  const isUser = computed(() => user.value?.role === 'USER')

  // Actions
  const setAuth = (authToken: string, userData: User) => {
    token.value = authToken
    user.value = userData
    localStorage.setItem('token', authToken)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const clearAuth = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const initAuth = () => {
    const savedToken = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')

    if (savedToken && savedUser) {
      token.value = savedToken
      user.value = JSON.parse(savedUser)
    }
  }

  const logout = () => {
    clearAuth()
    // Optionally redirect to login page
    // router.push('/login')
  }

  return {
    // State
    token,
    user,
    // Getters
    isAuthenticated,
    isAuthor,
    isUser,
    // Actions
    setAuth,
    clearAuth,
    initAuth,
    logout
  }
})