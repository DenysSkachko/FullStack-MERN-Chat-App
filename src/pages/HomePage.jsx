import ChatContainer from "../components/ChatContainer"
import NoChatSelected from "../components/NoChatSelected"
import Sidebar from "../components/Sidebar"
import { useChatStore } from "../store/useChatStore"

const HomePage = () => {
  const {selectedUser} = useChatStore()
  return (
    <div className="h-screen">
      <div className="flex-center pt-20 px-4">
         <div className="bg-middle rounded-lg shadow-lg w-full container h-[calc(100vh-8rem)]">
            <div className="flex h-full rounded-lg overflow-hidden">
              <Sidebar />

              {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>
         </div>
      </div>
    </div>
  )
}

export default HomePage