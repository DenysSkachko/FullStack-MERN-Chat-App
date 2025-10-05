import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import NavBar from './components/NavBar'
import { useAuthStore } from './store/useAuthStore'

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log({ authUser })

  if (isCheckingAuth && !authUser) return <div className="flex-center h-screen">Loader here</div>

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
