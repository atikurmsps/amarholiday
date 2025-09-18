import type { Metadata } from 'next'
import PackageCard from '@/components/PackageCard'

export const metadata: Metadata = {
  title: 'Travel Packages - AmarHoliday',
  description: 'Explore our comprehensive travel packages to Thailand, Maldives, Nepal, Philippines, Malaysia, and India. Find your perfect holiday experience.',
  keywords: 'travel packages, holiday packages, Thailand tours, Maldives packages, Nepal trekking, Philippines holidays, Malaysia tours, India packages',
}

// All packages data
const allPackages = [
  // Thailand Packages
  {
    id: 'thailand-bangkok',
    title: 'Bangkok Cultural Tour',
    description: 'Experience the vibrant culture of Thailand\'s capital with visits to ancient temples, floating markets, and authentic street food adventures. Includes guided tours of Wat Phra Kaew, Grand Palace, and Chao Phraya River cruise.',
    duration: '5D/4N',
    price: 899,
    image: '/images/packages/bangkok-cultural.jpg',
    destination: 'Thailand',
    featured: true
  },
  {
    id: 'thailand-phuket',
    title: 'Phuket Beach Escape',
    description: 'Relax on pristine beaches, enjoy water sports, and explore the vibrant nightlife of Thailand\'s largest island. Features Patong Beach, Phi Phi Islands day trip, and traditional Thai massage.',
    duration: '6D/5N',
    price: 1150,
    image: '/images/packages/phuket-beach.jpg',
    destination: 'Thailand',
    featured: false
  },
  {
    id: 'thailand-chiangmai',
    title: 'Chiang Mai Adventure',
    description: 'Discover the cultural heart of Northern Thailand with temple visits, hill tribe encounters, and outdoor adventures. Includes Doi Suthep, elephant sanctuary, and cooking classes.',
    duration: '7D/6N',
    price: 1300,
    image: '/images/packages/chiang-mai.jpg',
    destination: 'Thailand',
    featured: false
  },

  // Maldives Packages
  {
    id: 'maldives-luxury',
    title: 'Luxury Water Villa Stay',
    description: 'Indulge in ultimate luxury with overwater bungalows, private infinity pools, and pristine white sand beaches. Features spa treatments, gourmet dining, and private butler service.',
    duration: '5D/4N',
    price: 2500,
    image: '/images/packages/maldives-luxury.jpg',
    destination: 'Maldives',
    featured: true
  },
  {
    id: 'maldives-budget',
    title: 'Budget Island Hopping',
    description: 'Experience the beauty of multiple Maldivian islands on a budget-friendly adventure. Includes local island stays, snorkeling trips, and authentic Maldivian culture.',
    duration: '7D/6N',
    price: 1500,
    image: '/images/packages/maldives-budget.jpg',
    destination: 'Maldives',
    featured: false
  },
  {
    id: 'maldives-honeymoon',
    title: 'Honeymoon Special',
    description: 'Perfect romantic getaway for newlyweds with private beach dinners, couples spa treatments, and sunset cruises. Includes champagne breakfast and romantic room decorations.',
    duration: '6D/5N',
    price: 2100,
    image: '/images/packages/maldives-honeymoon.jpg',
    destination: 'Maldives',
    featured: false
  },

  // Nepal Packages
  {
    id: 'nepal-kathmandu',
    title: 'Kathmandu & Pokhara Tour',
    description: 'Explore Nepal\'s cultural and natural highlights with visits to ancient temples, mountain views, and serene lakes. Includes UNESCO World Heritage sites and mountain flight.',
    duration: '6D/5N',
    price: 950,
    image: '/images/packages/nepal-kathmandu.jpg',
    destination: 'Nepal',
    featured: false
  },
  {
    id: 'nepal-everest',
    title: 'Everest Base Camp Trek',
    description: 'Embark on an epic adventure to the base of the world\'s highest peak, experiencing breathtaking Himalayan landscapes and Sherpa culture. Includes experienced guides and teahouse accommodation.',
    duration: '12D/11N',
    price: 1800,
    image: '/images/packages/nepal-everest.jpg',
    destination: 'Nepal',
    featured: true
  },
  {
    id: 'nepal-cultural',
    title: 'Cultural Heritage Tour',
    description: 'Immerse yourself in Nepal\'s rich cultural heritage with visits to ancient temples, traditional villages, and local markets. Features traditional dance performances and local cuisine.',
    duration: '5D/4N',
    price: 800,
    image: '/images/packages/nepal-cultural.jpg',
    destination: 'Nepal',
    featured: false
  },

  // Philippines Packages
  {
    id: 'philippines-boracay',
    title: 'Boracay Beach Holiday',
    description: 'Relax on pristine white sand beaches, enjoy water sports, and experience the vibrant nightlife of this tropical paradise. Includes island hopping and sunset sailing.',
    duration: '5D/4N',
    price: 1100,
    image: '/images/packages/philippines-boracay.jpg',
    destination: 'Philippines',
    featured: false
  },
  {
    id: 'philippines-palawan',
    title: 'Palawan Island Adventure',
    description: 'Explore the stunning natural wonders of Palawan including the Underground River, limestone cliffs, and pristine beaches. Features island hopping and wildlife encounters.',
    duration: '7D/6N',
    price: 1400,
    image: '/images/packages/philippines-palawan.jpg',
    destination: 'Philippines',
    featured: false
  },
  {
    id: 'philippines-cebu',
    title: 'Cebu Diving Experience',
    description: 'Discover the underwater wonders of Cebu with professional diving instruction and visits to world-class dive sites. Includes equipment rental and marine life encounters.',
    duration: '6D/5N',
    price: 1250,
    image: '/images/packages/philippines-cebu.jpg',
    destination: 'Philippines',
    featured: false
  },

  // Malaysia Packages
  {
    id: 'malaysia-kl-genting',
    title: 'Kuala Lumpur City & Genting Highlands',
    description: 'Experience the best of urban Malaysia with city tours, shopping, and mountain retreat. Includes Petronas Towers, Batu Caves, and cable car ride to Genting.',
    duration: '5D/4N',
    price: 850,
    image: '/images/packages/malaysia-kl.jpg',
    destination: 'Malaysia',
    featured: false
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
  {
    id: 'malaysia-borneo',
    title: 'Malaysian Borneo Nature Tour',
    description: 'Explore the wild side of Malaysia with rainforest adventures, wildlife encounters, and indigenous culture experiences. Includes orangutan sanctuary visits and river cruises.',
    duration: '8D/7N',
    price: 1450,
    image: '/images/packages/malaysia-borneo.jpg',
    destination: 'Malaysia',
    featured: false
  },

  // India Packages
  {
    id: 'india-golden-triangle',
    title: 'Golden Triangle Tour',
    description: 'Discover India\'s most iconic destinations: Delhi, Agra, and Jaipur. Visit the Taj Mahal, Red Fort, and Amber Palace with expert guides and luxury accommodations.',
    duration: '6D/5N',
    price: 900,
    image: '/images/packages/india-golden-triangle.jpg',
    destination: 'India',
    featured: false
  },
  {
    id: 'india-kerala',
    title: 'Kerala Backwaters Cruise',
    description: 'Experience the serene beauty of Kerala\'s backwaters with houseboat cruises, traditional Ayurveda treatments, and spice plantation visits. Includes traditional dance performances.',
    duration: '7D/6N',
    price: 1150,
    image: '/images/packages/india-kerala.jpg',
    destination: 'India',
    featured: false
  },
  {
    id: 'india-goa',
    title: 'Goa Beach & Culture',
    description: 'Enjoy the perfect blend of beach relaxation and Portuguese colonial culture in Goa. Features historic churches, spice plantations, and pristine beaches.',
    duration: '5D/4N',
    price: 950,
    image: '/images/packages/india-goa.jpg',
    destination: 'India',
    featured: false
  }
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Packages</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of holiday packages across Asia's most beautiful destinations
          </p>
        </div>
      </section>

      {/* Thailand Packages */}
      <section id="thailand" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Thailand Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the Land of Smiles with our diverse range of Thailand holiday packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.filter(pkg => pkg.destination === 'Thailand').map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Maldives Packages */}
      <section id="maldives" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Maldives Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escape to paradise with our exclusive Maldives holiday experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.filter(pkg => pkg.destination === 'Maldives').map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Nepal Packages */}
      <section id="nepal" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nepal Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adventure awaits in the majestic Himalayas with our Nepal travel packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.filter(pkg => pkg.destination === 'Nepal').map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Philippines Packages */}
      <section id="philippines" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Philippines Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the natural wonders and cultural richness of the Philippines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.filter(pkg => pkg.destination === 'Philippines').map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Malaysia Packages */}
      <section id="malaysia" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Malaysia Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of urban excitement and natural beauty in Malaysia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.filter(pkg => pkg.destination === 'Malaysia').map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* India Packages */}
      <section id="india" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              India Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the rich culture, history, and spirituality of incredible India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPackages.filter(pkg => pkg.destination === 'India').map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book Your Dream Holiday?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our travel experts are here to help you choose the perfect package and ensure a seamless booking experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary bg-white text-blue-600 hover:bg-gray-100">
              Book Now
            </a>
            <a href="/gallery" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              View Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
