import { BsX } from 'react-icons/bs'

const ChatHeader = ({ selectedUser, setSelectedUser }) => {
  return (
    <div className="p-3 h-18 border-b border-dark text-lg font-semibold">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full overflow-hidden">
            <img src={selectedUser.profilePic || '/avatar.png'} alt={selectedUser.fullName} />
          </div>

          <div className="flex items-center gap-4">
            <h4 className="font-medium">{selectedUser.fullName}</h4>
            <p className="text-sm text-green-500">online</p>
          </div>
        </div>

        <button onClick={() => setSelectedUser(null)}>
          <BsX />
        </button>
      </div>
    </div>
  )
}

export default ChatHeader
