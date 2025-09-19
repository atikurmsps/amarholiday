import Hero from '@/components/Hero'
import PackageCard from '@/components/PackageCard'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'

// Featured packages data
const featuredPackages = [
  {
    id: 'thailand-bangkok',
    title: 'Bangkok Cultural Tour',
    description: 'Experience the vibrant culture of Thailand\'s capital with visits to ancient temples, floating markets, and authentic street food adventures.',
    duration: '5D/4N',
    price: 899,
    image: '/images/packages/bangkok.jpeg',
    destination: 'Thailand',
    featured: true
  },
  {
    id: 'maldives-luxury',
    title: 'Luxury Water Villa Stay',
    description: 'Indulge in ultimate luxury with overwater bungalows, private infinity pools, and pristine white sand beaches in the Maldives.',
    duration: '5D/4N',
    price: 2500,
    image: '/images/packages/maldives-luxury.jpg',
    destination: 'Maldives',
    featured: true
  },
  {
    id: 'nepal-everest',
    title: 'Everest Base Camp Trek',
    description: 'Embark on an epic adventure to the base of the world\'s highest peak, experiencing breathtaking Himalayan landscapes and Sherpa culture.',
    duration: '12D/11N',
    price: 1800,
    image: '/images/packages/nepal-everest.jpg',
    destination: 'Nepal',
    featured: true
  },
  {
    id: 'malaysia-langkawi',
    title: 'Langkawi Island Retreat',
    description: 'Escape to the tropical paradise of Langkawi with pristine beaches, mangrove tours, and island adventures. Features cable car rides and sunset cruises.',
    duration: '6D/5N',
    price: 1200,
    image: '/images/packages/malaysia-langkawi.jpg',
    destination: 'Malaysia',
    featured: false
  },
]

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    comment: 'Our trip to Thailand was absolutely incredible! AmarHoliday made everything seamless from start to finish. The cultural experiences were authentic and unforgettable.',
    image: '/images/gallery/gallery-1.jpg'
  },
  {
    name: 'Michael Chen',
    location: 'London, UK',
    rating: 5,
    comment: 'The Maldives package exceeded all expectations. The water villa was stunning, and the service was impeccable. Highly recommend AmarHoliday!',
    image: '/images/gallery/gallery-2.jpg'
  },
  {
    name: 'Emma Rodriguez',
    location: 'Toronto, Canada',
    rating: 5,
    comment: 'Our Nepal adventure was perfectly organized. The trek to Everest Base Camp was challenging but rewarding. AmarHoliday\'s local guides were exceptional.',
    image: '/images/gallery/gallery-3.jpg'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Holiday Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of the most popular destinations and experiences across Asia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/packages" className="btn-secondary text-lg px-8 py-4">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* About AmarHoliday Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About AmarHoliday
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                AmarHoliday is your trusted partner for creating unforgettable travel experiences across Asia. 
                We specialize in curating authentic, immersive journeys that connect you with the heart and soul of each destination.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With offices in Arizona, London, and Bangladesh, we provide personalized service and local expertise 
                to ensure every aspect of your journey exceeds expectations. Our commitment to quality, authenticity, 
                and customer satisfaction has made us a preferred choice for discerning travelers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-outline">
                  Learn More
                </Link>
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Travel Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Happy Travelers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers about their amazing experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our travel experts are here to help you plan the perfect holiday. Get in touch with us today!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 307 205 5481</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">support@amarholiday.com</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Arizona, London, Bangladesh</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
