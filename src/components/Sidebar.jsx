import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import { FaUser } from 'react-icons/fa'
import { useAuthStore } from '../store/useAuthStore'

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore()

  const { onlineUsers } = useAuthStore()

  useEffect(() => {
    getUsers()
  }, [getUsers])

  if (isUsersLoading) return 1

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-dark bg-middle text-dark flex flex-col transition-all duration-300">
      <div className="border-b border-dark w-full p-5 h-18">
        <div className="flex items-center gap-4">
          <FaUser className="size-6" />
          <span className="font-medium text-xl hidden lg:flex">Contacts</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full pb-3">
        {users.map(user => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`w-full p-3 flex items-center gap-3 transition-all duration-300 hover:bg-dark-alt ${
              selectedUser?._id === user._id ? 'bg-dark-alt' : ''
            }`}
          >
            <div className="relative mx-auto lg:mx-0 flex items-center gap-4">
              <img
                src={user.profilePic || 'avatar.png'}
                alt={user.name}
                className="size-12 object-cover rounded-full"
              ></img>
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-400 rounded-full"></span>
              )}
            </div>
            <div className="hidden lg:flex flex-col items-start">
              <span className="font-medium text-md text-white"> {user.fullName}</span>
              {onlineUsers.includes(user._id) ? (
                <span className=" text-green-400 text-xs">online</span>
              ) : (
                <span className="text-gray-500 text-xs">offline</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
