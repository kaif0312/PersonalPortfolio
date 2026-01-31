'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/kaif0312', label: 'GitHub', color: '#00ff88' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ibrahimkaif/', label: 'LinkedIn', color: '#00d9ff' },
  { icon: Twitter, href: 'https://x.com/KaifIbrahim10', label: 'Twitter', color: '#00ff88' },
  { icon: Mail, href: 'mailto:ikaif0312@gmail.com', label: 'Email', color: '#00d9ff' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // In a real app, this would send the form data to an API
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on exciting AI projects or discuss research opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-2">
              <MessageSquare size={24} />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Connect With Me</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out through any of these platforms. I'm always open to discussing 
                new projects, research opportunities, or just having a chat about AI and technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="glass p-6 rounded-lg hover:bg-[#00ff88]/10 transition-all group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon size={32} style={{ color: social.color }} className="mb-3" />
                    <p className="text-white font-semibold">{social.label}</p>
                    <p className="text-gray-400 text-sm mt-1 group-hover:text-[#00ff88] transition-colors">
                      {social.href.startsWith('mailto:') ? 'ikaif0312@gmail.com' : `Visit ${social.label}`}
                    </p>
                  </motion.a>
                );
              })}
            </div>

            <div className="glass rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Current Location</h4>
              <p className="text-gray-300 mb-2">📍 POSTECH, South Korea</p>
              <p className="text-gray-300">📍 IIT Madras, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
