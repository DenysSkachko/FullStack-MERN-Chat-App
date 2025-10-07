import React, { useRef, useState } from 'react'
import { useChatStore } from '../../store/useChatStore'
import { BsImage, BsSend, BsX } from 'react-icons/bs'
import toast from 'react-hot-toast'

const MessageInput = () => {
  const [text, setText] = useState('')
  const [imagePreview, setImagePreview] = useState(null)
  const fileInputRef = useRef(null)
  const { sendMessage } = useChatStore()

  const handleImageChange = e => {
    console.log("File input changed:", e.target.files)
    const file = e.target.files[0]
    if (!file) {
      console.log("No file selected")
      return
    }
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file')
      console.log("Selected file is not an image:", file.type)
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      console.log("FileReader result:", reader.result)
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    console.log("Removing image preview")
    setImagePreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleSendMessage = async e => {
    e.preventDefault()
    console.log("Send button clicked, text:", text, "imagePreview:", imagePreview)
    if (!text.trim() && !imagePreview) {
      console.log("Nothing to send")
      return
    }

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      })
      console.log("Message sent successfully!")

      setText('')
      setImagePreview(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch (err) {
      console.error('Failed to send message:', err)
    }
  }

  return (
    <div className="p-4 w-full">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-middle
              flex items-center justify-center"
              type="button"
            >
              <BsX className="size-3" />
            </button>
          </div>
        </div>
      )}
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
