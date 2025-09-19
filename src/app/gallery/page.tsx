'use client'

import { useState } from 'react'

// Gallery data with local images
const galleryImages = [
  // Thailand
  { id: 1, src: '/images/gallery/1.jpg', alt: 'Thailand Temple', destination: 'Thailand', category: 'culture' },
  { id: 2, src: '/images/gallery/2.jpg', alt: 'Bangkok Street Food', destination: 'Thailand', category: 'food' },
  { id: 3, src: '/images/gallery/3.jpg', alt: 'Phuket Beach', destination: 'Thailand', category: 'nature' },
  { id: 4, src: '/images/gallery/4.jpg', alt: 'Chiang Mai Mountains', destination: 'Thailand', category: 'nature' },
  
  // Maldives
  { id: 5, src: '/images/gallery/5.jpg', alt: 'Maldives Water Villa', destination: 'Maldives', category: 'luxury' },
  { id: 6, src: '/images/gallery/6.jpg', alt: 'Crystal Clear Waters', destination: 'Maldives', category: 'nature' },
  { id: 7, src: '/images/gallery/7.jpg', alt: 'White Sand Beach', destination: 'Maldives', category: 'nature' },
  { id: 8, src: '/images/gallery/8.jpg', alt: 'Underwater World', destination: 'Maldives', category: 'adventure' },
  
  // Nepal
  { id: 9, src: '/images/gallery/9.jpg', alt: 'Everest Base Camp', destination: 'Nepal', category: 'adventure' },
  { id: 10, src: '/images/gallery/10.jpg', alt: 'Kathmandu Durbar Square', destination: 'Nepal', category: 'culture' },
  { id: 11, src: '/images/gallery/11.jpg', alt: 'Pokhara Lake', destination: 'Nepal', category: 'nature' },
  { id: 12, src: '/images/gallery/12.jpg', alt: 'Himalayan Mountains', destination: 'Nepal', category: 'nature' },
  
  // Philippines
  { id: 13, src: '/images/gallery/13.jpg', alt: 'Boracay Sunset', destination: 'Philippines', category: 'nature' },
  { id: 14, src: '/images/gallery/14.jpg', alt: 'Palawan Underground River', destination: 'Philippines', category: 'adventure' },
  { id: 15, src: '/images/gallery/15.jpg', alt: 'Cebu Diving', destination: 'Philippines', category: 'adventure' },
  { id: 16, src: '/images/gallery/16.jpg', alt: 'Manila City', destination: 'Philippines', category: 'culture' },
  
  // Malaysia
  { id: 17, src: '/images/gallery/17.jpg', alt: 'Kuala Lumpur Skyline', destination: 'Malaysia', category: 'culture' },
  { id: 18, src: '/images/gallery/18.jpg', alt: 'Langkawi Island', destination: 'Malaysia', category: 'nature' },
  { id: 19, src: '/images/gallery/1.jpg', alt: 'Genting Highlands', destination: 'Malaysia', category: 'nature' },
  { id: 20, src: '/images/gallery/2.jpg', alt: 'Malaysian Borneo', destination: 'Malaysia', category: 'adventure' },
  
  // India
  { id: 21, src: '/images/gallery/3.jpg', alt: 'Taj Mahal', destination: 'India', category: 'culture' },
  { id: 22, src: '/images/gallery/7.jpg', alt: 'Kerala Backwaters', destination: 'India', category: 'nature' },
  { id: 23, src: '/images/gallery/13.jpg', alt: 'Goa Beach', destination: 'India', category: 'nature' },
  { id: 24, src: '/images/gallery/12.jpg', alt: 'Jaipur Palace', destination: 'India', category: 'culture' },
]

const destinations = ['All', 'Thailand', 'Maldives', 'Nepal', 'Philippines', 'Malaysia', 'India']
const categories = ['All', 'culture', 'nature', 'adventure', 'luxury', 'food']

export default function GalleryPage() {
  const [selectedDestination, setSelectedDestination] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = galleryImages.filter(image => {
    const destinationMatch = selectedDestination === 'All' || image.destination === selectedDestination
    const categoryMatch = selectedCategory === 'All' || image.category === selectedCategory
    return destinationMatch && categoryMatch
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore stunning images from our destinations and get inspired for your next adventure
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Destination Filter */}
            <div className="flex flex-col items-center">
              <label htmlFor="destination-filter" className="text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <select
                id="destination-filter"
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              >
                {destinations.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex flex-col items-center">
              <label htmlFor="category-filter" className="text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedDestination('All')
                setSelectedCategory('All')
              }}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No images found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more images.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    
                    {/* Image Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg mb-1">{image.alt}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-200">{image.destination}</span>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full capitalize">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.alt}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg">{selectedImage.destination}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full capitalize">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Inspired by What You See?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            These images represent just a glimpse of the amazing experiences waiting for you. 
            Start planning your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/packages" className="btn-primary text-lg px-8 py-4">
              Explore Packages
            </a>
            <a href="/contact" className="btn-outline text-lg px-8 py-4">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
