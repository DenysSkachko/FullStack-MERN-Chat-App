import { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import { useAuthStore } from '../store/useAuthStore'
import MessageInput from './ui/MessageInput'
import ChatHeader from './ChatHeader'
import MessageCard from './ui/MessageCard'

const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser, setSelectedUser } = useChatStore()
  const { authUser } = useAuthStore()

  useEffect(() => {
    if (selectedUser?._id) getMessages(selectedUser._id)
  }, [selectedUser._id, getMessages])

  if (isMessagesLoading) return <div>Loading...</div>

  return (
    <div className="flex flex-col flex-1">
      <ChatHeader selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map(message => {
          const person = message.senderId === authUser._id
          const avatar = person
            ? authUser.profilePic || '/avatar.png'
            : selectedUser.profilePic || '/avatar.png'

          return <MessageCard key={message._id} person={person} avatar={avatar} message={message} />
        })}
      </div>

      <MessageInput />
    </div>
  )
}

export default ChatContainer
