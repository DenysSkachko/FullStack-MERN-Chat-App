import { useRef, useState } from 'react'
import { useChatStore } from '../../store/useChatStore'
import { BsImage, BsSend, BsX } from 'react-icons/bs'
import toast from 'react-hot-toast'

const MessageInput = () => {
  const [text, setText] = useState('')
  const [imagePreview, setImagePreview] = useState(null)
  const fileInputRef = useRef(null)
  const { sendMessage } = useChatStore()

  const handleImageChange = e => {
    const file = e.target.files[0]
    if (!file) {
      return
    }
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setImagePreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleSendMessage = async e => {
    e.preventDefault()
    if (!text.trim() && !imagePreview) {
      return
    }

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      })

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
        <div className="mb-3 flex items-center gap-2 bg-dark w-fit p-2 rounded-lg">
          <div className="relative">
            <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-lg" />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-middle
              flex items-center justify-center group"
              type="button"
            >
              <BsX className="size-3 group-hover:scale-170 transition-all duration-300" />
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-4 items-center">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button
            type="button"
            className="hidden sm:flex bg-dark hover:bg-dark/70 p-2 rounded-lg"
            onClick={() => fileInputRef.current?.click()}
          
          >
            <BsImage className="size-8" />
          </button>
          <input
            type="text"
            className="w-full rounded-lg bg-dark p-3 outline-none text-white"
            placeholder="Type a message..."
            value={text}
            onChange={e => setText(e.target.value)}
          />

          <button type="submit" className="bg-dark hover:bg-dark/70 p-2 rounded-lg">
            <BsSend className="size-8" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default MessageInput
