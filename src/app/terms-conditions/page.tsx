import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - AmarHoliday',
  description: 'Read AmarHoliday\'s terms and conditions for booking travel packages and using our services.',
  keywords: 'terms and conditions, booking terms, travel terms, AmarHoliday terms',
}

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Conditions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Important terms and conditions for booking and using our travel services
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
                These Terms and Conditions ("Terms") govern your use of AmarHoliday's services, including our website, travel packages, and related services. By using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-700 mb-4">
              AmarHoliday is a travel agency operated by EKKID LLC, a company registered in Wyoming, United States. We specialize in organizing and arranging travel packages to various destinations across Asia, including Thailand, Maldives, Nepal, Philippines, Malaysia, and India.
            </p>
            <p className="text-gray-700 mb-6">
              These Terms apply to all bookings, reservations, and services provided by AmarHoliday, whether made through our website, over the phone, via email, or through any other communication channel.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Booking Terms</h2>
            <p className="text-gray-700 mb-4">
              When making a booking with AmarHoliday, you agree to the following terms:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Booking Confirmation:</strong> All bookings are subject to availability and confirmation. A booking is only confirmed when you receive written confirmation from us.</li>
              <li><strong>Accuracy of Information:</strong> You are responsible for providing accurate and complete information when making bookings, including passport details, travel dates, and special requirements.</li>
              <li><strong>Travel Documents:</strong> It is your responsibility to ensure you have valid travel documents, including passports, visas, and any required vaccinations for your destination.</li>
              <li><strong>Group Bookings:</strong> For group bookings, the person making the booking is responsible for ensuring all group members understand and agree to these Terms.</li>
              <li><strong>Special Requirements:</strong> Any special requirements (dietary, accessibility, medical) must be communicated at the time of booking and are subject to availability.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment</h2>
            <p className="text-gray-700 mb-4">
              Payment terms and conditions for our services:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Deposit Requirements:</strong> A non-refundable deposit is typically required to confirm your booking. The amount varies by package and will be specified at the time of booking.</li>
              <li><strong>Full Payment:</strong> Full payment is due at least 30 days before departure, unless otherwise specified in your booking confirmation.</li>
              <li><strong>Payment Methods:</strong> We accept various payment methods including credit cards, bank transfers, and online payment systems. All payments are processed securely.</li>
              <li><strong>Currency:</strong> All prices are quoted in US Dollars (USD) unless otherwise stated. Exchange rates are subject to fluctuation.</li>
              <li><strong>Additional Charges:</strong> Prices may not include airport taxes, fuel surcharges, or other government-imposed fees, which will be clearly communicated.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cancellation</h2>
            <p className="text-gray-700 mb-4">
              Cancellation policies and refund information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Cancellation by Customer:</strong> Cancellations must be made in writing. Refund amounts depend on the timing of cancellation and are subject to supplier policies.</li>
              <li><strong>Cancellation Fees:</strong> Cancellation fees may apply and vary by package and supplier. These will be clearly communicated at the time of booking.</li>
              <li><strong>No-Show Policy:</strong> Failure to arrive for your scheduled departure may result in forfeiture of all payments made.</li>
              <li><strong>Travel Insurance:</strong> We strongly recommend purchasing travel insurance to protect against unexpected cancellations or changes.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Travel Documents</h2>
            <p className="text-gray-700 mb-4">
              Requirements and responsibilities regarding travel documentation:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Passport Validity:</strong> Most destinations require passports to be valid for at least 6 months beyond your planned return date.</li>
              <li><strong>Visa Requirements:</strong> Visa requirements vary by destination and nationality. It is your responsibility to obtain necessary visas.</li>
              <li><strong>Health Requirements:</strong> Some destinations require specific vaccinations or health certificates. Check with your healthcare provider and destination authorities.</li>
              <li><strong>Document Copies:</strong> We recommend carrying copies of all important documents and storing them separately from originals.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Liability</h2>
            <p className="text-gray-700 mb-4">
              Our liability and your responsibilities:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> We act as an agent for various service providers (hotels, airlines, tour operators). We are not liable for their acts or omissions.</li>
              <li><strong>Force Majeure:</strong> We are not liable for events beyond our control, including natural disasters, political unrest, or government actions.</li>
              <li><strong>Limitation of Liability:</strong> Our liability is limited to the amount paid for the specific service in question, subject to applicable law.</li>
              <li><strong>Travel Insurance:</strong> We strongly recommend comprehensive travel insurance to protect against various risks and losses.</li>
              <li><strong>Personal Responsibility:</strong> You are responsible for your own safety and behavior during your trip.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Travel Insurance</h2>
            <p className="text-gray-700 mb-6">
              We strongly recommend purchasing comprehensive travel insurance that covers medical expenses, trip cancellation, lost luggage, and other potential issues. While we can provide information about insurance options, the purchase and terms of insurance are between you and the insurance provider.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Health and Safety</h2>
            <p className="text-gray-700 mb-4">
              Important health and safety considerations:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Medical Conditions:</strong> Inform us of any medical conditions that may affect your travel or require special arrangements.</li>
              <li><strong>Local Conditions:</strong> Be aware of local health conditions, food safety, and water quality at your destination.</li>
              <li><strong>Emergency Contacts:</strong> Keep emergency contact information readily available during your trip.</li>
              <li><strong>Local Laws:</strong> Familiarize yourself with local laws and customs at your destination.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complaints and Disputes</h2>
            <p className="text-gray-700 mb-4">
              How to address issues and resolve disputes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Immediate Issues:</strong> Report any immediate issues to our local representatives or contact us directly.</li>
              <li><strong>Written Complaints:</strong> Submit written complaints within 30 days of your return for proper investigation.</li>
              <li><strong>Dispute Resolution:</strong> We aim to resolve all disputes amicably. If resolution cannot be reached, disputes may be subject to mediation or legal proceedings.</li>
              <li><strong>Governing Law:</strong> These Terms are governed by the laws of Wyoming, United States.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms and Conditions are governed by and construed in accordance with the laws of Wyoming, United States. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Wyoming, United States.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> support@amarholiday.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 307 205 5481</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> 1311 W Baseline Road, Tempe, Arizona, 85283, USA</p>
              <p className="text-gray-700"><strong>Company:</strong> EKKID LLC (Wyoming, US)</p>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                These Terms and Conditions are effective as of January 15, 2024, and supersede all previous versions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
