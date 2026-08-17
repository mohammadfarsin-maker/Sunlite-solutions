'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_STATS } from '../data/solarData';

export const TrustStatsStrip: React.FC = () => {
  return (
    <div className="bg-[#E9E6DC] border-t border-b border-[#1C1B18]/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#1C1B18]/10 text-center">
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="py-4 md:py-0 px-4"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#e9680b]">
                {stat.value}
              </div>
              <div className="text-xs text-[#5A564A] mt-1 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
