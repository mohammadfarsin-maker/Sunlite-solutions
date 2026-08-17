'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WHY_SUNLITE_POINTS } from '../data/solarData';
import { ShieldCheck } from 'lucide-react';

export const WhySunliteSection: React.FC = () => {
  const [baPosition, setBaPosition] = useState<number>(50);

  return (
    <section id="about" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#ff8a1e] text-xs font-mono font-bold uppercase tracking-widest shadow-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Why Sunlite
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight"
            >
              Local execution. Technical thinking. Long-term support.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-[#5A564A]"
            >
              Keep the visual tone premium and technology-led, but make every trust statement evidence-backed in the production version.
            </motion.p>

            <div className="space-y-3 pt-4">
              {WHY_SUNLITE_POINTS.map((pt) => (
                <div key={pt.step} className="p-4 rounded-2xl bg-[#DCD9D1] border border-[#1C1B18]/10">
                  <b className="text-sm font-bold text-[#1C1B18] block">{pt.step} · {pt.title}</b>
                  <p className="text-xs text-[#5A564A] mt-1">{pt.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Room Image */}
          <div className="lg:col-span-6">
            <div className="relative h-[390px] rounded-3xl overflow-hidden border border-[#1C1B18]/20 shadow-xl group">
              <img 
                src="/room.jpg" 
                alt="Sunlite Solutions Installation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-[#ff8a1e] text-white font-mono text-[10px] uppercase font-bold tracking-wider inline-block mb-2">
                  KERALA ROOFTOP EPC
                </span>
                <p className="text-sm font-bold text-white drop-shadow-sm">Engineered for durability & maximum solar energy yield</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
