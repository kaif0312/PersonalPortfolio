'use client';

import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(false);

  const resumeData = {
    education: [
      {
        institution: 'POSTECH, South Korea',
        program: 'Global Young Leaders Exchange Program in Life Sciences',
        period: 'Aug 2025 – Jun 2026',
        details: 'Fully funded scholarship, 1 of 6 globally selected',
      },
      {
        institution: 'IIT Madras, India',
        program: 'Dual Degree in Biological Engineering',
        period: '2021 – 2026',
        details: 'CGPA: 7.75/10',
      },
    ],
    experience: [
      {
        role: 'Research Intern',
        company: 'POSTECH, South Korea',
        period: 'Jan 2025 – Present',
        description: 'Developing multimodal transformer-based foundation models for single-cell genomics analysis',
        highlights: [
          'Training large-scale models on 4x H100 GPUs',
          'Architecting encoder networks for unified representations',
          'Benchmarking on zero-shot cell classification',
        ],
      },
      {
        role: 'AI Engineer / Founding Engineer',
        company: 'WyreAI (Construction Tech Startup)',
        period: 'Jan 2025 – Present',
        description: 'Founded and led AI team, designing computer vision and NLP pipelines',
        highlights: [
          'Vision-Language Models for document analysis',
          'OCR integration with LLMs',
          'Production evaluation frameworks',
        ],
      },
    ],
    publications: [
      {
        title: 'LOID: Lane Occlusion Inpainting and Detection for Enhanced Autonomous Driving',
        venue: 'MVA 2025',
        authors: 'Agrawal, A., Sivakumar, A. J., Kaif, I., Banerjee, C.',
        doi: '10.1007/s00138-025-01744-2',
      },
    ],
  };

  const handleDownload = () => {
    setIsLoading(true);
    // In a real app, this would download the PDF
    setTimeout(() => {
      setIsLoading(false);
      window.open('/Research_CV_Draft.pdf', '_blank');
    }, 500);
  };

  return (
    <section id="resume" className="relative min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            My professional journey and achievements
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.button
              onClick={handleDownload}
              disabled={isLoading}
              className="px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              {isLoading ? 'Loading...' : 'Download PDF'}
            </motion.button>
            <motion.a
              href="/Research_CV_Draft.pdf"
              target="_blank"
              className="px-6 py-3 glass border border-[#00ff88]/50 text-[#00ff88] font-semibold rounded-lg hover:bg-[#00ff88]/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              View PDF
            </motion.a>
          </div>
        </motion.div>

        {/* Resume Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text flex items-center gap-2">
              <FileText size={24} />
              Education
            </h3>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-[#00ff88] pl-6">
                  <h4 className="text-xl font-semibold text-white mb-1">{edu.institution}</h4>
                  <p className="text-[#00ff88] mb-2">{edu.program}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                  <p className="text-gray-300">{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Experience</h3>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-[#00d9ff] pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-[#00d9ff] mb-3">{exp.company}</p>
                  <p className="text-gray-300 mb-3">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Publications</h3>
            <div className="space-y-4">
              {resumeData.publications.map((pub, index) => (
                <div key={index} className="border-l-2 border-[#00ff88] pl-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{pub.title}</h4>
                  <p className="text-[#00ff88] mb-1">{pub.venue}</p>
                  <p className="text-gray-400 text-sm mb-1">{pub.authors}</p>
                  <p className="text-gray-500 text-xs">DOI: {pub.doi}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
