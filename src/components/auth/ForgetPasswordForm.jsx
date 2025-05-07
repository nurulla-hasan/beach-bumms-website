"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { IoArrowBack } from "react-icons/io5";

const ForgotPasswordForm = () => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    console.log("Forgot password request for:", data.email)

    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/auth/verify-email")
    }, 1000)
  }

  return (
    <div className="flex h-screen">
      {/* Back button - absolute positioned */}
      <div className="absolute top-4 left-4 z-10">
        <Link
          href="/auth/login"
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
          width={3000}
          height={2500}
          className="object-cover w-full h-screen"
          priority
        />
      </div>

      {/* Right side - Forgot password form */}
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
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">Reset your password</h1>

          <p className="text-gray-600 mb-8 text-xs">
            Enter the email associated with your account to receive a password reset link.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-8">
              <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full px-3 py-2 border rounded-full text-xs text-gray-700 ${
                  errors.email ? "border-red-500" : "border-auth-border"
                } outline-none focus:border-primary`}
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-cyan-700 rounded-full text-white py-2 px-4 text-xs font-medium transition duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Next"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordForm
