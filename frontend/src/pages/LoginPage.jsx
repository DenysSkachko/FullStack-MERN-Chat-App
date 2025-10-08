import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore"
import { MdMessage } from "react-icons/md"
import FormItem from "../components/ui/FormItem"
import { Link } from "react-router-dom"
import AuthImagePattern from "../components/AuthImagePattern"
import LoadingButton from "../components/ui/LoadingButton"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const {login, isLoggingIn} = useAuthStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    login(formData)
  }
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="col-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-amber-300/10 flex-center group-hover:bg-amber-300/20 transition-colors ">
                <MdMessage className="size-6" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p>Get started with your free account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormItem
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            <FormItem
              type="password"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
            <LoadingButton type="submit" text="Log in" isLoading={isLoggingIn}/>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </div>

      <AuthImagePattern title="Join our community" subtitle="Connect with friends, share moments, and stay in touch with your loved ones." />
    </div>
  )
}

export default LoginPage