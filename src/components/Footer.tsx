'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-[#fff8e5] to-white border-t border-[#FEBD14]/30 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Shree Karthik Science of Astrology</h3>
            <p className="text-slate-600 text-sm">
              Professional astrology services dedicated to guiding your life through ancient wisdom and modern understanding.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#A67400] mb-4">Services</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li><Link href="#birth-chart" className="hover:text-[#A67400] transition">Birth Chart Reading</Link></li>
              <li><Link href="#horoscope" className="hover:text-[#A67400] transition">Horoscope Consultation</Link></li>
              <li><Link href="#numerology" className="hover:text-[#A67400] transition">Numerology</Link></li>
              <li><Link href="#vastu" className="hover:text-[#A67400] transition">Vastu Consultation</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#A67400] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li><Link href="#gemstones" className="hover:text-[#A67400] transition">Gemstones</Link></li>
              <li><Link href="#about" className="hover:text-[#A67400] transition">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-[#A67400] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[#A67400] mb-4">Contact Us</h4>
            <p className="text-slate-600 text-sm mb-2">📧 Email: info@karthikastrology.com</p>
            <a href="https://wa.me/919655375550?text=Hello%20Shree%20Karthik%20Science%20of%20Astrology" target="_blank" rel="noopener noreferrer" className="block text-slate-600 text-sm mb-2 hover:text-[#A67400] transition">📱 WhatsApp: +91 96553 75550</a>
            <p className="text-slate-600 text-sm">📍 Location: Coimbatore, Tamil Nadu</p>
          </div>
        </div>

        <div className="border-t border-[#FEBD14]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-slate-600 text-sm text-center md:text-left">
                © {currentYear} Shree Karthik Science of Astrology. All rights reserved.
              </p>
              <div className="text-center md:text-left mt-2">
                <p className="text-slate-500 text-xs">
                  Developed by{' '}
                  <Link href="https://www.netcraftstudios.org" target="_blank" rel="noopener noreferrer" className="text-[#A67400] hover:text-[#8a5e00] transition font-semibold">
                    Netcraft Studio
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-[#A67400] hover:text-[#8a5e00] transition">Privacy Policy</Link>
              <Link href="#" className="text-[#A67400] hover:text-[#8a5e00] transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
