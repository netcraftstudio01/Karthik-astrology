'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/85 backdrop-blur-md z-50 border-b border-[#FEBD14]/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div>
              <h1 className="text-2xl font-bold gradient-text leading-tight">Shree Karthik<br />Science of Astrology</h1>
              <p className="text-xs text-[#A67400]">Professional Astrology Services</p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#A67400]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 text-slate-700">
            <Link href="#services" className="hover:text-[#A67400] transition duration-300">Services</Link>
            <Link href="#gemstones" className="hover:text-[#A67400] transition duration-300">Gemstones</Link>
            <Link href="#about" className="hover:text-[#A67400] transition duration-300">About</Link>
            <Link href="#contact" className="hover:text-[#A67400] transition duration-300">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 text-slate-700">
            <Link href="#services" className="block hover:text-[#A67400] transition duration-300">Services</Link>
            <Link href="#gemstones" className="block hover:text-[#A67400] transition duration-300">Gemstones</Link>
            <Link href="#about" className="block hover:text-[#A67400] transition duration-300">About</Link>
            <Link href="#contact" className="block hover:text-[#A67400] transition duration-300">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
