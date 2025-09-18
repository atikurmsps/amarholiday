import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - AmarHoliday',
  description: 'Learn about AmarHoliday, our mission, and our commitment to providing exceptional travel experiences across Asia.',
  keywords: 'about AmarHoliday, travel agency, company story, mission, EKKID LLC',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AmarHoliday</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for creating unforgettable travel experiences across Asia
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                AmarHoliday was born from a passion for authentic travel experiences and a deep appreciation for the rich cultures, 
                stunning landscapes, and warm hospitality that Asia has to offer. What started as a small family business has grown 
                into a trusted travel partner for thousands of travelers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a simple belief: that travel should be more than just visiting places – it should be about 
                connecting with people, understanding cultures, and creating memories that last a lifetime. This philosophy continues 
                to guide everything we do today.
              </p>
              <p className="text-lg text-gray-600">
                Over the years, we've expanded our reach across Asia, establishing offices in key locations to provide personalized 
                service and local expertise. Our team of travel professionals brings together decades of experience in creating 
                exceptional journeys for our valued clients.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="/images/destinations/thailand.jpg"
                alt="AmarHoliday Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to excellence in every aspect of our service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentic Experiences</h3>
              <p className="text-gray-600">
                We believe in creating genuine, immersive experiences that go beyond tourist attractions and connect you with the heart of each destination.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust & Reliability</h3>
              <p className="text-gray-600">
                Your safety and satisfaction are our top priorities. We maintain the highest standards of service quality and customer care.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Expertise</h3>
              <p className="text-gray-600">
                Our local knowledge and partnerships ensure you get insider access to the best experiences, hidden gems, and authentic local interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official registration and contact details
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Registration Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Company Name</h4>
                  <p className="text-gray-600">AmarHoliday</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Registered Company</h4>
                  <p className="text-gray-600">EKKID LLC</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Registration Location</h4>
                  <p className="text-gray-600">Wyoming, United States</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Business Type</h4>
                  <p className="text-gray-600">Travel Agency & Tour Operator</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Primary Email</h4>
                  <p className="text-gray-600">support@amarholiday.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Package Inquiries</h4>
                  <p className="text-gray-600">package@amarholiday.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">General Inquiries</h4>
                  <p className="text-gray-600">mail@amarholiday.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Website</h4>
                  <p className="text-gray-600">amarholiday.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Preview Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse and beautiful countries we specialize in
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Thailand', image: '/images/destinations/thailand.jpg' },
              { name: 'Maldives', image: '/images/destinations/maldives.jpg' },
              { name: 'Nepal', image: '/images/destinations/nepal.jpg' },
              { name: 'Philippines', image: '/images/destinations/philippines.jpg' },
              { name: 'Malaysia', image: '/images/destinations/malaysia.jpg' },
              { name: 'India', image: '/images/destinations/india.jpg' }
            ].map((destination) => (
              <div key={destination.name} className="text-center">
                <div className="relative mb-4 group">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-32 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-lg group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <h3 className="font-semibold text-gray-900">{destination.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let us help you create the perfect holiday experience. Our travel experts are ready to assist you with personalized recommendations and seamless booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/packages" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100">
              Explore Packages
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
