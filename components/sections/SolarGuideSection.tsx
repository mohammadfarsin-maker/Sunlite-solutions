'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SOLAR_GUIDES } from '../../data/solarData';
import { BookMarked, ArrowRight } from 'lucide-react';

export const SolarGuideSection: React.FC = () => {
  return (
    <section id="guide" className="py-28 bg-[#0B1117] text-white border-t border-[#1C2530] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16222F] border border-[#ff8a1e]/30 text-[#ffb45d] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <BookMarked className="w-3.5 h-3.5" /> SOLAR KNOWLEDGE HUB
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Learn <span className="text-[#ffb45d]">before you buy.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#9aa7b0]"
          >
            Explore practical engineering guides on KSEB net-metering, battery storage backup, PM Surya subsidy processing, and panel maintenance across Kerala.
          </motion.p>
        </div>

        {/* Resource Grid matching prompt design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLAR_GUIDES.map((guide, idx) => (
            <motion.a
              key={guide.title}
              href={guide.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group p-6 rounded-3xl bg-[#121B24] border border-[#1E2C3A] hover:border-[#ff8a1e]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#ff8a1e]/10 flex flex-col justify-between overflow-hidden relative"
            >
              <div className="flex gap-4 items-start">
                <div className="flex-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#ffb45d] block mb-2">
                    {guide.tag}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#ffb45d] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[#8e9da8] leading-relaxed mb-6">
                    {guide.description}
                  </p>
                </div>

                {/* 3D Illustration Image */}
                {guide.image && (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#1A2634] border border-white/10 flex-shrink-0 relative shadow-md">
                    <img 
                      src={guide.image} 
                      alt={guide.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-[#1C2836] flex items-center justify-between text-xs font-bold text-[#ffb45d]">
                <span>Read Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#guide"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#16222F] hover:bg-[#ff8a1e] border border-[#ff8a1e]/40 text-white font-bold text-xs shadow-lg transition-all duration-300 hover:scale-105"
          >
            <BookMarked className="w-4 h-4 text-[#ffb45d]" />
            <span>Explore All Guides →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
