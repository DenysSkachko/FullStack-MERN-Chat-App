import {useEffect} from 'react'
import { useChatStore } from '../store/useChatStore'
import MessageInput from './ui/MessageInput'

const ChatContainer = () => {
    const { messages, getMessages, isMessagesLoading, selectedUser} = useChatStore()
 useEffect(() => {
      getMessages(selectedUser._id)
    }, [selectedUser._id, getMessages])
    if(isMessagesLoading) return <div>Loading</div>

   
  return (
    <div className="flex-1 flex flex-col overflow-auto">
        {selectedUser.fullName}

        <MessageInput />
    </div>
  )
}

export default ChatContainer