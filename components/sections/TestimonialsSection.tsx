'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/solarData';
import { Star, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#b45309] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Customer Voice
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight mb-6"
          >
            Real Experiences Should Become{' '}
            <span className="text-gradient-amber block">A Core Trust Layer.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A]"
          >
            See what our customers say about our solar installations across Kerala.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl relative overflow-hidden border border-[#1C1B18]/10 hover:border-[#d97706]/40 bg-[#DCD9D1] shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-1 text-[#d97706]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d97706]" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#7E7A6C] bg-[#E9E6DC] px-2.5 py-1 rounded-full border border-[#1C1B18]/10">
                    {item.role}
                  </span>
                </div>

                <p className="text-sm text-[#38362E] leading-relaxed font-medium mb-8">
                  {item.text}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C1B18]/10">
                <b className="text-sm font-bold text-[#1C1B18] block">{item.name}</b>
                <span className="text-xs text-[#7E7A6C] block mt-0.5">{item.location}</span>
              </div>
            </motion.article>
          ))}
        </div>


      </div>
    </section>
  );
};
