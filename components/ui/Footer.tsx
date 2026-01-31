'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/kaif0312', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ibrahimkaif/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/KaifIbrahim10', label: 'Twitter' },
  { icon: Mail, href: 'mailto:ikaif0312@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ibrahim Kaif. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with Next.js, Three.js, and Framer Motion
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-lg hover:bg-[#00ff88]/10 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  <Icon size={20} className="text-[#00ff88]" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
