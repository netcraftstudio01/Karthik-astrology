import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Karthik Astrology - Professional Astrology Services',
  description: 'Expert astrology services including birth charts, horoscopes, numerology, gemstones, and Vastu consultation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-midnight text-gray-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
