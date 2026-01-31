'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Code } from 'lucide-react';
import Particles from '../3d/Particles';

const stats = [
  { icon: GraduationCap, label: 'Education', value: 'IIT Madras & POSTECH', subtext: 'Dual Degree | Global Scholar' },
  { icon: Award, label: 'Achievements', value: 'IGVC 2023', subtext: '1st Place Design | 3rd Overall' },
  { icon: BookOpen, label: 'Publications', value: 'MVA 2025', subtext: 'Lane Detection Research' },
  { icon: Code, label: 'Experience', value: 'AI Engineer', subtext: 'Foundation Models | VLMs' },
];

const skills = [
  { name: 'PyTorch', level: 95 },
  { name: 'TensorFlow', level: 90 },
  { name: 'Computer Vision', level: 92 },
  { name: 'NLP', level: 88 },
  { name: 'CUDA/HPC', level: 85 },
  { name: 'React/Next.js', level: 90 },
];

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-20 overflow-hidden">
      <Particles />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate AI researcher pushing the boundaries of foundation models and computer vision
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-6 hover:bg-[#00ff88]/10 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Icon className="text-[#00ff88] mb-4" size={32} />
                <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
                <p className="text-white text-xl font-bold mb-1">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.subtext}</p>
              </motion.div>
            );
          })}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Currently pursuing a Dual Degree in Biological Engineering at IIT Madras, I'm also a Global Young Leaders 
              Scholar at POSTECH, South Korea—one of only 6 students selected globally and 2 from India in Life Sciences.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My research focuses on developing foundation models for single-cell genomics, working with multimodal 
              transformer architectures on 4x H100 GPUs. I'm passionate about bridging the gap between AI and biology.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond research, I co-founded the AI team at WyreAI, building document intelligence systems using 
              Vision-Language Models. I also led Team Abhiyaan to victory at IGVC 2023, becoming the first Indian 
              team to podium in the competition's history.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-[#00ff88]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 1 }}
                      className="h-full bg-gradient-to-r from-[#00ff88] to-[#00d9ff] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
