import { create } from 'zustand'
import { axiosInstance } from '../lib/axios'
import toast from 'react-hot-toast'

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true })
    try {
      const res = await axiosInstance.get('/messages/users')
      set({ users: res.data })
    } catch (err) {
      toast.error(err.response.data.message)
    } finally {
      set({ isUsersLoading: false })
    }
  },

  getMessages: async userId => {
    set({ isMessagesLoading: true })
    try {
      const res = await axiosInstance.get(`/messages/${userId}`)
      set({ messages: res.data })
    } catch (err) {
      toast.error(err.response.data.message)
    } finally {
      set({ isMessagesLoading: false })
    }
  },

  sendMessage: async messageData => {
    const { selectedUser, messages } = get()

    console.log('sendMessage called')
    console.log('selectedUser:', selectedUser)
    console.log('messageData:', messageData)

    if (!selectedUser) {
      console.error('No selected user! Cannot send message.')
      toast.error('Please select a user first')
      return
    }

    try {
      const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData)
      console.log('Message sent, response:', res.data)
      set({ messages: [...messages, res.data] })
    } catch (err) {
      console.error('Error sending message:', err)
      toast.error(err.response?.data?.message || 'Failed to send message')
    }
  },

  setSelectedUser: selectedUser => set({ selectedUser }),
}))
