import { create } from 'zustand'
import { axiosInstance } from '../lib/axios'

export const useAuthStore = create(set => ({
  authUser: null,
  isSigninUp: false,
  isLoggingUp: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get('/auth/check')
      set({ authUser: res.data })
    } catch (err) {
      set({ authUser: null })
      console.log("Error in checkAuth:", err)
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signup: async (data) => {
    // todo
  }
}))
