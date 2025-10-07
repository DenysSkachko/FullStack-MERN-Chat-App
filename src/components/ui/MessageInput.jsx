import React, { useRef, useState } from 'react'
import { useChatStore } from '../../store/useChatStore'
import { BsImage, BsSend, BsX } from 'react-icons/bs'

const MessageInput = () => {
  const [text, setText] = useState('')
  const [imagePreview, setImagePreview] = useState(null)
  const fileInputRef = useRef(null)
  const { sendMessage } = useChatStore()

  const handleImageChange = e => {}

  const removeImage = () => {}

  const handleSendMessage = async e => {}

  return (
    <div className="p-4 w-full">
      
      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-2 items-center">
          <input
            type="text"
            className="w-full rounded-lg bg-dark p-4"
            placeholder="Type a message..."
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button
            type="button"
            className="hidden sm:flex"
            onClick={() => fileInputRef.current?.click()}
          >
            <BsImage className="size-10" />
          </button>

          <button type="submit">
            <BsSend className="size-10" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default MessageInput
