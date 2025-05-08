'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, title }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`text-white hover:text-gray-300 px-3 py-2 text-sm 3xl:text-lg font-medium transition-colors cursor-pointer ${isActive ? "underline underline-offset-4" : ""}`}
    >
      <span>{title}</span>
    </Link>
  )
}



// const navLinks = [
//     { title: "Home", href: "/" },
//     { title: "Destinations", href: "/destinations" },
//     { title: "Blogs", href: "/blogs" },
//     { title: "News", href: "/news" },
//     { title: "Contact Us", href: "/contact-us" },
// ]


// {navLinks.map((link, index) => (
//     <Link
//         key={index}
//         href={link.href}
//         className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
//         onClick={() => setIsMenuOpen(false)}
//     >
//         {link.title}
//     </Link>
// ))}