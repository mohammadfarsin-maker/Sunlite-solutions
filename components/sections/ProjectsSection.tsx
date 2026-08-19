'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../data/solarData';
import { Briefcase } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#e9680b] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Briefcase className="w-3.5 h-3.5" /> Proof of Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight mb-6"
          >
            Projects that show what Sunlite can actually deliver.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A]"
          >
            In production, each card should link to a detailed case-study URL with real photos, system size, location, customer objective and verified outcomes.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['all', 'residential', 'commercial', 'industrial'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold capitalize transition-all ${
                filter === f
                  ? 'bg-[#1C1B18] text-white shadow-md'
                  : 'bg-[#DCD9D1] text-[#5A564A] hover:bg-[#1C1B18] hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative min-h-[220px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#718b72] to-[#1e3b36] p-6 text-white flex flex-col justify-end shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10">
                <small className="font-mono text-[10px] text-[#ffbd70] uppercase font-bold block mb-1">
                  {project.location}
                </small>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-xs text-slate-300">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
