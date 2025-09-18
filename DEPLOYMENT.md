# Deployment Guide - AmarHoliday Website

This guide provides step-by-step instructions for deploying the AmarHoliday website to various hosting platforms.

## 🚀 Quick Start

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Locate the static files**: The build creates an `out/` folder containing all static files.

3. **Deploy to your chosen platform** (see sections below).

## 🌐 Hostinger Deployment (Recommended)

### Prerequisites
- Hostinger hosting account
- Access to File Manager or FTP credentials
- Domain pointed to Hostinger

### Step-by-Step Instructions

#### Option 1: File Manager (Easiest)

1. **Login to Hostinger Control Panel**
   - Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - Login with your credentials

2. **Access File Manager**
   - Click on "File Manager" in the left sidebar
   - Navigate to your domain's public_html folder

3. **Upload Files**
   - Select all files from the `out/` folder on your local machine
   - Upload them to the `public_html` folder
   - **Important**: Upload the contents of the `out/` folder, not the folder itself

4. **Verify Structure**
   Your `public_html` should look like this:
   ```
   public_html/
   ├── index.html
   ├── about/
   ├── contact/
   ├── feedback/
   ├── gallery/
   ├── packages/
   ├── privacy-policy/
   ├── refund-policy/
   ├── terms-conditions/
   ├── _next/
   └── favicon.ico
   ```

5. **Test Your Website**
   - Visit your domain to ensure everything works
   - Check that all pages load correctly
   - Verify that images and styles are working

#### Option 2: FTP Upload

1. **Get FTP Credentials**
   - In Hostinger Control Panel, go to "FTP Accounts"
   - Note your FTP hostname, username, and password

2. **Use FTP Client**
   - Download FileZilla or use any FTP client
   - Connect using your credentials
   - Navigate to `public_html` folder

3. **Upload Files**
   - Upload all contents from the `out/` folder
   - Maintain the folder structure

### Troubleshooting Hostinger Issues

- **404 Errors**: Ensure all files are in the correct location
- **Styling Issues**: Check that `_next` folder was uploaded completely
- **Image Issues**: Verify image paths and file permissions

## ☁️ Alternative Deployment Options

### Netlify

1. **Connect Repository**
   - Push your code to GitHub/GitLab
   - Connect repository to Netlify

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `out`

3. **Deploy**
   - Netlify will automatically build and deploy

### Vercel

1. **Connect Repository**
   - Import your GitHub repository
   - Vercel auto-detects Next.js

2. **Deploy**
   - Vercel handles everything automatically
   - Note: Vercel doesn't support static export by default

### GitHub Pages

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select source branch

2. **Upload Files**
   - Upload contents of `out/` folder to your repository
   - Or use GitHub Actions for automatic deployment

### Any Web Server

1. **Upload Files**
   - Upload all contents of `out/` folder to your web server
   - Maintain folder structure

2. **Configure Server**
   - Ensure server supports static file serving
   - Set proper MIME types for `.html` files

## 🔧 Post-Deployment Checklist

- [ ] All pages load without errors
- [ ] Images and styles display correctly
- [ ] Navigation works on all pages
- [ ] Forms submit properly (if backend is configured)
- [ ] Mobile responsiveness works
- [ ] SEO meta tags are present
- [ ] Social media sharing works
- [ ] Contact information is correct
- [ ] Legal pages are accessible

## 📱 Mobile Testing

After deployment, test on:
- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices (iOS Safari, Android Chrome)
- [ ] Tablets (iPad, Android tablets)
- [ ] Different screen sizes

## 🔍 SEO Verification

- [ ] Meta titles and descriptions are present
- [ ] Open Graph tags work for social sharing
- [ ] Page loading speed is acceptable
- [ ] All internal links work
- [ ] Sitemap is accessible (if generated)

## 🚨 Common Issues & Solutions

### Issue: Pages return 404
**Solution**: Ensure all files are uploaded to the correct location and server supports clean URLs.

### Issue: Styles not loading
**Solution**: Check that `_next` folder was uploaded completely and file permissions are correct.

### Issue: Images not displaying
**Solution**: Verify image paths and ensure images were uploaded to the server.

### Issue: Slow loading
**Solution**: Optimize images, enable compression, and consider using a CDN.

## 📞 Support

If you encounter deployment issues:

1. **Check the browser console** for JavaScript errors
2. **Verify file permissions** on your server
3. **Check server logs** for any error messages
4. **Contact your hosting provider** for server-specific issues
5. **Email us**: support@amarholiday.com

## 🔄 Updates & Maintenance

To update your website:

1. **Make changes** to your local code
2. **Rebuild**: `npm run build`
3. **Upload new files** to replace old ones
4. **Test** the updated website

## 💡 Performance Tips

- **Enable Gzip compression** on your server
- **Use a CDN** for faster global access
- **Optimize images** before uploading
- **Enable browser caching** for static assets
- **Minimize HTTP requests** by combining files

---

**Happy Deploying! 🎉**

Your AmarHoliday website should now be live and accessible to visitors worldwide.
