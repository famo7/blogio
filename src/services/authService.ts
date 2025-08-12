import { useAuthStore } from '@/stores/auth'
import { API_CONFIG, buildApiUrl } from '@/config/api'

export interface LoginData {
  email: string
  password: string
}

export interface SignUpData {
  name: string
  username: string
  email: string
  password: string
  repeatPassword: string
  role: 'USER' | 'AUTHOR'
}

export const authService = {
  login: async (data: LoginData) => {
    try {
      const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.AUTH.LOGIN), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        // Handle different error status codes with user-friendly messages
        if (response.status === 401) {
          throw new Error('Invalid email or password. Please check your credentials and try again.')
        } else if (response.status === 400) {
          throw new Error('Please provide valid email and password.')
        } else if (response.status >= 500) {
          throw new Error('Server error. Please try again later.')
        } else {
          throw new Error('Login failed. Please try again.')
        }
      }

      const result = await response.json()
      console.log('Login successful:', result)

      // Extract token and user data from the nested response
      const { token, ...userData } = result.data
      const authStore = useAuthStore()
      authStore.setAuth(token, userData)

      return result
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }, signUp: async (data: SignUpData) => {
    try {

      const { repeatPassword, ...signUpData } = data

      const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.AUTH.SIGNUP), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      })

      if (!response.ok) {
        // Handle different error status codes with user-friendly messages
        if (response.status === 409) {
          throw new Error('An account with this email or username already exists. Please try a different one.')
        } else if (response.status === 400) {
          throw new Error('Please check your information and try again. Make sure all fields are filled correctly.')
        } else if (response.status >= 500) {
          throw new Error('Server error. Please try again later.')
        } else {
          throw new Error('Account creation failed. Please try again.')
        }
      }

      const result = await response.json()
      console.log('Sign up successful:', result)

      // Signup endpoint only returns success message, no token/user data
      // Don't try to extract token or set auth state
      // The user will need to login separately after signup

      return result
    } catch (error) {
      console.error('Sign up error:', error)
      throw error
    }
  }
}