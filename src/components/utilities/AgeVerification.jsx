"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaCalendarAlt, FaExclamationTriangle, FaCheck } from "react-icons/fa"

const AgeVerification = () => {
  const [isVerified, setIsVerified] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [verificationMethod, setVerificationMethod] = useState("dob") // "simple" or "dob"
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [rememberMe, setRememberMe] = useState(true)
  const [error, setError] = useState("")
  const [isExiting, setIsExiting] = useState(false)

  // Check if the user has already verified their age
  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified")
    if (ageVerified === "true") {
      setIsVerified(true)
    } else {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  // Generate options for days, months, and years
  const generateDays = () => {
    const days = []
    for (let i = 1; i <= 31; i++) {
      days.push(
        <option key={i} value={i} className="bg-primary/10">
          {i}
        </option>,
      )
    }
    return days
  }

  const generateMonths = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    return months.map((month, index) => (
      <option key={index} value={index + 1} className="bg-primary/10">
        {month}
      </option>
    ))
  }

  const generateYears = () => {
    const years = []
    const currentYear = new Date().getFullYear()
    for (let i = currentYear; i >= currentYear - 100; i--) {
      years.push(
        <option key={i} value={i} className="bg-primary/10">
          {i}
        </option>,
      )
    }
    return years
  }

  // Validate date of birth
  const validateDob = () => {
    if (!day || !month || !year) {
      setError("Please complete your date of birth")
      return false
    }

    const birthDate = new Date(year, month - 1, day)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    if (age < 18) {
      setError("You must be at least 18 years old to access this website")
      return false
    }

    return true
  }

  // Handle age verification logic
  const handleAgeVerification = (isAdult) => {
    if (verificationMethod === "dob") {
      const isValid = validateDob()
      if (!isValid) return
    } else if (!isAdult) {
      setIsExiting(true)
      setTimeout(() => {
        alert("You must be 18 or older to access this website.")
        window.location.href = "https://www.google.com" // Redirect if underage
      }, 500)
      return
    }

    if (rememberMe) {
      localStorage.setItem("ageVerified", "true") // Store in localStorage
    }

    setIsExiting(true)
    setTimeout(() => {
      setIsVerified(true)
      setShowPopup(false)
    }, 500)
  }

  const handleSwitchMethod = () => {
    setVerificationMethod(verificationMethod === "simple" ? "dob" : "simple")
    setError("")
  }

  if (isVerified || !showPopup) {
    return null // Don't render anything if verified or popup shouldn't be shown
  }

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: isExiting ? 0.9 : 1, y: isExiting ? 20 : 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-b from-cyan-50 to-cyan-100 rounded-lg shadow-2xl overflow-hidden max-w-md w-full"
          >
            {/* Header with beach image */}
            <div className="relative h-32 bg-primary overflow-hidden">
              <Image src="/images/hero1.png" alt="Beach scene" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h2 className="text-2xl font-bold">Age Verification Required</h2>
                <p className="text-sm text-cyan-100">This website contains content suitable for adults only</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {verificationMethod === "simple" ? (
                <div className="text-center">
                  <p className="text-gray-700 mb-6">Please confirm that you are 18 years of age or older to enter.</p>

                  <div className="flex justify-center gap-4 mb-6">
                    <button
                      onClick={() => handleAgeVerification(true)}
                      className="bg-primary text-white py-1 px-8 rounded-xs hover:bg-hover_color transition duration-300 flex items-center justify-center gap-2 min-w-[120px] cursor-pointer"
                    >
                      <FaCheck /> Yes
                    </button>
                    <button
                      onClick={() => handleAgeVerification(false)}
                      className="bg-red-500 text-white py-1 px-8 rounded-xs hover:bg-red-600 transition duration-300 flex items-center justify-center gap-2 min-w-[120px] cursor-pointer"
                    >
                      <FaExclamationTriangle /> No
                    </button>
                  </div>

                  <button
                    onClick={handleSwitchMethod}
                    className="text-primary text-sm hover:underline flex items-center justify-center gap-1 mx-auto"
                  >
                    <FaCalendarAlt /> Verify with date of birth instead
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-gray-700 mb-4 text-center">Please enter your date of birth to verify your age:</p>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div>
                      <label htmlFor="day" className="block text-sm text-gray-600 mb-1">
                        Day
                      </label>
                      <select
                        id="day"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        className="w-full px-2 py-1 border rounded-xs text-sm focus:ring-2 focus:ring-primary focus:border-transparent border-primary/30 outline-none text-primary/70"
                      >
                        <option className="bg-primary text-white" value="">Day</option>
                        {generateDays()}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="month" className="block text-sm text-gray-600 mb-1">
                        Month
                      </label>
                      <select
                        id="month"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className="w-full px-2 py-1 border rounded-xs text-sm focus:ring-2 focus:ring-primary focus:border-transparent border-primary/30 outline-none text-primary/70"
                      >
                        <option className="bg-primary text-white" value="">Month</option>
                        {generateMonths()}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="year" className="block text-sm text-gray-600 mb-1">
                        Year
                      </label>
                      <select
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full px-2 py-1 border rounded-xs text-sm focus:ring-2 focus:ring-primary focus:border-transparent border-primary/30 outline-none text-primary/70"
                      >
                        <option className="bg-primary text-white" value="">Year</option>
                        {generateYears()}
                      </select>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4 text-sm">{error}</div>
                  )}

                  <div className="flex justify-center mb-4">
                    <button
                      onClick={() => handleAgeVerification(true)}
                      className="bg-primary text-white px-2 py-1 rounded-xs hover:bg-hover_color transition duration-300 cursor-pointer"
                    >
                      Verify My Age
                    </button>
                  </div>

                  <button
                    onClick={handleSwitchMethod}
                    className="text-primary text-sm hover:underline flex items-center justify-center gap-1 mx-auto cursor-pointer"
                  >
                    Return to simple verification
                  </button>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-primary/20">
                <div className="flex items-center justify-center mb-4">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 accent-primary focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me for 30 days
                  </label>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  By entering this site, you confirm that you agree to our{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AgeVerification
