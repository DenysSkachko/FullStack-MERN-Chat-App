import { useState } from "react"
import { FaUser, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { MdOutlineAlternateEmail } from "react-icons/md"

const FormItem = ({ type = "text", value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false)

  let label = "Full Name"
  let name = "fullName"
  let placeholder = "John Doe"
  let icon = <FaUser size={18} className="" />
  let autoComplete = "off"

  if (type === "email") {
    label = "Email"
    name = "email"
    placeholder = "you@example.com"
    icon = <MdOutlineAlternateEmail size={18} className="" />
    autoComplete = "on"
  }

  if (type === "password") {
    label = "Password"
    name = "password"
    placeholder = "••••••••"
    icon = <FaLock size={18} className="" />
    autoComplete = "new-password"
  }

  const inputType = type === "password" && showPassword ? "text" : type

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>

        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className="w-full border rounded-lg pl-10 pr-10 py-2 text-lg focus:outline-none bg-transparent"
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center select-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEye className="size-5.5"/> : <FaRegEyeSlash className="size-6"/>}
          </button>
        )}
      </div>
    </div>
  )
}

export default FormItem