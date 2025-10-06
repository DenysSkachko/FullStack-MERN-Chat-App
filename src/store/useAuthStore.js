import { create } from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check")
      set({ authUser: res.data })
    } catch (err) {
      set({ authUser: null })
      console.log("Error in checkAuth:", err)
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true })
    try {
      const res = await axiosInstance.post("/auth/signup", data)
      console.log("Signup response:", res) // 👈 посмотри в консоли, что пришло
      if (!res || !res.data) throw new Error("Empty response from server")

      set({ authUser: res.data })
      toast.success("Account created successfully")
      return res.data
    } catch (err) {
      console.error("Signup error:", err)
      const message =
        err.response?.data?.message ||
        err.message ||
        "Signup failed. Please try again."
      toast.error(message)
    } finally {
      set({ isSigningUp: false })
    }
  },
}))
