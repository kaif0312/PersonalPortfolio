'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Brain, Car, FileText } from 'lucide-react';

const projects = [
  {
    title: 'Foundation Models for Single-Cell Genomics',
    description: 'Developing multimodal transformer-based foundation models for single-cell genomics analysis at POSTECH',
    tech: ['PyTorch', 'Transformers', 'HPC', 'H100 GPUs'],
    icon: Brain,
    color: '#00ff88',
    highlights: [
      'Multimodal encoder networks',
      'Zero-shot cell classification',
      '4x H100 GPU training',
    ],
    link: '#',
  },
  {
    title: 'Document Intelligence System',
    description: 'AI-powered document analysis using Vision-Language Models for construction tech',
    tech: ['VLMs', 'OCR', 'LLMs', 'Computer Vision'],
    icon: FileText,
    color: '#00d9ff',
    highlights: [
      'OCR integration (Tesseract, Azure, Adobe)',
      'Knowledge graph construction',
      'Production evaluation frameworks',
    ],
    link: '#',
  },
  {
    title: 'Lane Detection with GANs',
    description: 'Deep learning pipeline for lane detection in occluded scenarios using GANs',
    tech: ['PyTorch', 'GANs', 'Computer Vision', 'OpenCV'],
    icon: Car,
    color: '#00ff88',
    highlights: [
      'Synthetic dataset generation',
      'Chained generative models',
      'Published in MVA 2025',
    ],
    link: '#',
  },
  {
    title: 'IGVC 2023 Autonomous Vehicle',
    description: 'ML-powered panoptic segmentation system for real-time autonomous navigation',
    tech: ['CUDA', 'LiDAR', 'Stereo Vision', 'ML'],
    icon: Code,
    color: '#00d9ff',
    highlights: [
      '1st Place Design Challenge',
      '3rd Overall at IGVC 2023',
      '40% latency reduction with CUDA',
    ],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Research and engineering projects pushing the boundaries of AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-6 hover:bg-[#00ff88]/10 transition-all group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Background gradient on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${project.color}20` }}
                    >
                      <Icon size={32} style={{ color: project.color }} />
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.link}
                        className="p-2 glass rounded-lg hover:bg-[#00ff88]/10 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} className="text-gray-400" />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        className="p-2 glass rounded-lg hover:bg-[#00ff88]/10 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} className="text-gray-400" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
