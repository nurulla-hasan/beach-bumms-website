"use client"

import { Suspense } from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { PiEyeLight, PiEyeSlash } from "react-icons/pi"
import { FcGoogle } from "react-icons/fc"
import toast from "react-hot-toast"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { useRouter, useSearchParams } from "next/navigation"
import { login } from "@/redux/features/authSlice"
import Image from "next/image"

const LoginFormContent = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect") || "/"

  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const user = {
      ...data,
      name: "Leticia",
    }
    dispatch(login(user))
    toast.success("Login Success!")
    router.push(redirect)
  }

  return (
    <div className="flex h-screen">
      {/* Left side - Beach illustration */}
      <div className="flex-1/2 relative hidden md:flex">
        <Image
          src="/images/auth-image.png"
          alt="Beach illustration"
          width={500}
          height={500}
          className="object-cover w-full"
          priority
        />
      </div>

      {/* Right side - Login form */}
      <div className="flex-1/2 flex flex-col items-center justify-center px-8 py-6 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/images/auth-logo.svg"
              width={100}
              height={50}
              alt="Beach Bums Inn & Suites"
              className="h-auto"
            />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-center text-gray-900 mb-5">Access Account</h1>

          {/* Google Sign In Button */}
          <button className="cursor-pointer w-full flex items-center justify-center gap-2 py-2 px-3 border border-auth-border rounded-full mb-5 text-gray-700 text-xs font-medium hover:bg-gray-50 transition">
            <FcGoogle className="text-lg" />
            <span>Sign in with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center mb-5">
            <div className="flex-grow h-px bg-auth-border"></div>
            <span className="px-3 text-xs text-gray-500">or</span>
            <div className="flex-grow h-px bg-auth-border"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border rounded-full text-xs text-auth-border ${errors.email ? "border-red-500" : "border-auth-border"
                  } outline-none`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full px-3 py-2 border rounded-full text-xs text-auth-border ${errors.password ? "border-red-500" : "border-auth-border"
                    } outline-none`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <PiEyeLight className="h-4 w-4 text-gray-400" />
                  ) : (
                    <PiEyeSlash className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end mb-4">
              <Link href="/auth/forgot-password" className="text-xs text-gray-600 hover:text-primary">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="cursor-pointer w-full bg-primary text-white py-2 px-3 rounded-full hover:bg-cyan-700 transition duration-300 text-xs font-medium"
            >
              Enter
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-600">
              Don't have an account yet?{" "}
              <Link href="/auth/signup" className="text-primary font-medium hover:underline">
                Sign up now!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const LoginForm = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginFormContent />
    </Suspense>
  )
}

export default LoginForm
