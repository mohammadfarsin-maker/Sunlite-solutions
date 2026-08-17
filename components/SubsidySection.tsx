'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

export const SubsidySection: React.FC = () => {
  return (
    <section id="subsidy" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#e9680b] text-xs font-mono font-bold uppercase tracking-widest shadow-sm"
            >
              <Award className="w-3.5 h-3.5" /> Government Support
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight"
            >
              Understand your solar subsidy before you invest.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-[#5A564A]"
            >
              The well-known PM Surya Ghar residential CFA structure has been ₹30,000/kW for the first 2 kW plus ₹18,000/kW for the next kW, with the central contribution capped at ₹78,000 for systems above 3 kW. Treat these as reference figures for the prototype: scheme status, eligibility, portal rules and the applicable amount must be checked at the time of application.
            </motion.p>

            {/* Subsidy Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-5 rounded-2xl bg-[#DCD9D1] border border-[#1C1B18]/10 text-center">
                <small className="text-xs text-[#5A564A] block">1 kW</small>
                <strong className="text-xl sm:text-2xl font-black text-[#1C1B18] block mt-1">₹30,000*</strong>
              </div>

              <div className="p-5 rounded-2xl bg-[#DCD9D1] border border-[#1C1B18]/10 text-center">
                <small className="text-xs text-[#5A564A] block">2 kW</small>
                <strong className="text-xl sm:text-2xl font-black text-[#1C1B18] block mt-1">₹60,000*</strong>
              </div>

              <div className="p-5 rounded-2xl bg-[#DCD9D1] border border-[#1C1B18]/10 text-center">
                <small className="text-xs text-[#5A564A] block">3 kW+</small>
                <strong className="text-xl sm:text-2xl font-black text-[#e9680b] block mt-1">Up to ₹78,000*</strong>
              </div>
            </div>

            <p className="text-[11px] text-[#7E7A6C] leading-relaxed pt-2">
              Research reviewed Aug 2026 · *Reference CFA structure for design stage. MNRE guidance and the live application portal should control the final published amount and eligibility. Commercial/industrial systems do not automatically qualify for the same residential CFA.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff8a1e] to-[#e9680b] text-white font-bold text-xs shadow-md hover:scale-105 transition-all"
            >
              <span>Check My Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Visual Journey */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#fff1d8] to-[#e7f2ed] p-8 sm:p-10 rounded-3xl border border-[#1C1B18]/10 shadow-lg relative overflow-hidden">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#087c78]">
              Customer journey
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1B18] mt-2 mb-6">
              Make the paperwork feel simple.
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/70 border border-white/90 shadow-xs">
                <b className="w-8 h-8 rounded-full bg-[#1C1B18] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">01</b>
                <div>
                  <b className="text-sm font-bold text-[#1C1B18] block">Eligibility check</b>
                  <span className="text-xs text-[#5A564A] block">Understand whether the customer may qualify.</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/70 border border-white/90 shadow-xs">
                <b className="w-8 h-8 rounded-full bg-[#1C1B18] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">02</b>
                <div>
                  <b className="text-sm font-bold text-[#1C1B18] block">Application support</b>
                  <span className="text-xs text-[#5A564A] block">Guide the customer through required documentation.</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/70 border border-white/90 shadow-xs">
                <b className="w-8 h-8 rounded-full bg-[#1C1B18] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">03</b>
                <div>
                  <b className="text-sm font-bold text-[#1C1B18] block">Installation & process</b>
                  <span className="text-xs text-[#5A564A] block">Coordinate the next project steps.</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/70 border border-white/90 shadow-xs">
                <b className="w-8 h-8 rounded-full bg-[#1C1B18] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">04</b>
                <div>
                  <b className="text-sm font-bold text-[#1C1B18] block">Verification & completion</b>
                  <span className="text-xs text-[#5A564A] block">Testing, documentation and final processing follow the applicable utility and scheme workflow.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
