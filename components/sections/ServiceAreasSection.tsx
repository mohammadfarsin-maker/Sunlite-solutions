'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SERVICE_AREAS } from '../../data/solarData';
import { MapPin } from 'lucide-react';

export const ServiceAreasSection: React.FC = () => {
  return (
    <section id="areas" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Map Card */}
          <div className="lg:col-span-6 bg-[#e5ece6] h-[390px] rounded-3xl relative overflow-hidden flex items-center justify-center border border-[#1C1B18]/10 shadow-inner">
            <span className="font-extrabold text-7xl text-[#087c78]/10 tracking-widest pointer-events-none select-none">
              KERALA
            </span>

            {/* Pins */}
            <div className="absolute top-[47%] left-[47%] w-3.5 h-3.5 bg-[#ff8a1e] border-2 border-white rounded-full shadow-md animate-ping" title="Kottayam" />
            <div className="absolute top-[35%] left-[42%] w-3 h-3 bg-[#ff8a1e] border-2 border-white rounded-full shadow-md" title="Ernakulam" />
            <div className="absolute top-[57%] left-[57%] w-3 h-3 bg-[#ff8a1e] border-2 border-white rounded-full shadow-md" title="Alappuzha" />
            <div className="absolute top-[31%] left-[58%] w-3 h-3 bg-[#ff8a1e] border-2 border-white rounded-full shadow-md" title="Idukki" />
            <div className="absolute top-[65%] left-[52%] w-3 h-3 bg-[#ff8a1e] border-2 border-white rounded-full shadow-md" title="Pathanamthitta" />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#087c78] text-xs font-mono font-bold uppercase tracking-widest shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5" /> Service Areas
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight"
            >
              Local pages. Local proof. Better relevance.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-[#5A564A]"
            >
              Don't create thin location pages. Each production location page should contain actual service availability, local projects, useful FAQs and location-specific evidence.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {SERVICE_AREAS.map((area) => (
                <a
                  key={area.name}
                  href={area.href}
                  className="p-4 rounded-xl bg-[#DCD9D1] border border-[#1C1B18]/10 hover:border-[#087c78] hover:text-[#087c78] font-semibold text-xs transition-colors flex items-center justify-between"
                >
                  <span>{area.name}</span>
                  <span className="text-xs">→</span>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
