# Quick Start Guide

## 🚀 Getting Started

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📝 Customization Checklist

Before deploying, make sure to update:

- [ ] **Email address** in `components/sections/Hero.tsx` and `components/sections/Contact.tsx`
- [ ] **Social media links** (GitHub, LinkedIn, Twitter) in:
  - `components/sections/Hero.tsx`
  - `components/sections/Contact.tsx`
  - `components/ui/Footer.tsx`
- [ ] **Resume PDF** - Replace `public/Research_CV_Draft.pdf` with your resume
- [ ] **About section** - Update your story in `components/sections/About.tsx`
- [ ] **Projects** - Update project details in `components/sections/Projects.tsx`
- [ ] **Blog posts** - Add your blog posts (currently using placeholder data)
- [ ] **Stats** - Update achievement numbers in `components/sections/Stats.tsx`

## 🎨 Color Customization

To change the color scheme, update these values in `app/globals.css`:

```css
--accent: #00ff88;        /* Primary green */
--accent-dark: #00cc6a;   /* Darker green */
--terminal-cyan: #00d9ff; /* Cyan accent */
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

The site will automatically deploy on every push to main.

### Other Options

- **Netlify**: Connect your GitHub repo
- **AWS Amplify**: Follow AWS deployment guide
- **Self-hosted**: Run `npm run build` then `npm start`

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Try `npm run build`

### 3D Components Not Showing

- Make sure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Check browser console for errors
- Ensure WebGL is enabled in your browser

### PDF Not Loading

- Verify the PDF file exists in `public/Research_CV_Draft.pdf`
- Check the file path in `components/sections/Resume.tsx`

## 📚 Next Steps

1. Add your blog content (set up MDX or your preferred CMS)
2. Add more projects as you complete them
3. Update achievements and stats regularly
4. Customize animations and 3D elements to match your style
5. Add analytics (Google Analytics, Plausible, etc.)

---

Happy coding! 🎉
