import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy - AmarHoliday',
  description: 'Learn about AmarHoliday\'s refund and cancellation policies for travel packages and bookings.',
  keywords: 'refund policy, cancellation policy, travel refunds, AmarHoliday refunds',
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Refund & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cancellation Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding our refund and cancellation terms for travel packages
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                <strong>Last Updated:</strong> January 15, 2024
              </p>
              <p className="text-gray-600">
                This Refund & Cancellation Policy outlines the terms and conditions for cancelling bookings and receiving refunds for AmarHoliday travel packages and services. Please read this policy carefully before making a booking.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cancellation by Customer</h2>
            <p className="text-gray-700 mb-4">
              When you cancel a booking, the following terms apply:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Written Notice Required:</strong> All cancellations must be submitted in writing via email to support@amarholiday.com or through our official cancellation form.</li>
              <li><strong>Cancellation Timeline:</strong> Cancellation fees and refund amounts depend on how far in advance you cancel before your scheduled departure date.</li>
              <li><strong>Processing Time:</strong> Cancellation requests are processed within 2-3 business days of receipt.</li>
              <li><strong>Confirmation:</strong> You will receive written confirmation of your cancellation and any applicable refund amounts.</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cancellation Fee Schedule</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">More than 60 days before departure</span>
                  <span className="font-semibold text-gray-900">Deposit only (non-refundable)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">30-60 days before departure</span>
                  <span className="font-semibold text-gray-900">25% of total package price</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">15-29 days before departure</span>
                  <span className="font-semibold text-gray-900">50% of total package price</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">8-14 days before departure</span>
                  <span className="font-semibold text-gray-900">75% of total package price</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Less than 7 days before departure</span>
                  <span className="font-semibold text-gray-900">100% of total package price</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cancellation by Company</h2>
            <p className="text-gray-700 mb-4">
              AmarHoliday reserves the right to cancel bookings under certain circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Insufficient Bookings:</strong> If minimum participant numbers are not met for group tours, we may cancel the tour and offer alternatives or full refunds.</li>
              <li><strong>Safety Concerns:</strong> If we determine that travel to a destination poses significant safety risks, we may cancel affected bookings.</li>
              <li><strong>Supplier Issues:</strong> If our service providers (hotels, airlines, etc.) cancel services, we will work to find alternatives or provide refunds.</li>
              <li><strong>Force Majeure Events:</strong> Natural disasters, political unrest, or other extraordinary circumstances may necessitate cancellations.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              When we cancel a booking, we will provide you with written notice and offer alternative arrangements or a full refund of all monies paid.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Refund Process</h2>
            <p className="text-gray-700 mb-4">
              Our refund process is designed to be transparent and efficient:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Refund Calculation:</strong> Refunds are calculated based on the cancellation fee schedule and any non-refundable components.</li>
              <li><strong>Processing Time:</strong> Refunds are typically processed within 10-15 business days of cancellation confirmation.</li>
              <li><strong>Payment Method:</strong> Refunds are issued using the same payment method used for the original booking.</li>
              <li><strong>Bank Processing:</strong> Credit card refunds may take 5-10 business days to appear on your statement, depending on your bank.</li>
              <li><strong>Currency Conversion:</strong> If your original payment was in a different currency, refunds will be converted at current exchange rates.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Non-Refundable Items</h2>
            <p className="text-gray-700 mb-4">
              Certain components of your travel package are non-refundable:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Deposits:</strong> Initial deposits are non-refundable and are used to secure your booking and cover administrative costs.</li>
              <li><strong>Airline Tickets:</strong> Once issued, airline tickets are subject to airline cancellation policies and may be non-refundable.</li>
              <li><strong>Special Permits:</strong> Trekking permits, national park fees, and other special permits are typically non-refundable once issued.</li>
              <li><strong>Insurance Premiums:</strong> Travel insurance premiums are non-refundable once coverage begins.</li>
              <li><strong>Processing Fees:</strong> Credit card processing fees and bank transfer charges are non-refundable.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Force Majeure</h2>
            <p className="text-gray-700 mb-4">
              Force majeure events are extraordinary circumstances beyond our control that may affect your travel:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Natural Disasters:</strong> Earthquakes, hurricanes, floods, volcanic eruptions, and other natural events.</li>
              <li><strong>Political Events:</strong> War, civil unrest, government actions, or security concerns.</li>
              <li><strong>Health Emergencies:</strong> Pandemics, epidemics, or health-related travel restrictions.</li>
              <li><strong>Transportation Issues:</strong> Major transportation strikes, airport closures, or airspace restrictions.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              In force majeure situations, we will work with you to reschedule your trip or provide appropriate refunds based on the circumstances and supplier policies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Modification Requests</h2>
            <p className="text-gray-700 mb-4">
              If you need to modify your booking rather than cancel it:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Date Changes:</strong> Date modifications may be possible subject to availability and may incur change fees.</li>
              <li><strong>Package Changes:</strong> Switching to a different package may be allowed with applicable price adjustments.</li>
              <li><strong>Participant Changes:</strong> Replacing participants may be possible with advance notice and any applicable fees.</li>
              <li><strong>Modification Fees:</strong> Change fees typically range from $50-$200 depending on the type and timing of changes.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Travel Insurance Recommendations</h2>
            <p className="text-gray-700 mb-4">
              We strongly recommend purchasing comprehensive travel insurance:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Trip Cancellation Coverage:</strong> Protects against financial losses from covered cancellation reasons.</li>
              <li><strong>Medical Coverage:</strong> Covers medical expenses and emergency medical evacuation.</li>
              <li><strong>Baggage Protection:</strong> Covers lost, stolen, or damaged luggage.</li>
              <li><strong>Travel Delay Coverage:</strong> Reimburses additional expenses due to travel delays.</li>
              <li><strong>Cancel for Any Reason:</strong> Some policies offer this option for maximum flexibility.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Circumstances</h2>
            <p className="text-gray-700 mb-4">
              Special consideration may be given in certain situations:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Medical Emergencies:</strong> Serious illness or injury may qualify for special refund consideration with proper documentation.</li>
              <li><strong>Bereavement:</strong> Death of immediate family members may qualify for compassionate refunds.</li>
              <li><strong>Military Deployment:</strong> Active duty military personnel may qualify for special cancellation terms.</li>
              <li><strong>Documentation Required:</strong> Special circumstances require appropriate documentation and are evaluated case-by-case.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For cancellation requests or questions about refunds, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> support@amarholiday.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 307 205 5481</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> 1311 W Baseline Road, Tempe, Arizona, 85283, USA</p>
              <p className="text-gray-700"><strong>Company:</strong> EKKID LLC (Wyoming, US)</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Important Note:</strong> This policy is subject to change and may be updated periodically. The version in effect at the time of your booking will apply. We recommend reviewing this policy before making any travel arrangements.
              </p>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                This Refund & Cancellation Policy is effective as of January 15, 2024, and supersedes all previous versions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
