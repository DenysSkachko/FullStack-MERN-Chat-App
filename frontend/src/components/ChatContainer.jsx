import { useEffect, useRef } from 'react'
import { useChatStore } from '../store/useChatStore'
import { useAuthStore } from '../store/useAuthStore'
import MessageInput from './ui/MessageInput'
import ChatHeader from './ChatHeader'
import MessageCard from './ui/MessageCard'

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    setSelectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore()
  const { authUser } = useAuthStore()
  const messageEndRef = useRef(null)

  useEffect(() => {
    if (selectedUser?._id) getMessages(selectedUser._id)

    subscribeToMessages()

    return () => unsubscribeFromMessages()
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages])

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  if (isMessagesLoading)
    return (
      <div className="flex flex-col flex-1">
        <ChatHeader selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

        <div>Loading...</div>

      </div>
    )

  return (
    <div className="flex flex-col flex-1">
      <ChatHeader selectedUser={selectedUser} setSelectedUser={setSelectedUser} />

      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map(message => {
          const person = message.senderId === authUser._id
          const avatar = person
            ? authUser.profilePic || '/avatar.png'
            : selectedUser.profilePic || '/avatar.png'

          return (
            <MessageCard
              key={message._id}
              ref={messageEndRef}
              person={person}
              avatar={avatar}
              message={message}
            />
          )
        })}
      </div>

      <MessageInput />
    </div>
  )
}

export default ChatContainer
