import { BsX } from 'react-icons/bs'
import { useAuthStore } from '../store/useAuthStore'

const ChatHeader = ({ selectedUser, setSelectedUser }) => {
  const { onlineUsers } = useAuthStore()
  return (
    <div className="p-3 h-18 border-b border-dark text-lg font-semibold">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full overflow-hidden">
            <img src={selectedUser.profilePic || '/avatar.png'} alt={selectedUser.fullName} />
          </div>

          <div className="flex flex-col">
            <h4 className="font-medium text-md text-white">{selectedUser.fullName}</h4>
            {onlineUsers.includes(selectedUser._id) ? (
              <span className=" text-green-400 text-xs">online</span>
            ) : (
              <span className="text-gray-500 text-xs">offline</span>
            )}
          </div>
        </div>

        <button onClick={() => setSelectedUser(null)}>
          <BsX className="size-8"/>
        </button>
      </div>
    </div>
  )
}

export default ChatHeader
