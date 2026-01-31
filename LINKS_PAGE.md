# Links Page - Linktree Style

A clean, modern Linktree-style page for quick access to all your important links.

## 🎯 Features

- **Clean Design**: Minimalist, focused layout
- **Quick Access**: All important links in one place
- **Mobile Responsive**: Works perfectly on all devices
- **Animated**: Smooth hover effects and transitions
- **Easy to Customize**: Simple array-based configuration

## 📍 Access

- **URL**: `/links`
- **Navigation**: Added to main navigation menu
- **Hero Section**: "Quick Links" button added

## 🔗 Default Links Included

1. **Download Resume** - Direct PDF download
2. **View Resume Online** - Open PDF in browser
3. **LinkedIn** - Professional networking
4. **GitHub** - Code repositories
5. **Email** - Contact via email
6. **Twitter** - Social media

## ✏️ Customization

Edit `app/links/page.tsx` to customize:

### Update Links

Modify the `links` array:

```typescript
const links = [
  {
    title: 'Your Link Title',
    subtitle: 'Description or subtitle',
    icon: IconComponent,  // From lucide-react
    href: 'https://your-link.com',
    color: '#00ff88',     // Button color
    external: true,       // Opens in new tab
    download: false,      // For file downloads
  },
  // ... more links
];
```

### Update Profile Info

Change the profile section:
- Name
- Title
- Institution
- Profile picture (currently shows initials)

### Add More Icons

Import from `lucide-react`:
```typescript
import { Instagram, Youtube, Medium } from 'lucide-react';
```

## 🎨 Styling

The page uses the same design system as the main portfolio:
- Dark theme with gradient accents
- Glassmorphism effects
- Smooth animations
- Consistent color scheme

## 📱 Mobile Optimization

- Fully responsive
- Touch-friendly buttons
- Optimized spacing for small screens

## 🚀 Usage Tips

1. **Share the Link**: Perfect for social media bios, email signatures
2. **QR Code**: Generate a QR code for `/links` for business cards
3. **Custom Domain**: Use a custom domain like `links.yourname.com`
4. **Analytics**: Add tracking to see which links are most popular

---

**Pro Tip**: This page is perfect for sharing on social media, business cards, or anywhere you need a single link that leads to all your important resources!
