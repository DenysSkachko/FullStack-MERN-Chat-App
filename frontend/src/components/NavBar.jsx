import { MdLogout } from 'react-icons/md'
import { IoMdSettings } from 'react-icons/io'
import { useAuthStore } from '../store/useAuthStore'
import Logo from './ui/Logo'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const NavBar = () => {
  const { logout, authUser } = useAuthStore()
  return (
    <header className="bg-dark/85 border-b border-dark fixed w-full top-0 ">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <Link to={'/'} className="flex items-center gap-4">
            <Logo />
            <h1 className="text-xl font-bold hidden sm:inline">Proxima Chat App</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to={'/settings'} className="flex-center gap-2 bg-accent/10 rounded-xl p-2.5">
              <IoMdSettings className="size-7" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={'/profile'} className="flex-center gap-2 bg-accent/10 rounded-xl p-2.5">
                  <FaUser className="size-7" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button onClick={logout} className="flex-center gap-2 bg-accent/10 rounded-xl p-2.5">
                  <MdLogout className="size-7"/>
                  <span className="hidden sm:inline">Log Out</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
