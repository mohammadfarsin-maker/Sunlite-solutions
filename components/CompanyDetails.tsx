'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_STATS } from '../data/solarData';
import { ShieldCheck, Building2, CheckCircle, Sparkles, MapPin } from 'lucide-react';

export const CompanyDetails: React.FC = () => {
  return (
    <section id="company" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#b45309] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Building2 className="w-3.5 h-3.5" /> Company Profile & Credentials
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight mb-6"
          >
            India’s Premier Tier-1{' '}
            <span className="text-gradient-amber block">Solar Engineering Platform.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A]"
          >
            Empowering homeowners and business enterprises with high-efficiency TOPCon solar PV systems, MNRE-certified installations, and guaranteed lifetime yield.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#DCD9D1] p-6 rounded-3xl text-center border border-[#1C1B18]/10 hover:border-[#d97706]/40 transition-colors shadow-sm group"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-[#1C1B18] group-hover:text-[#d97706] transition-colors mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-[#38362E] mb-1">{stat.label}</p>
              <p className="text-[10px] text-[#7E7A6C] font-mono uppercase font-bold">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>

        {/* Warranty & Tech Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Warranty Seal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl bg-[#DCD9D1] p-8 sm:p-12 border border-[#1C1B18]/15 shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#1C1B18] text-[#E9E6DC] flex items-center justify-center font-bold shadow-md">
                <ShieldCheck className="w-8 h-8 text-[#d97706]" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#b45309] font-bold">TRIPLE GUARANTEE SHIELD</span>
                <h3 className="text-2xl font-extrabold text-[#1C1B18]">30-Year Triple Protection Seal</h3>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/10 text-xs">
                <CheckCircle className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1C1B18]">30-Year Warranty</p>
                  <p className="text-[#5A564A]">Guaranteed to deliver at least 87.4% rated power output at Year 30.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/10 text-xs">
                <CheckCircle className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1C1B18]">12-Year Complete Hardware Replacement</p>
                  <p className="text-[#5A564A]">100% free component replacement for panels, inverters & mounting hardware.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/10 text-xs">
                <CheckCircle className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1C1B18]">10-Year Waterproof Workmanship Protection</p>
                  <p className="text-[#5A564A]">Comprehensive roof leak sealing and structural wind stability warranty.</p>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-[#b45309] font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Insured by National Insurance Underwriters
            </div>
          </motion.div>

          {/* Certifications Wall */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-[#DCD9D1] p-8 rounded-3xl border border-[#1C1B18]/15 shadow-sm">
              <h3 className="text-xl font-bold text-[#1C1B18] mb-3">
                Tier-1 TOPCon & Bifacial Panel Engineering
              </h3>
              <p className="text-sm text-[#5A564A] leading-relaxed mb-6">
                Sunlite Solutions exclusively uses TOPCon & Bifacial solar panels with up to 23.2% module efficiency, offering lower degradation and superior performance in high Indian summer temperatures.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/10">
                  <p className="text-xs font-bold text-[#1C1B18]">MNRE</p>
                  <p className="text-[10px] text-[#7E7A6C] font-mono font-bold">Approved List</p>
                </div>
                <div className="p-3 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/10">
                  <p className="text-xs font-bold text-[#1C1B18]">BIS</p>
                  <p className="text-[10px] text-[#7E7A6C] font-mono font-bold">IS 14286 Std</p>
                </div>
                <div className="p-3 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/10">
                  <p className="text-xs font-bold text-[#1C1B18]">ISO 9001</p>
                  <p className="text-[10px] text-[#7E7A6C] font-mono font-bold">Certified Mgmt</p>
                </div>
                <div className="p-3 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/10">
                  <p className="text-xs font-bold text-[#1C1B18]">IEEE 1547</p>
                  <p className="text-[10px] text-[#7E7A6C] font-mono font-bold">Grid Interconnect</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#DCD9D1] border border-[#1C1B18]/10 flex items-center justify-between text-xs text-[#5A564A] font-semibold">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d97706]" />
                <span>Pan-India Presence: 42 Service Centers Across Metro & Tier-2 Cities</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
