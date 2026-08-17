'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SOLAR_EDUCATION_CARDS } from '../data/solarData';
import { BookOpen, ExternalLink } from 'lucide-react';

export const SolarEducationSection: React.FC = () => {
  return (
    <section id="education" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#087c78] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5" /> Solar, Explained for Kerala
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight mb-6"
          >
            Good solar decisions start with the right questions.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A]"
          >
            Roof area is only one part of the decision. Generation, electricity use, grid connection, backup expectations, system architecture and the quality of installation all affect the outcome.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLAR_EDUCATION_CARDS.map((card, idx) => (
            <motion.article
              key={card.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#DCD9D1] border border-[#1C1B18]/10 hover:border-[#087c78]/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#087c78] block mb-3">
                  {card.tag}
                </span>
                <h3 className="text-lg font-bold text-[#1C1B18] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-[#5A564A] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Research Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-5 rounded-2xl bg-[#FBFAF5] border border-dashed border-[#C9CEC8] text-xs text-[#5A564A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <strong className="text-[#1C1B18]">Research note:</strong> Educational claims in this section are based primarily on KSEB's Solar Rooftop Portal FAQs and application material. Current regulatory rules, subsidy eligibility, capacity limits and utility procedures must be rechecked before publication.
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <a href="https://ekiran.kseb.in/public/faqs" target="_blank" rel="noopener noreferrer" className="text-[#087c78] font-bold hover:underline inline-flex items-center gap-1">
              KSEB Solar FAQ <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://ekiran.kseb.in/" target="_blank" rel="noopener noreferrer" className="text-[#087c78] font-bold hover:underline inline-flex items-center gap-1">
              KSEB Rooftop Portal <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://mnre.gov.in/en/grid-connected-solar-rooftop-programme/" target="_blank" rel="noopener noreferrer" className="text-[#087c78] font-bold hover:underline inline-flex items-center gap-1">
              MNRE Rooftop Solar <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
