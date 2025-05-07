"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  RiMenuLine,
  RiCloseLine,
  RiLoginBoxLine,
  RiHome2Line,
  RiMapPinLine,
  RiBookOpenLine,
  RiNewspaperLine,
  RiMailLine,
} from "react-icons/ri"
import NavLink from "./NavLink"
import PageContainer from "@/components/PageContainer/PageContainer"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { title: "Home", href: "/", icon: RiHome2Line },
    { title: "Destinations", href: "/destinations", icon: RiMapPinLine },
    { title: "Blogs", href: "/blogs", icon: RiBookOpenLine },
    { title: "News", href: "/news", icon: RiNewspaperLine },
    { title: "Contact Us", href: "/contact-us", icon: RiMailLine },
  ]

  // Handle scroll effect
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setIsScrolled(true)
  //     } else {
  //       setIsScrolled(false)
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="h-[72px] ">
      <nav
        className={`fixed w-full bg-white mx-auto z-50 transition-all duration-300 md:py-1`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black md:rounded-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/images/nav-logo.svg" alt="Beach Bums" width={500} height={500} className="h-auto w-16" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <NavLink key={index} href={link.href} title={link.title} icon={link.icon} />
                ))}
              </div>
            </div>

            {/* Login Button */}
            <div className="hidden md:block">
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-2 bg-primary hover:bg-cyan-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Log In
                <RiLoginBoxLine className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile menu button - Enhanced for visibility */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <RiCloseLine className="block h-6 w-6 text-white" aria-hidden="true" />
                ) : (
                  <RiMenuLine className="block h-6 w-6 text-white" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            {navLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white hover:text-gray-300 px-3 py-2 text-base font-medium flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {link.title}
                </Link>
              )
            })}
            <Link
              href="/auth/login"
              className="flex items-center gap-2 text-white hover:text-gray-300 px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <RiLoginBoxLine className="h-5 w-5" />
              Log In
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
