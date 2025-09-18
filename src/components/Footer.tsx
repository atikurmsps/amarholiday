import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">AmarHoliday</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for unforgettable travel experiences. Discover the world with our carefully curated holiday packages.
            </p>
            <div className="text-sm text-gray-400">
              <p>Registered Company: EKKID LLC (Wyoming, US)</p>
              <p>Email: support@amarholiday.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/packages" className="text-gray-300 hover:text-white transition-colors">Packages</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><Link href="/packages#thailand" className="text-gray-300 hover:text-white transition-colors">Thailand</Link></li>
              <li><Link href="/packages#maldives" className="text-gray-300 hover:text-white transition-colors">Maldives</Link></li>
              <li><Link href="/packages#nepal" className="text-gray-300 hover:text-white transition-colors">Nepal</Link></li>
              <li><Link href="/packages#philippines" className="text-gray-300 hover:text-white transition-colors">Philippines</Link></li>
              <li><Link href="/packages#malaysia" className="text-gray-300 hover:text-white transition-colors">Malaysia</Link></li>
              <li><Link href="/packages#india" className="text-gray-300 hover:text-white transition-colors">India</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2024 AmarHoliday. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
