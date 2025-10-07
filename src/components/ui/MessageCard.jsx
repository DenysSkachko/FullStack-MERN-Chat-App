const MessageCard = ({ message, avatar, person }) => {
  return (
    <div
      key={message._id}
      className={`flex  items-end gap-2 ${person ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <img src={avatar} alt="avatar" className="size-8 rounded-full object-cover" />

      <div
        className={`rounded-2xl px-3 py-2 max-w-[65%] break-words ${
          person ? 'bg-dark text-white rounded-br-none' : 'bg-middle text-gray-100 rounded-bl-none'
        }`}
      >
        {message.image && (
          <img
            src={message.image}
            alt=""
            className="rounded-md mb-2 mt-2 max-w-[200px]"
          />
        )}
        {message.text && <p>{message.text}</p>}
        <time className="block text-xs opacity-60 mt-1">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </time>
      </div>
    </div>
  )
}

export default MessageCard
