'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if dark mode is preferred
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed bottom-8 right-8 z-50 glass p-4 rounded-full hover:bg-[#00ff88]/10 transition-all"
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun size={20} className="text-[#00ff88]" />
      ) : (
        <Moon size={20} className="text-[#00ff88]" />
      )}
    </motion.button>
  );
}
