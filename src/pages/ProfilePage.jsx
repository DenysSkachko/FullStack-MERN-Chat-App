import { useAuthStore } from "../store/useAuthStore"

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore()

  const handleImageUpload = async (e) => {

  }

  return (
    <div className="h-screen pt-20">
      <div className="container mx-auto px-4 py-8 bg-middle">
        <div className="bg-dark-alt rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProfilePage