import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AmarHoliday - Your Dream Holiday Awaits',
  description: 'Discover amazing travel packages to Thailand, Maldives, Nepal, Philippines, Malaysia, and India. Book your dream holiday with AmarHoliday today!',
  keywords: 'travel, holiday, vacation, Thailand, Maldives, Nepal, Philippines, Malaysia, India, tour packages',
  authors: [{ name: 'AmarHoliday' }],
  creator: 'AmarHoliday',
  publisher: 'AmarHoliday',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amarholiday.com',
    title: 'AmarHoliday - Your Dream Holiday Awaits',
    description: 'Discover amazing travel packages to Thailand, Maldives, Nepal, Philippines, Malaysia, and India. Book your dream holiday with AmarHoliday today!',
    siteName: 'AmarHoliday',
    images: [
      {
        url: 'https://amarholiday.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AmarHoliday - Travel Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AmarHoliday - Your Dream Holiday Awaits',
    description: 'Discover amazing travel packages to Thailand, Maldives, Nepal, Philippines, Malaysia, and India. Book your dream holiday with AmarHoliday today!',
    images: ['https://amarholiday.com/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
