import Link from 'next/link'

interface PackageCardProps {
  id: string
  title: string
  description: string
  duration: string
  price: number
  image: string
  destination: string
  featured?: boolean
}

const PackageCard = ({ id, title, description, duration, price, image, destination, featured = false }: PackageCardProps) => {
  return (
    <div className={`card overflow-hidden ${featured ? 'ring-2 ring-blue-500' : ''}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
          {destination}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">{duration}</span>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">${price.toLocaleString()}</p>
            <p className="text-sm text-gray-500">per person</p>
          </div>
        </div>

        <Link href={`/contact?package=${id}`} className="btn-primary w-full text-center">
          Book Now
        </Link>
      </div>
    </div>
  )
}

export default PackageCard
