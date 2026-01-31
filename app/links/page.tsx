'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Linkedin, 
  Mail, 
  Github, 
  Twitter, 
  ExternalLink,
  ArrowLeft,
  Download
} from 'lucide-react';
import Link from 'next/link';

const links = [
  {
    title: 'Download Resume',
    subtitle: 'View my full CV and research experience',
    icon: Download,
    href: '/CVwithwebsite.pdf',
    color: '#00ff88',
    download: true,
  },
  {
    title: 'View Resume Online',
    subtitle: 'Open PDF in browser',
    icon: FileText,
    href: '/CVwithwebsite.pdf',
    color: '#00d9ff',
    download: false,
  },
  {
    title: 'LinkedIn',
    subtitle: 'Connect with me on LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ibrahimkaif/',
    color: '#00ff88',
    external: true,
  },
  {
    title: 'GitHub',
    subtitle: 'Check out my code and projects',
    icon: Github,
    href: 'https://github.com/kaif0312',
    color: '#00d9ff',
    external: true,
  },
  {
    title: 'Email Me',
    subtitle: 'ikaif0312@gmail.com',
    icon: Mail,
    href: 'mailto:ikaif0312@gmail.com',
    color: '#00ff88',
    external: false,
  },
  {
    title: 'Twitter',
    subtitle: 'Follow me for AI research updates',
    icon: Twitter,
    href: 'https://x.com/KaifIbrahim10',
    color: '#00d9ff',
    external: true,
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Back to home button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00ff88] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d9ff] p-1"
          >
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">IK</span>
            </div>
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <span className="gradient-text">Ibrahim Kaif</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-1">AI Researcher & Engineer</p>
          <p className="text-gray-500 text-xs sm:text-sm">IIT Madras | POSTECH Scholar</p>
        </motion.div>

        {/* Links Grid */}
        <div className="max-w-2xl mx-auto space-y-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.title}
                href={link.href}
                download={link.download ? true : undefined}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="block glass rounded-xl p-4 sm:p-6 hover:bg-[#00ff88]/10 transition-all group relative overflow-hidden touch-manipulation"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background gradient on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${link.color}, transparent)` }}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <div 
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${link.color}20` }}
                  >
                    <Icon size={24} style={{ color: link.color }} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-[#00ff88] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm break-words sm:truncate">
                      {link.subtitle}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    {link.external ? (
                      <ExternalLink size={20} className="text-gray-400 group-hover:text-[#00ff88] transition-colors" />
                    ) : (
                      <div className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Ibrahim Kaif</p>
        </motion.div>
      </div>
    </div>
  );
}
