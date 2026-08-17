'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SOLAR_GUIDES } from '../data/solarData';
import { BookMarked } from 'lucide-react';

export const SolarGuideSection: React.FC = () => {
  return (
    <section id="guide" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#087c78] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <BookMarked className="w-3.5 h-3.5" /> Solar Knowledge Hub
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight mb-6"
          >
            Learn before you buy.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A]"
          >
            Each topic below should become a detailed, indexable guide. The homepage only provides the entry point.
          </motion.p>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLAR_GUIDES.map((guide, idx) => (
            <motion.a
              key={guide.title}
              href={guide.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-[#DCD9D1] border border-[#1C1B18]/10 hover:border-[#087c78]/40 transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#087c78] block mb-3">
                  {guide.tag}
                </span>
                <h3 className="text-lg font-bold text-[#1C1B18] mb-3 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-xs text-[#5A564A] leading-relaxed">
                  {guide.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>



      </div>
    </section>
  );
};
