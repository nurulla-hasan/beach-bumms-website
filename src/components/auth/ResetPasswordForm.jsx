"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { PiEyeLight, PiEyeSlash } from "react-icons/pi"
import Image from "next/image"
import Link from "next/link"
import { IoArrowBack } from "react-icons/io5"

const ResetPasswordForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch("password", "")

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    console.log("Reset password with:", data)

    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/auth/login")
    }, 1500)
  }

  return (
    <div className="flex h-screen">
      {/* Back button - absolute positioned */}
      <div className="absolute top-4 left-4 z-10">
        <Link
          href="/auth/verify-email"
          className="flex items-center gap-1 bg-white rounded-full py-2 px-4 text-xs font-medium text-primary shadow-sm hover:bg-gray-50"
        >
          <IoArrowBack size={16} />
          Back
        </Link>
      </div>

      {/* Left side - Beach illustration */}
      <div className="flex-1/2 relative hidden md:flex">
        <Image
          src="/images/auth-image.png"
          alt="Beach illustration"
          width={1000}
          height={500}
          className="object-cover w-full h-screen"
          priority
        />
      </div>

      {/* Right side - Reset password form */}
      <div className="flex-1/2 flex flex-col items-center justify-center px-8 py-6 bg-white">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/images/auth-logo.svg"
              width={100}
              height={50}
              alt="Beach Bums Inn & Suites"
              className="h-auto"
            />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">Create a New Password</h1>

          <p className="text-gray-600 mb-8 text-xs">
          You're almost there! Set a new, secure password to finish resetting your account.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* New Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className={`w-full px-3 py-2 border rounded-full text-xs text-gray-700 ${
                    errors.password ? "border-red-500" : "border-auth-border"
                  } outline-none focus:border-primary`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
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

            {/* Confirm Password */}
            <div className="mb-8">
              <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  className={`w-full px-3 py-2 border rounded-full text-xs text-gray-700 ${
                    errors.confirmPassword ? "border-red-500" : "border-auth-border"
                  } outline-none focus:border-primary`}
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-cyan-700 rounded-full text-white py-2 px-4 text-xs font-medium transition duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordForm
