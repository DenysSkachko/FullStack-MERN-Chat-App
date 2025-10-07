import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import { FaUser } from 'react-icons/fa'

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore()

  useEffect(() => {
    getUsers()
  }, [getUsers])

  if (isUsersLoading) return 1

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-dark bg-accent text-dark flex flex-col transition-all duration-300">
      <div className="border-b border-dark w-full p-5 h-18">
        <div className="flex items-center gap-4">
          <FaUser className="size-6" />
          <span className="font-medium text-xl">Contacts</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full pb-3">
        {users.map(user => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`w-full p-3 flex items-center gap-3 hover:bg-dark-alt ${selectedUser?._id === user._id ? "bg-middle" : ""}`}
          >
            <div className="relative mx-auto lg:mx-0 flex items-center gap-4">
              <img
                src={user.profilePic || 'avatar.png'}
                alt={user.name}
                className="size-12 object-cover rounded-full"
              ></img>
              <span className="font-medium"> {user.fullName}</span>
            </div>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
