import ChatContainer from "../components/ChatContainer"
import NoChatSelected from "../components/NoChatSelected"
import Sidebar from "../components/Sidebar"
import { useChatStore } from "../store/useChatStore"

const HomePage = () => {
  const {selectedUser} = useChatStore()
  return (
    <div className="h-screen pt-20">
      <div className="flex-center px-4 container mx-auto">
         <div className="bg-dark-alt rounded-lg w-full h-[calc(100vh-8rem)] flex  overflow-hidden"> 
              <Sidebar />

              {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
         </div>
      </div>
    </div>
  )
}

export default HomePage