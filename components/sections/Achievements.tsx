'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Book, GraduationCap } from 'lucide-react';
import Timeline3D from '../3d/Timeline3D';

const achievements = [
  {
    icon: Trophy,
    title: 'IGVC 2023 Champions',
    description: '1st Place in Design & Cyber Security, 3rd Overall',
    detail: 'First Indian team to podium in IGVC history',
    color: '#00ff88',
  },
  {
    icon: GraduationCap,
    title: 'Global Young Leaders Scholarship',
    description: '1 of 6 students selected globally for POSTECH',
    detail: 'Only 2 from India in Life Sciences',
    color: '#00d9ff',
  },
  {
    icon: Book,
    title: 'MVA 2025 Publication',
    description: 'Lane Occlusion Inpainting and Detection',
    detail: 'DOI: 10.1007/s00138-025-01744-2',
    color: '#00ff88',
  },
  {
    icon: Award,
    title: 'JEE Advanced 2021',
    description: 'All India Rank 6420',
    detail: 'Top 2% of 200,000+ candidates',
    color: '#00d9ff',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Key Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones that define my journey
          </p>
        </motion.div>

        {/* 3D Timeline */}
        <div className="mb-20">
          <Timeline3D />
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-6 hover:bg-[#00ff88]/10 transition-all group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${achievement.color}20` }}
                  >
                    <Icon size={32} style={{ color: achievement.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                    <p className="text-gray-300 mb-2">{achievement.description}</p>
                    <p className="text-gray-500 text-sm">{achievement.detail}</p>
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
