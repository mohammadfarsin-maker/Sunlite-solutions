'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_STATS } from '../../data/solarData';
import CountUp from '../ui/CountUp';

export const TrustStatsStrip: React.FC = () => {
  // Parse numeric values and suffixes (e.g. "15+" -> 15 and "+")
  const parseStat = (valStr: string) => {
    const num = parseInt(valStr.replace(/[^0-9]/g, ''), 10);
    const suffix = valStr.replace(/[0-9]/g, '');
    return { num: isNaN(num) ? null : num, suffix };
  };

  return (
    <div className="bg-[#E9E6DC] border-t border-b border-[#1C1B18]/10 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#1C1B18]/10 text-center">
          {COMPANY_STATS.map((stat, idx) => {
            const { num, suffix } = parseStat(stat.value);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="py-4 md:py-0 px-4 group hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#e9680b] tracking-tight">
                  {num !== null ? (
                    <>
                      <CountUp
                        from={0}
                        to={num}
                        duration={2.5}
                        separator=","
                      />
                      {suffix}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-xs text-[#5A564A] mt-1 font-semibold tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
