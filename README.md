# Ibrahim Kaif - Portfolio Website

A stunning, modern portfolio website showcasing my work as an AI Researcher and Engineer. Built with cutting-edge technologies and featuring interactive 3D elements.

## 🚀 Features

- **3D Interactive Elements**: Neural network visualization, 3D timeline, and particle effects using Three.js
- **Terminal Interface**: Interactive terminal component with typing animations
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Smooth dark mode toggle with transitions
- **Sections**:
  - Hero section with 3D neural network background
  - About section with animated skill bars
  - Interactive 3D timeline for achievements
  - Resume showcase with downloadable PDF
  - Project showcase with detailed cards
  - Blog section (ready for MDX integration)
  - Contact form with social links
  - Achievement counters with animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `components/sections/Hero.tsx`
2. **About Section**: Edit `components/sections/About.tsx`
3. **Resume**: Replace `public/Research_CV_Draft.pdf` with your resume
4. **Projects**: Update `components/sections/Projects.tsx`
5. **Social Links**: Update links in `components/sections/Hero.tsx` and `components/sections/Contact.tsx`

### Colors

The color scheme uses:
- Primary: `#00ff88` (Green)
- Secondary: `#00d9ff` (Cyan)

Update these in `app/globals.css` to match your brand.

## 📝 Blog Setup

The blog section is ready for MDX integration. To add blog posts:

1. Create a `content/blog/` directory
2. Add MDX files for each post
3. Update `components/sections/Blog.tsx` to fetch from your content source

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Three.js for amazing 3D graphics
- Framer Motion for smooth animations
- Next.js team for the excellent framework

---

Built with ❤️ by Ibrahim Kaif
