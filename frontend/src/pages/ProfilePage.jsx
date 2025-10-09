import { BsCalendarDateFill, BsCamera } from 'react-icons/bs'
import { useAuthStore } from '../store/useAuthStore'
import { FaMailBulk, FaUser } from 'react-icons/fa'
import { useState } from 'react'
import { MdOutlineAlternateEmail } from 'react-icons/md'

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore()
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageUpload = async e => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = async () => {
      const base64Image = reader.result
      setSelectedImage(base64Image)
      await updateProfile({ profilePic: base64Image })
    }
  }

  return (
    <div className="h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-dark-alt rounded-xl p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="relative w-fit">
              <img
                src={selectedImage || authUser.profilePic || '/avatar.png'}
                alt="Profile Picture"
                className="size-32 rounded-full object-cover"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-0 right-0 bg-middle rounded-full p-2 cursor-pointer hover:bg-middle/50 transition-all duration-300 ${
                  isUpdatingProfile ? 'animate-pulse pointer-events-none' : ''
                }`}
              >
                <BsCamera className="size-5" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                ></input>
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <FaUser size={18} />
                Full Name
              </div>
              <p className="px-4 py-2 bg-middle/50 rounded-lg">{authUser?.fullName}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MdOutlineAlternateEmail size={18} />
                Email
              </div>
              <p className="px-4 py-2 bg-middle/50 rounded-lg">{authUser?.email}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <BsCalendarDateFill size={18} />
                Member Since
              </div>
              <p className="px-4 py-2 bg-middle/50 rounded-lg">
                {authUser.createdAt?.split('T')[0]}
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
