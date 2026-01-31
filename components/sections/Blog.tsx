'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Building Foundation Models for Single-Cell Genomics',
    excerpt: 'Exploring multimodal transformer architectures for unified biological data representations...',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Research',
    slug: 'foundation-models-single-cell',
  },
  {
    title: 'Lessons from IGVC 2023: Building Autonomous Systems',
    excerpt: 'How we achieved 1st place in Design Challenge and 3rd overall at IGVC 2023...',
    date: '2024-12-20',
    readTime: '12 min read',
    category: 'Engineering',
    slug: 'igvc-2023-lessons',
  },
  {
    title: 'Vision-Language Models for Document Intelligence',
    excerpt: 'Practical insights from deploying VLMs in production for construction document analysis...',
    date: '2024-11-10',
    readTime: '10 min read',
    category: 'AI/ML',
    slug: 'vlm-document-intelligence',
  },
  {
    title: 'Lane Detection in Occluded Scenarios: A GAN Approach',
    excerpt: 'Using generative adversarial networks to handle edge cases in autonomous driving...',
    date: '2024-10-05',
    readTime: '15 min read',
    category: 'Research',
    slug: 'lane-detection-gans',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts on AI research, engineering, and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-lg p-6 hover:bg-[#00ff88]/10 transition-all group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#00ff88]/20 text-[#00ff88]">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#00ff88] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <motion.div
                    className="flex items-center gap-1 text-[#00ff88]"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read more</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-[#00ff88]/50 text-[#00ff88] font-semibold rounded-lg hover:bg-[#00ff88]/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
