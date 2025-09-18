import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Feedback - AmarHoliday',
  description: 'Share your travel experience with AmarHoliday. Read reviews from our satisfied customers and submit your own feedback.',
  keywords: 'customer feedback, travel reviews, AmarHoliday reviews, travel testimonials',
}

export default function FeedbackPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Feedback</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your travel experience and read reviews from our valued customers
          </p>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Share Your Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We value your feedback and use it to continuously improve our services. Tell us about your journey with AmarHoliday.
            </p>
          </div>
          
          <div className="card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                  Destination Visited
                </label>
                <select
                  id="destination"
                  name="destination"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select destination</option>
                  <option value="thailand">Thailand</option>
                  <option value="maldives">Maldives</option>
                  <option value="nepal">Nepal</option>
                  <option value="philippines">Philippines</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="india">India</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                  Package Name
                </label>
                <input
                  type="text"
                  id="package"
                  name="package"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Which package did you book?"
                />
              </div>
              
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                  Overall Rating *
                </label>
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={star}
                        required
                        className="sr-only"
                      />
                      <svg
                        className="w-8 h-8 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Poor</span>
                  <span>Excellent</span>
                </div>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Experience *
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your experience with AmarHoliday. What did you enjoy most? Any suggestions for improvement?"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="highlights" className="block text-sm font-medium text-gray-700 mb-2">
                  Trip Highlights
                </label>
                <textarea
                  id="highlights"
                  name="highlights"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="What were the highlights of your trip? Any memorable moments or experiences?"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read reviews from travelers who have experienced our services firsthand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Our trip to Thailand was absolutely incredible! The Bangkok Cultural Tour exceeded all expectations. 
                The local guides were knowledgeable and friendly, and we experienced authentic Thai culture beyond the tourist spots."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Sarah Johnson"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">New York, USA</p>
                  <p className="text-xs text-gray-500">Bangkok Cultural Tour - March 2024</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The Maldives Luxury Water Villa Stay was a dream come true. Every detail was perfect - from the 
                overwater bungalow to the personalized service. AmarHoliday made our honeymoon truly unforgettable."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Michael Chen"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">London, UK</p>
                  <p className="text-xs text-gray-500">Luxury Water Villa Stay - February 2024</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The Everest Base Camp Trek was challenging but incredibly rewarding. Our Sherpa guides were 
                professional and caring, ensuring our safety throughout the journey. The views were absolutely breathtaking!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Emma Rodriguez"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Emma Rodriguez</h4>
                  <p className="text-sm text-gray-600">Toronto, Canada</p>
                  <p className="text-xs text-gray-500">Everest Base Camp Trek - January 2024</p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Boracay Beach Holiday was pure paradise! The pristine beaches, crystal clear waters, and 
                vibrant atmosphere exceeded our expectations. AmarHoliday's attention to detail made everything seamless."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="David Thompson"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">David Thompson</h4>
                  <p className="text-sm text-gray-600">Sydney, Australia</p>
                  <p className="text-xs text-gray-500">Boracay Beach Holiday - December 2023</p>
                </div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The Golden Triangle Tour in India was a cultural revelation. From the Taj Mahal to the 
                Pink City, every moment was filled with wonder. Our guide was incredibly knowledgeable about Indian history."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Lisa Wang"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Lisa Wang</h4>
                  <p className="text-sm text-gray-600">Vancouver, Canada</p>
                  <p className="text-xs text-gray-500">Golden Triangle Tour - November 2023</p>
                </div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Kuala Lumpur City & Genting Highlands was the perfect blend of urban excitement and natural beauty. 
                The city tour was comprehensive, and the cable car ride to Genting was spectacular!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="James Wilson"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">James Wilson</h4>
                  <p className="text-sm text-gray-600">Manchester, UK</p>
                  <p className="text-xs text-gray-500">KL City & Genting Highlands - October 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Your feedback helps us improve and helps other travelers make informed decisions. Share your story with us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#feedback-form" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100">
              Submit Feedback
            </a>
            <a href="/packages" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              Explore Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
