# Deployment Guide - Vercel

## 🚀 Quick Deploy to Vercel

Your portfolio is ready to deploy! Follow these steps:

### Step 1: Push to GitHub (if not already done)

If you haven't created a GitHub repository yet:

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `personal-portfolio` (or any name you prefer)
   - Make it **Public** (required for free Vercel)
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Connect your local repository:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 2: Deploy to Vercel

#### Option A: Via Vercel Website (Recommended)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository (`personal-portfolio`)
   - Vercel will auto-detect Next.js

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `your-project.vercel.app`

#### Option B: Via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Login to Vercel
   - Link to existing project or create new
   - Deploy!

### Step 3: Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

## ✅ Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify 3D animations work
- [ ] Check mobile responsiveness
- [ ] Test all social links
- [ ] Verify PDF download works
- [ ] Test contact form (if you add backend)
- [ ] Check analytics (Vercel provides basic analytics)

## 🔄 Updating Your Site

Every time you push to GitHub:
- Vercel automatically rebuilds and deploys
- Preview deployments are created for each PR
- Production updates are instant

## 📊 Vercel Features You Get

- ✅ **Automatic HTTPS**
- ✅ **Global CDN** (fast worldwide)
- ✅ **Preview Deployments** (for every PR)
- ✅ **Analytics** (built-in)
- ✅ **Custom Domains**
- ✅ **Environment Variables**
- ✅ **Automatic Optimizations**

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### 3D Elements Not Loading
- Check browser console for errors
- Ensure WebGL is enabled
- Some browsers may need polyfills

### PDF Not Loading
- Verify `public/Research_CV_Draft.pdf` exists
- Check file size (Vercel has limits)
- Ensure correct path in code

## 📝 Environment Variables (if needed later)

If you add features requiring API keys:
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## 🎉 You're Done!

Your portfolio is now live on Vercel! Share your link:
`https://your-project.vercel.app`

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
