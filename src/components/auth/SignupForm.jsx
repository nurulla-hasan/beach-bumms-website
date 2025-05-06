"use client"

import { Suspense, useState } from "react"
import { useForm } from "react-hook-form"
import { PiEyeLight, PiEyeSlash } from "react-icons/pi"
import { FcGoogle } from "react-icons/fc"
import toast from "react-hot-toast"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import Image from "next/image"

const SignupFormContent = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch("password", "")

  const onSubmit = (data) => {
    // Here you would typically dispatch a signup action
    // For now, we'll just show a success message and redirect
    toast.success("Registration successful!")
    router.push("/auth/login")
  }

  return (
    <div className="flex h-screen">
      {/* Left side - Beach illustration */}
      <div className="flex-1/2 relative hidden md:flex ">
        <Image
          src="/images/auth-image.png"
          alt="Beach illustration"
          width={500}
          height={500}
          className="object-cover w-full"
          priority
        />
      </div>

      {/* Right side - Signup form */}
      <div className="flex-1/2 flex flex-col items-center justify-center px-8 py-6 bg-white">
        <div className="w-full max-w-sm">
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
          <h1 className="text-2xl font-semibold  text-gray-900 mb-5">
            Join the fastest growing e-book community
          </h1>

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
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className={`w-full px-3 py-2 border rounded-full text-xs text-auth-border ${
                  errors.name ? "border-red-500" : "border-auth-border"
                } outline-none`}
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border rounded-full text-xs text-auth-border ${
                  errors.email ? "border-red-500" : "border-auth-border"
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
            <div className="mb-4">
              <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full px-3 py-2 border rounded-full text-xs text-auth-border ${
                    errors.password ? "border-red-500" : "border-auth-border"
                  } outline-none`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
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

            {/* Confirm Password Field */}
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className={`w-full px-3 py-2 border rounded-full text-xs text-auth-border ${
                    errors.confirmPassword ? "border-red-500" : "border-auth-border"
                  } outline-none`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === password || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <PiEyeLight className="h-4 w-4 text-gray-400" />
                  ) : (
                    <PiEyeSlash className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="cursor-pointer w-full bg-primary text-white py-2 px-3 rounded-full hover:bg-cyan-700 transition duration-300 text-xs font-medium"
            >
              Register
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-600">
              Don't have an account yet?{" "}
              <Link href="/auth/login" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const SignupForm = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupFormContent />
    </Suspense>
  )
}

export default SignupForm
