'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-deep-purple to-midnight border-t border-gold/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Karthik Astrology</h3>
            <p className="text-gray-400 text-sm">
              Professional astrology services dedicated to guiding your life through ancient wisdom and modern understanding.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#birth-chart" className="hover:text-gold transition">Birth Chart Reading</Link></li>
              <li><Link href="#horoscope" className="hover:text-gold transition">Horoscope Consultation</Link></li>
              <li><Link href="#numerology" className="hover:text-gold transition">Numerology</Link></li>
              <li><Link href="#vastu" className="hover:text-gold transition">Vastu Consultation</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#gemstones" className="hover:text-gold transition">Gemstones</Link></li>
              <li><Link href="#about" className="hover:text-gold transition">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Contact Us</h4>
            <p className="text-gray-400 text-sm mb-2">📧 Email: info@karthikastrology.com</p>
            <p className="text-gray-400 text-sm mb-2">📱 Phone: +91 96553 75550</p>
            <p className="text-gray-400 text-sm">📍 Location: Coimbatore, Tamil Nadu</p>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} Karthik Astrology. All rights reserved.
              </p>
              <center>
              <p className="text-gray-600 text-xs text-center md:text-left mt-2">
                Developed by{' '}
                <Link href="https://www.netcraftstudios.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-yellow-300 transition font-semibold">
                  Netcraft Studio
                </Link>
                
              </p>
              </center>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gold hover:text-yellow-300 transition">Privacy Policy</Link>
              <Link href="#" className="text-gold hover:text-yellow-300 transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
