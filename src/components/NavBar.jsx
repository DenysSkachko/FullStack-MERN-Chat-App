import { MdLogout } from "react-icons/md"
import { useAuthStore } from "../store/useAuthStore"

const NavBar = () => {
  const {logout, authUser } = useAuthStore()
  return (
    <header className="bg-dark/85 border-b border-dark fixed w-full top-0 ">
      <div className="max-w-3xl mx-auto px-4 h-16">
        <div className="flex-center h-full">
          {authUser && (
             <> 
             <button onClick={logout}>
              <MdLogout />
             </button>
            </>
          )
          }
        </div>
      </div>
    </header>
  )
}

export default NavBar