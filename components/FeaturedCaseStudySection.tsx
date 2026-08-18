'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, IndianRupee, Sun, ShieldCheck, MapPin, Calendar } from 'lucide-react';

export const FeaturedCaseStudySection: React.FC = () => {
  return (
    <section id="case-study" className="py-28 bg-[#101821] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#d97706]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ffb45d] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-soft-sm"
          >
            <Sun className="w-3.5 h-3.5 text-[#ff8a1e]" /> Featured Project Story
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6"
          >
            Real Performance. <span className="text-gradient-amber">Measured Results in Kerala.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
          >
            Explore how a customized Sunlite rooftop system eliminated utility electricity bills for a residential property in Kottayam with guaranteed zero power cuts.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#17232e] p-8 sm:p-10 rounded-3xl border border-[#2a3945] flex flex-col justify-between shadow-soft-lg relative overflow-hidden"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#059669]/20 text-[#10b981] border border-[#059669]/30 text-[11px] font-mono font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Commissioned & Verified
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#ffb45d]" /> Operational since Nov 2024
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight leading-snug">
                Dr. Mathew Varghese's Villa — 98% Bill Reduction with 6.6 kW Bifacial Array
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-8 font-normal">
                Facing bi-monthly electricity bills over ₹14,000 due to multiple split ACs, water heaters, and home appliances, this 2-storey Kottayam villa transitioned to clean solar power with customized elevated structural engineering and seamless KSEB net-metering.
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                <div className="p-4 rounded-2xl bg-[#101821] border border-[#2a3945]">
                  <small className="block text-[10px] text-[#8f9ca5] font-mono uppercase font-semibold">Location</small>
                  <strong className="block text-sm font-bold text-white mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#ff8a1e] flex-shrink-0" />
                    Kumaranalloor, Kottayam
                  </strong>
                </div>

                <div className="p-4 rounded-2xl bg-[#101821] border border-[#2a3945]">
                  <small className="block text-[10px] text-[#8f9ca5] font-mono uppercase font-semibold">System Capacity</small>
                  <strong className="block text-sm font-bold text-white mt-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#ffb45d] flex-shrink-0" />
                    6.6 kW On-Grid (Bifacial)
                  </strong>
                </div>

                <div className="p-4 rounded-2xl bg-[#101821] border border-[#2a3945]">
                  <small className="block text-[10px] text-[#8f9ca5] font-mono uppercase font-semibold">Annual Savings</small>
                  <strong className="block text-sm font-bold text-[#10b981] mt-1 flex items-center gap-1">
                    <IndianRupee className="w-3.5 h-3.5 flex-shrink-0" />
                    ₹85,200 / Year
                  </strong>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#2a3945]">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                <span>₹78,000 Direct PM Surya Subsidy Credited in 24 Days</span>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#ff8a1e] to-[#e9680b] text-white font-bold text-xs shadow-soft-md hover:scale-105 transition-all w-fit"
              >
                <span>Request Site Survey Like This</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Side Cards: Problem -> Engineering Solution -> Verified Outcome */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* 01: Problem */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#E9E6DC] text-[#1C1B18] border border-[#1C1B18]/10 shadow-soft-sm hover:border-[#d97706]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-extrabold text-[#1C1B18] uppercase tracking-wide">
                  01 · Starting Site Challenge
                </h3>
                <span className="text-[10px] font-mono font-bold text-red-700 bg-red-500/10 px-2 py-0.5 rounded">
                  ₹14,200 Bi-monthly Bill
                </span>
              </div>
              <p className="text-xs text-[#5A564A] leading-relaxed font-normal">
                High recurring electricity bills from 3 air conditioners and heavy domestic pumps. Sloped tiled roof with partial tree shading on the south-west ridge required careful shadow mapping.
              </p>
            </motion.div>

            {/* 02: Engineering Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#E9E6DC] text-[#1C1B18] border border-[#1C1B18]/10 shadow-soft-sm hover:border-[#d97706]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-extrabold text-[#1C1B18] uppercase tracking-wide">
                  02 · Custom Engineering Solution
                </h3>
                <span className="text-[10px] font-mono font-bold text-[#b45309] bg-[#d97706]/10 px-2 py-0.5 rounded">
                  12x N-Type TOPCon Panels
                </span>
              </div>
              <p className="text-xs text-[#5A564A] leading-relaxed font-normal">
                Engineered custom Hot-Dip Galvanized (HDG) elevated mount structure above tiles, clearing shadows. Installed high-efficiency dual-MPPT solar inverter for optimal morning & evening yield.
              </p>
            </motion.div>

            {/* 03: Verified Outcome */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#E9E6DC] text-[#1C1B18] border border-[#059669]/30 shadow-soft-sm hover:border-[#059669] transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-extrabold text-[#059669] uppercase tracking-wide">
                  03 · Verified Energy Outcome
                </h3>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-500/15 px-2 py-0.5 rounded">
                  ₹280 Current KSEB Bill
                </span>
              </div>
              <p className="text-xs text-[#5A564A] leading-relaxed font-normal">
                Generates an average 27–31 units daily. Bi-monthly KSEB bills plummeted from ₹14,200 to basic meter rent of ₹280. Customer received complete ₹78,000 PM Surya subsidy in bank account.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
