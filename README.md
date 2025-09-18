# AmarHoliday - Travel Agency Website

A complete, production-ready, SEO-friendly static website for AmarHoliday travel agency built with Next.js 15 and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Static Export**: Ready for deployment to any static hosting service
- **Modern UI/UX**: Beautiful, clean design with smooth animations
- **Fast Performance**: Optimized for speed and user experience

## 🗺️ Destinations Covered

- **Thailand**: Bangkok Cultural Tour, Phuket Beach Escape, Chiang Mai Adventure
- **Maldives**: Luxury Water Villa Stay, Budget Island Hopping, Honeymoon Special
- **Nepal**: Kathmandu & Pokhara Tour, Everest Base Camp Trek, Cultural Heritage Tour
- **Philippines**: Boracay Beach Holiday, Palawan Island Adventure, Cebu Diving Experience
- **Malaysia**: KL City & Genting Highlands, Langkawi Island Retreat, Malaysian Borneo Nature Tour
- **India**: Golden Triangle Tour, Kerala Backwaters Cruise, Goa Beach & Culture

## 🏢 Company Information

- **Company Name**: AmarHoliday
- **Registered Company**: EKKID LLC (Wyoming, US)
- **Domain**: amarholiday.com
- **Contact Emails**: 
  - support@amarholiday.com
  - package@amarholiday.com
  - mail@amarholiday.com

## 🏢 Office Locations

1. **Arizona Office**
   - 1311 W Baseline Road, Tempe, Arizona, 85283, USA
   - Phone: +1 307 205 5481

2. **London Office**
   - 71-75 Shelton street, London, WC2H 9JQ, UK
   - Phone: +1 307 205 5481

3. **Bangladesh Office**
   - RK Road, Ideal Mor, Rangpur, 5400, Bangladesh
   - Phone: +880 140 064 7156

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amarholiday
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
amarholiday/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/             # About Us page
│   │   ├── contact/           # Contact Us page
│   │   ├── feedback/          # Customer Feedback page
│   │   ├── gallery/           # Travel Gallery page
│   │   ├── packages/          # Travel Packages page
│   │   ├── privacy-policy/    # Privacy Policy page
│   │   ├── refund-policy/     # Refund & Cancellation Policy
│   │   ├── terms-conditions/  # Terms & Conditions page
│   │   ├── globals.css        # Global styles with Tailwind
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Home page
│   └── components/            # Reusable components
│       ├── Navbar.tsx         # Navigation component
│       ├── Footer.tsx         # Footer component
│       ├── Hero.tsx           # Hero section component
│       ├── PackageCard.tsx    # Package display component
│       └── TestimonialCard.tsx # Customer testimonial component
├── public/                    # Static assets
├── out/                       # Static export (after build)
├── tailwind.config.ts         # Tailwind CSS configuration
├── next.config.ts             # Next.js configuration
└── package.json               # Project dependencies
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production and create static export
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses **Tailwind CSS v4** for styling with:

- Custom color palette (primary and secondary colors)
- Responsive design utilities
- Custom component classes
- Smooth transitions and animations
- Modern gradient backgrounds

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔍 SEO Features

- Complete meta tags for all pages
- Open Graph tags for social media sharing
- Structured data markup
- Semantic HTML structure
- Optimized page titles and descriptions
- Sitemap ready

## 📄 Pages Included

1. **Home Page** - Hero section, featured packages, about section, testimonials
2. **About Us** - Company story, mission, registration details
3. **Contact Us** - Office locations, contact form, maps placeholders
4. **Customer Feedback** - Feedback form and customer reviews
5. **Gallery** - Filterable image gallery with modal view
6. **Packages** - Complete listing of all travel packages by destination
7. **Legal Pages** - Privacy Policy, Terms & Conditions, Refund Policy

## 🚀 Deployment

### Static Export

The project is configured for static export using `next export`. After building:

```bash
npm run build
```

This creates an `out/` folder containing the static website.

### Deployment Options

1. **Hostinger** (Recommended)
   - Upload the contents of the `out/` folder to your hosting account
   - Set the document root to the folder containing the files

2. **Netlify**
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `out`

3. **Vercel**
   - Connect your repository
   - Vercel will automatically detect Next.js and deploy

4. **Any Static Hosting**
   - Upload the `out/` folder contents to any web server

## 🔧 Configuration

### Next.js Config

The project is configured for static export with:
- `output: 'export'` - Enables static export
- `trailingSlash: true` - Adds trailing slashes for better compatibility
- `images: { unoptimized: true }` - Required for static export

### Tailwind Config

Custom configuration includes:
- Extended color palette
- Custom font family (Inter)
- Responsive breakpoints
- Custom component utilities

## 📸 Images

The website uses:
- **Unsplash** for high-quality travel photos
- **Picsum.photos** for placeholder images in the gallery
- Optimized images for fast loading
- Responsive image handling

## 📞 Support

For technical support or questions about the website:
- Email: support@amarholiday.com
- Phone: +1 307 205 5481

## 📄 License

This project is proprietary software owned by EKKID LLC.

## 🎯 Future Enhancements

Potential improvements for future versions:
- Multi-language support
- Online booking system integration
- Customer portal
- Blog section
- Advanced search and filtering
- Payment gateway integration
- Real-time chat support

---

**Built with ❤️ for AmarHoliday**
