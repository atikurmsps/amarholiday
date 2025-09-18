import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - AmarHoliday',
  description: 'Learn how AmarHoliday collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
  keywords: 'privacy policy, data protection, personal information, AmarHoliday privacy',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we collect, use, and protect your personal information
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
                This Privacy Policy describes how AmarHoliday ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website, use our services, or otherwise interact with us. By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect several types of information from and about users of our website and services, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, postal address, and other contact details when you make inquiries, book packages, or contact us.</li>
              <li><strong>Travel Preferences:</strong> Destination preferences, travel dates, accommodation preferences, and special requirements.</li>
              <li><strong>Payment Information:</strong> Credit card details, billing information, and transaction history (processed securely through our payment partners).</li>
              <li><strong>Communication Records:</strong> Emails, chat messages, and other communications with our team.</li>
              <li><strong>Website Usage Data:</strong> IP address, browser type, operating system, pages visited, time spent on pages, and other analytics data.</li>
              <li><strong>Feedback and Reviews:</strong> Comments, ratings, and testimonials you provide about our services.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Provision:</strong> To process bookings, arrange travel services, and provide customer support.</li>
              <li><strong>Communication:</strong> To respond to inquiries, send booking confirmations, travel updates, and promotional materials (with your consent).</li>
              <li><strong>Personalization:</strong> To tailor our services and recommendations based on your preferences and travel history.</li>
              <li><strong>Quality Improvement:</strong> To analyze usage patterns, improve our website, and enhance customer experience.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
              <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Sharing</h2>
            <p className="text-gray-700 mb-4">
              We may share your information with the following parties:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Hotels, airlines, tour operators, and other travel service providers to fulfill your bookings.</li>
              <li><strong>Payment Processors:</strong> Secure payment gateways to process your payments.</li>
              <li><strong>Technology Partners:</strong> Website hosting, analytics, and customer support tools.</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality and security.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website and improve our services.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a personalized experience.</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and measure campaign effectiveness.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can control cookie settings through your browser preferences, though disabling certain cookies may affect website functionality.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements).</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider.</li>
              <li><strong>Objection:</strong> Object to certain types of processing, such as direct marketing.</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing where applicable.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Encryption:</strong> Data transmission and storage are encrypted using industry-standard protocols.</li>
              <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis.</li>
              <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing.</li>
              <li><strong>Employee Training:</strong> Regular training on data protection and privacy best practices.</li>
              <li><strong>Incident Response:</strong> Procedures for detecting, reporting, and responding to data breaches.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide our services and fulfill contractual obligations</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Improve our services and customer experience</li>
            </ul>
            <p className="text-gray-700 mb-6">
              When information is no longer needed, we securely delete or anonymize it.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> support@amarholiday.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 307 205 5481</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> 1311 W Baseline Road, Tempe, Arizona, 85283, USA</p>
              <p className="text-gray-700"><strong>Company:</strong> EKKID LLC (Wyoming, US)</p>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                This Privacy Policy is effective as of January 15, 2024, and supersedes all previous versions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
