"use client"
import { useState } from "react"
import AgeVerification from "@/components/utilities/AgeVerification"
import PageContainer from "@/components/PageContainer/PageContainer"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"

export default function AgeVerificationDemo() {
  const [showVerification, setShowVerification] = useState(true)

  const resetVerification = () => {
    localStorage.removeItem("ageVerified")
    setShowVerification(false)
    setTimeout(() => {
      setShowVerification(true)
    }, 100)
  }

  return (
    <>
    <Breadcrumb/>
      <PageContainer>
        <h1 className="text-3xl font-bold text-title_color mb-6">Age Verification</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-4">
            This page demonstrates the age verification component. The verification popup should appear when you first
            visit this page, unless you've already verified your age.
          </p>

          <p className="text-gray-700 mb-6">
            If you choose "Remember me" when verifying your age, the popup won't appear again for 30 days (or until you
            clear your browser's local storage).
          </p>

          <button
            onClick={resetVerification}
            className="bg-primary text-white py-2 px-4 rounded hover:bg-hover_color transition-colors cursor-pointer"
          >
            Reset Age Verification
          </button>
        </div>

        <div className="bg-primary/5 border-l-4 border-primary p-4 text-primary">
          <h2 className="font-bold mb-2">Features of this Age Verification Component:</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Beach-themed design with gradient background</li>
            <li>Two verification methods: simple yes/no or date of birth</li>
            <li>Remember me option to prevent showing the popup again</li>
            <li>Smooth animations using Framer Motion</li>
            <li>Mobile-responsive layout</li>
            <li>Date validation to ensure users are 18+</li>
            <li>Links to Terms of Service and Privacy Policy</li>
            <li>Error handling for incomplete or invalid dates</li>
          </ul>
        </div>
      </PageContainer>

      {showVerification && <AgeVerification />}
    </>
  )
}
