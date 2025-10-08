import { BsFillChatHeartFill } from "react-icons/bs";

const Logo = () => {
  return (
    <div className="size-12 rounded-xl bg-accent/10 flex-center hover:bg-accent/30 transition-colors duration-300 cursor-pointer">
      <BsFillChatHeartFill className="size-7" />
    </div>
  )
}

export default Logo
