'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Scene3D from '../3d/Scene3D';
import Terminal from '../ui/Terminal';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kaif0312', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ibrahimkaif/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/KaifIbrahim10', label: 'Twitter' },
    { icon: Mail, href: 'mailto:ikaif0312@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#00ff88] font-mono text-sm">Hello, I'm</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text">Ibrahim Kaif</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300"
            >
              AI Researcher & Engineer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl"
            >
              Building foundation models for single-cell genomics at POSTECH. 
              Former IGVC 2023 Champion. Passionate about AI, computer vision, and pushing the boundaries of what's possible.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 sm:gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="glass p-3 sm:p-3 rounded-lg hover:bg-[#00ff88]/10 transition-colors touch-manipulation"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <Icon size={20} className="text-[#00ff88]" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all text-center text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#resume"
                className="px-6 py-3 glass border border-[#00ff88]/50 text-[#00ff88] font-semibold rounded-lg hover:bg-[#00ff88]/10 transition-all text-center text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
              <motion.a
                href="/links"
                className="px-6 py-3 glass border border-[#00d9ff]/50 text-[#00d9ff] font-semibold rounded-lg hover:bg-[#00d9ff]/10 transition-all text-center text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quick Links
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full lg:w-auto mt-8 lg:mt-0"
          >
            <Terminal />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={24} className="text-[#00ff88]" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
