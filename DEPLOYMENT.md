# Ringa Café Website - Deployment Guide

This guide covers media optimization and deployment to GitHub Pages and cPanel.

---

## 📝 NOTE: Bytes Service Thumbnails

The following Bytes services are using available fallback images from the media folder:
- **SIM Activation** → SimActivationRed.png ✅
- **SIM Swap** → SimSwap-red.png ✅
- **SIM Upgrade** → SimPack-red.png (fallback)
- **Prepaid Starter Packs** → SimPack.png (fallback)
- **Prepaid Devices** → PrepaidDevices.jpg ✅
- **Phone Accessories** → PhoneAccesories-red.png ✅
- **Data Bundles** → HeroLightinging-FastBytes-red.png (fallback)
- **Fibre Support** → WifiRouter.jpg (fallback)
- **WiFi Router Setup** → WifiRouter-red.png ✅
- **Contract Upgrade** → PhoneAccesories.jpg (fallback)
- **Device Troubleshooting** → PrepaidDevices.jpg (fallback)
- **Network Support** → WifiRouter.jpg (fallback)

**To add proper branded thumbnails later:** Add the missing PNG files to `src/assets/media/` and update the imports in `src/data/catalog.js`.

---

## 📦 MEDIA OPTIMIZATION

### Video Optimization (FFmpeg)

Before deploying, optimize the Bytes hero video to reduce file size:

```powershell
# Navigate to the media folder
cd src/assets/media

# Optimize PhoneConnectivity-Hero.mp4
# This creates a web-optimized version with smaller file size
ffmpeg -i PhoneConnectivity-Hero.mp4 -vf "scale=1280:720" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart PhoneConnectivity-Hero.optimized.mp4

# After verifying the optimized video works, replace the original:
# Move PhoneConnectivity-Hero.optimized.mp4 to /public folder
Move-Item PhoneConnectivity-Hero.optimized.mp4 ../../public/PhoneConnectivity-Hero.mp4 -Force
```

**FFmpeg Parameters Explained:**
- `scale=1280:720` - Reduce resolution to 720p (from higher res if applicable)
- `-crf 28` - Constant Rate Factor (18-28 recommended; 28 = smaller file, good quality)
- `-preset slow` - Slower encoding = better compression
- `-movflags +faststart` - Optimize for web streaming (metadata at start)
- `-b:a 128k` - Audio bitrate 128kbps (sufficient for web)

**Expected Result:** 60-75% file size reduction with minimal quality loss.

---

### Image Optimization

#### PNG Images (Service Thumbnails)

For PNG files that are already optimized (like the red service icons), no further optimization needed if file sizes are reasonable (<200KB each).

To check file sizes:
```powershell
Get-ChildItem src/assets/media/*.png | Select-Object Name, @{Name="SizeMB";Expression={[math]::Round($_.Length / 1MB, 2)}}
```

If any PNGs are >500KB, you can optimize them:

**Option 1: Using TinyPNG CLI (recommended)**
```powershell
# Install tinypng-cli globally
npm install -g tinypng-cli

# Set your TinyPNG API key (get free key from tinypng.com)
tinypng -k YOUR_API_KEY src/assets/media/*.png
```

**Option 2: Using pngquant**
```powershell
# Download pngquant from https://pngquant.org/
# Run in src/assets/media folder:
pngquant --quality=65-80 *.png --ext .png --force
```

#### JPG Images (Food Photos)

For JPG files, you can reduce file size while maintaining quality:

**Option 1: Using ImageMagick**
```powershell
# Download ImageMagick from https://imagemagick.org/
# Navigate to media folder
cd src/assets/media

# Optimize all JPG files (quality 85, strip metadata)
Get-ChildItem *.jpg | ForEach-Object {
    magick convert $_.FullName -quality 85 -strip "optimized_$($_.Name)"
}

# After verifying, replace originals
Get-ChildItem optimized_*.jpg | ForEach-Object {
    Move-Item $_ ($_.Name -replace 'optimized_', '') -Force
}
```

**Option 2: Using jpegoptim**
```powershell
# Download from https://github.com/tjko/jpegoptim
jpegoptim --max=85 --strip-all src/assets/media/*.jpg
```

---

## 🚀 DEPLOYMENT

### GitHub Pages Deployment

#### Method 1: GitHub Actions (Automated - Recommended)

