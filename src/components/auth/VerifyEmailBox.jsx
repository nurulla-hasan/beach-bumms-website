"use client"

import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { IoArrowBack } from "react-icons/io5"

const VerifyEmailForm = () => {
  const router = useRouter()
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRefs = useRef([])

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6)
  }, [])

  const handleChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()
    if (/^\d{6}$/.test(pastedData)) {
      const newCode = pastedData.split("")
      setCode(newCode)
      inputRefs.current[5]?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (code.join("").length !== 6) return

    setIsSubmitting(true)
    console.log("Verifying code:", code.join(""))

    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/auth/reset-password")
    }, 1600)
  }

  const handleResend = () => {
    console.log("Resending verification code")
  }

  return (
    <div className="flex h-screen">
      {/* Back button - absolute positioned */}
      <div className="absolute top-4 left-4 z-10">
        <Link
          href="/auth/forgot-password"
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

      {/* Right side - Verification form */}
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
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">Verify Your Identity</h1>

          <p className="text-gray-600 mb-6 text-xs">
            We sent a code to your email address. Please enter the 6-digit code.
          </p>

          <form onSubmit={handleSubmit}>
          <p className="text-gray-600 text-sm mb-2">OTP</p>
            <div className="flex justify-between gap-2 mb-8">
              
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-10 h-10 text-center border border-auth-border rounded-md text-sm text-gray-900 focus:outline-none focus:border-primary"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || code.join("").length !== 6}
              className="w-full bg-primary hover:bg-cyan-700 rounded-full text-white py-2 px-4 text-xs font-medium transition duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Verifying..." : "Verify"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              Didn't receive the code?{" "}
              <button onClick={handleResend} className="text-primary font-medium hover:underline cursor-pointer">
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailForm
