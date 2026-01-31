'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const commands = [
  { text: '$ cat resume.txt', delay: 500 },
  { text: '> Ibrahim Kaif - AI Researcher & Engineer', delay: 1000 },
  { text: '> IIT Madras | POSTECH Scholar', delay: 1500 },
  { text: '> Specializing in Foundation Models & Computer Vision', delay: 2000 },
  { text: '$ ls projects/', delay: 3000 },
  { text: '> Lane Detection | Document Intelligence | IGVC 2023', delay: 3500 },
  { text: '$ whoami', delay: 4500 },
  { text: '> Building the future of AI, one model at a time.', delay: 5000 },
];

export default function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentLineIndex < commands.length) {
      const command = commands[currentLineIndex];
      setIsTyping(true);
      
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, command.text]);
        setIsTyping(false);
        setCurrentLineIndex((prev) => prev + 1);
      }, command.delay);

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm max-w-2xl w-full"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 sm:ml-4 text-gray-400 text-xs">terminal</span>
      </div>
      
      <div className="space-y-1 sm:space-y-2">
        {displayedLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`${line.startsWith('$') ? 'text-[#00ff88]' : 'text-gray-300'} break-words`}
          >
            {line}
          </motion.div>
        ))}
        {isTyping && (
          <span className="text-[#00ff88] terminal-cursor">|</span>
        )}
      </div>
    </motion.div>
  );
}
