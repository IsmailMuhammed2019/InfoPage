# cPanel Deployment Guide for ICBM Landing Page

## Overview
This guide will help you deploy your Next.js ICBM landing page to cPanel hosting. Since cPanel doesn't support Node.js applications directly, we'll build the app as a static site.

## Prerequisites
- cPanel hosting account
- File Manager access in cPanel
- Domain or subdomain configured

## Step 1: Build the Static Files

### Local Build (Recommended)
1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Build the static files**:
   ```bash
   npm run build
   ```

3. **The static files will be generated in the `out` folder**

### Alternative: Build on Server
If you can't build locally, you can upload the source code and build on the server if your cPanel supports Node.js.

## Step 2: Prepare Files for Upload

### Files to Upload
Upload the entire contents of the `out` folder to your cPanel's `public_html` directory.

### File Structure After Upload
```
public_html/
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── assets/
│   ├── dbi-abuja-campus.jpg
│   ├── dbi-lagos-campus.jpg
│   ├── dbi-enugu-campus.jpg
│   ├── dbi-kano-campus.jpg
│   ├── dbi-yola-campus.jpg
│   ├── cybersecurity-training.jpg
│   ├── ai-ml-training.jpg
│   ├── software-development.jpg
│   └── ...
└── ...
```

## Step 3: Upload to cPanel

### Method 1: Using cPanel File Manager
1. **Login to cPanel**
2. **Open File Manager**
3. **Navigate to `public_html`**
4. **Upload all files from the `out` folder**
5. **Ensure files are in the correct directory structure**

### Method 2: Using FTP/SFTP
1. **Use an FTP client** (FileZilla, WinSCP, etc.)
2. **Connect to your server** using cPanel FTP credentials
3. **Navigate to `public_html`**
4. **Upload all files from the `out` folder**

### Method 3: Using cPanel File Manager Upload
1. **Create a ZIP file** of the `out` folder contents
2. **Upload the ZIP file** to cPanel
3. **Extract the ZIP file** in `public_html`

## Step 4: Configure Domain/Subdomain

### For Root Domain
- Files should be in `public_html/`
- Your domain will automatically serve the site

### For Subdomain
- Create a subdomain in cPanel
- Upload files to the subdomain's directory (e.g., `public_html/subdomain/`)

## Step 5: Test Your Deployment

1. **Visit your domain** in a web browser
2. **Check all pages** load correctly
3. **Test all functionality** (buttons, forms, etc.)
4. **Verify images** are displaying properly
5. **Test responsive design** on mobile devices

## Step 6: Troubleshooting

### Common Issues

#### 1. 404 Errors
- **Solution**: Ensure all files are in the correct directory
- **Check**: File permissions (should be 644 for files, 755 for directories)

#### 2. Images Not Loading
- **Solution**: Verify image paths are correct
- **Check**: Images are in the `assets/` folder

#### 3. CSS/JS Not Loading
- **Solution**: Check file permissions
- **Verify**: All `_next/static/` files are uploaded

#### 4. Styling Issues
- **Solution**: Clear browser cache
- **Check**: CSS files are properly uploaded

### File Permissions
Set these permissions in cPanel File Manager:
- **Files**: 644
- **Directories**: 755
- **Special files**: 600 (if needed)

## Step 7: Performance Optimization

### Enable Compression
1. **In cPanel**, go to "Optimize Website"
2. **Enable Gzip compression**

### Enable Caching
1. **Create `.htaccess` file** in `public_html/`:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Enable caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

## Step 8: SSL Certificate (Recommended)

1. **In cPanel**, go to "SSL/TLS"
2. **Install SSL certificate** for your domain
3. **Force HTTPS** redirect if needed

## Step 9: Monitoring

### Regular Checks
- **Monitor site performance**
- **Check for broken links**
- **Verify forms are working**
- **Test on different devices**

### Updates
- **Keep local development environment** for future updates
- **Rebuild and re-upload** when making changes

## Support

If you encounter issues:
1. **Check cPanel error logs**
2. **Verify file permissions**
3. **Contact your hosting provider**
4. **Review this guide** for common solutions

## Security Notes

- **Keep backups** of your files
- **Use strong passwords** for cPanel
- **Enable two-factor authentication** if available
- **Regularly update** your local development environment

---

**Last Updated**: January 2025
**Version**: 1.0 