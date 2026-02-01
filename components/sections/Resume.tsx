'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            View my complete resume
          </p>
          
          <motion.a
            href="/CVkoreanaalto.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-[#00ff88]/50 text-[#00ff88] font-semibold rounded-lg hover:bg-[#00ff88]/10 transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={20} />
            View PDF
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