1. **Create GitHub Actions Workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Change to your default branch if different

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

2. **Enable GitHub Pages in Repository Settings**
   - Go to: `Settings` → `Pages`
   - Source: `GitHub Actions`
   - Save

3. **Push to Main Branch**
   ```powershell
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

4. **Your site will be live at:**
   ```
   https://ndumiso-y.github.io/RingaCafe/
   ```

---

#### Method 2: Manual Deployment (gh-pages branch)

1. **Install gh-pages package**
   ```powershell
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**

   Update the `"scripts"` section:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview",
       "lint": "eslint .",
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```powershell
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to: `Settings` → `Pages`
   - Source: `Deploy from a branch`
   - Branch: `gh-pages` / `root`
   - Save

5. **Site will be live at:**
   ```
   https://ndumiso-y.github.io/RingaCafe/
   ```

---

### cPanel Static Hosting Deployment

1. **Build the project locally**
   ```powershell
   npm run build
   ```

2. **The build creates a `dist` folder with all static files**

3. **Upload to cPanel**
   - Log into cPanel File Manager
   - Navigate to `public_html` (or your domain's root folder)
   - Upload ALL contents of the `dist` folder:
     - `index.html`
     - `assets/` folder
     - Any other files in `dist/`

4. **IMPORTANT: HashRouter Support**
   - Create `.htaccess` file in the root directory:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /

     # Don't rewrite files or directories
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d

     # Rewrite everything else to index.html
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   **Note:** With HashRouter (which this project uses), the `.htaccess` is optional but recommended for direct URL access.

5. **Verify deployment**
   - Visit your domain: `https://yourdomain.com`
   - Test all routes: `/menu`, `/bytes`, `/location`, `/order`, etc.

---

### Update cPanel Deployment (After Changes)

```powershell
# 1. Pull latest changes
git pull origin main

# 2. Install any new dependencies
npm install

# 3. Build fresh production version
npm run build

# 4. Upload dist/ folder contents to cPanel
# Use FileZilla, cPanel File Manager, or FTP client
```

---

## ✅ VERIFICATION CHECKLIST

After deployment, verify:

### Functionality
- [ ] Homepage loads with video background
- [ ] Menu page displays all categories with carousels
- [ ] Bytes page shows hero video and service thumbnails
- [ ] Location page displays Google Maps embed
- [ ] Order page cart functionality works
- [ ] All routes work (click around the site)
- [ ] WhatsApp order button works
- [ ] Images load correctly
- [ ] Videos autoplay

### Performance
- [ ] Videos load quickly (optimized versions)
- [ ] Images appear without delay
- [ ] No console errors
- [ ] Smooth scrolling and transitions
- [ ] Mobile responsive (test on phone)

### Cross-Browser
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

---

## 🔧 TROUBLESHOOTING

### "Assets not loading on GitHub Pages"
- **Cause:** Base path issue
- **Fix:** Ensure `vite.config.js` has `base: './'` (already set)

### "Blank page on GitHub Pages"
- **Cause:** JavaScript errors or routing issue
- **Fix:** Check browser console, verify HashRouter is used (already implemented)

### "Videos not playing"
- **Cause:** File path or codec issue
- **Fix:** Ensure videos are in `/public` folder, use H.264 codec

### "Routes return 404 on cPanel"
- **Cause:** Server not configured for SPA
- **Fix:** Add `.htaccess` file (see cPanel section above)

### "Images broken after build"
- **Cause:** Import path issues
- **Fix:** Import images in JS files (already done), or place in `/public` folder

---

## 📝 NOTES

- **HashRouter** is used throughout the project for GitHub Pages + cPanel compatibility
- **Base path** is set to `./` in Vite config for relative asset paths
- **Media files** are imported in React or placed in `/public` for direct access
- **Build output** is always in `dist/` folder
- **No server-side code** - pure static site, works on any static host

---

## 🎯 QUICK DEPLOY COMMANDS

### GitHub Pages (Automated)
```powershell
git add .
git commit -m "Deploy update"
git push origin main
# GitHub Actions will auto-deploy
```

### GitHub Pages (Manual)
```powershell
npm run deploy
```

### cPanel
```powershell
npm run build
# Then upload dist/ contents via cPanel File Manager or FTP
```

---

**Last Updated:** 2025-12-18
**Project:** Ringa Café Website
**Tech Stack:** Vite + React + Tailwind + HashRouter
