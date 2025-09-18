import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/hero/travel-banner.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Dream Holiday
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Awaits
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Discover breathtaking destinations across Asia with our carefully curated travel packages. 
          From pristine beaches to ancient temples, create memories that last a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/packages" className="btn-primary text-lg px-8 py-4">
            Explore Packages
          </Link>
          <Link href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
            Book Now
          </Link>
        </div>

        {/* Featured Destinations Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {['Thailand', 'Maldives', 'Nepal', 'Philippines', 'Malaysia', 'India'].map((destination) => (
            <div key={destination} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-semibold text-sm md:text-base">{destination.charAt(0)}</span>
              </div>
              <span className="text-white text-sm font-medium">{destination}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
