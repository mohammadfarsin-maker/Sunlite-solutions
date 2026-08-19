'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WHY_SOLAR_REASONS } from '../data/solarData';
import { Zap, CheckCircle2, AlertTriangle } from 'lucide-react';

export const WhySolar: React.FC = () => {
  const [comparisonYears, setComparisonYears] = useState<number>(10);

  const initialMonthlyBill = 6000;
  const annualGridCostYear1 = initialMonthlyBill * 12;

  let totalGridCost = 0;
  let currentYearGridCost = annualGridCostYear1;
  for (let i = 0; i < comparisonYears; i++) {
    totalGridCost += currentYearGridCost;
    currentYearGridCost *= 1.08;
  }

  const solarSystemInvestment = 207000;
  const solarSavings = totalGridCost - solarSystemInvestment;

  return (
    <section id="why-solar" className="py-28 relative bg-[#E9E6DC] border-t border-[#1C1B18]/10 overflow-hidden">
      {/* Subtle background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#d97706]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#b45309] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-soft-sm hover:border-[#d97706]/40 transition-colors"
          >
            <Zap className="w-3.5 h-3.5" /> Why Go Solar
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-[1.2] mb-6"
          >
            Stop Paying Utility Hikes.{' '}
            <span className="text-gradient-amber block">Own Your Power Asset.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A] leading-relaxed font-normal"
          >
            Electricity tariffs in Kerala increase by 8–12% every single year. Solar converts an endless monthly expense into a high-yielding financial asset backed by government subsidies.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {WHY_SOLAR_REASONS.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#DCD9D1] rounded-3xl relative overflow-hidden border border-[#1C1B18]/10 hover:border-[#d97706]/40 hover:shadow-soft-lg transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#1C1B18]">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#DCD9D1] via-transparent to-black/40" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#1C1B18]/80 backdrop-blur-md border border-white/20 text-[#ffb45d] text-xs font-bold shadow-soft-sm">
                    {reason.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 right-4 text-right">
                  <p className="text-2xl font-black text-[#1C1B18] drop-shadow-sm">
                    {reason.metric}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-[#38362E] font-mono font-bold">
                    {reason.metricLabel}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-[#1C1B18] mb-3 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#5A564A] leading-relaxed font-normal">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#DCD9D1] border border-[#1C1B18]/15 p-8 sm:p-12 shadow-soft-md"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b45309]">
                FINANCIAL ACCELERATOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1B18] mt-1">
                Grid Cost vs Solar Ownership
              </h3>
              <p className="text-xs sm:text-sm text-[#5A564A] mt-1">
                Assuming average ₹6,000/month bill with 8% annual utility inflation.
              </p>
            </div>

            {/* Selector */}
            <div className="flex items-center gap-2 bg-[#E9E6DC] p-2 rounded-2xl border border-[#1C1B18]/10">
              {[5, 10, 15, 30].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setComparisonYears(yr)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${comparisonYears === yr
                      ? 'bg-[#1C1B18] text-[#E9E6DC] shadow-md'
                      : 'text-[#5A564A] hover:text-[#1C1B18]'
                    }`}
                >
                  {yr} Years
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">

            {/* Grid Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-red-500/10 border border-red-500/20 flex flex-col justify-between shadow-soft-sm relative overflow-hidden group">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-red-700 text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" /> Traditional Power Grid
                </span>
                <span className="text-[10px] text-red-600 font-mono font-bold">Endless Expense</span>
              </div>

              {/* Main Content Split: Left Text, Right Graph */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-2">
                {/* Left Text */}
                <div className="flex-1">
                  <p className="text-3xl sm:text-4xl font-extrabold text-red-900 tracking-tight">
                    ₹{Math.round(totalGridCost).toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-[#5A564A] mt-2 leading-relaxed max-w-xs">
                    Total money paid to Kerala State Electricity Board (KSEB) with 8% tariff hikes over {comparisonYears} years.
                  </p>
                </div>

                {/* Right Graph (Matching Image 2 Grid Graph exactly) */}
                <div className="w-full sm:w-44 h-24 relative flex-shrink-0">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 160 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gridRedGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#dc2626" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#dc2626" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 65 L 32 60 L 64 50 L 96 45 L 128 32 L 160 10 L 160 80 L 0 80 Z"
                      fill="url(#gridRedGrad)"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      d="M 0 65 L 32 60 L 64 50 L 96 45 L 128 32 L 160 10"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {[
                      { cx: 0, cy: 65 },
                      { cx: 32, cy: 60 },
                      { cx: 64, cy: 50 },
                      { cx: 96, cy: 45 },
                      { cx: 128, cy: 32 },
                      { cx: 160, cy: 10 }
                    ].map((pt, idx) => (
                      <circle key={idx} cx={pt.cx} cy={pt.cy} r="3.5" fill="#dc2626" />
                    ))}
                  </svg>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="pt-4 mt-4 border-t border-red-500/20 text-xs text-red-800 font-medium">
                ⚠️ 0% Equity built | Constant threat of power cuts & price surges.
              </div>
            </div>

            {/* Solar Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col justify-between shadow-soft-sm relative overflow-hidden group">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" /> Sunlite Solar Asset
                </span>
                <span className="text-[10px] text-emerald-700 font-mono font-bold">Net Wealth Generator</span>
              </div>

              {/* Main Content Split: Left Text, Right Graph */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-2">
                {/* Left Text */}
                <div className="flex-1">
                  <p className="text-3xl sm:text-4xl font-extrabold text-emerald-900 tracking-tight">
                    +₹{Math.round(solarSavings > 0 ? solarSavings : 0).toLocaleString('en-IN')}
                  </p>
                  <p className="text-xs text-[#5A564A] mt-2 leading-relaxed max-w-xs">
                    Net wealth saved in your pocket after recovering system cost!
                  </p>
                </div>

                {/* Right Graph (Matching Image 2 Solar Graph exactly) */}
                <div className="w-full sm:w-44 h-24 relative flex-shrink-0">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 160 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="solarGreenGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#059669" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 65 L 32 60 L 64 48 L 96 42 L 128 28 L 160 8 L 160 80 L 0 80 Z"
                      fill="url(#solarGreenGrad)"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      d="M 0 65 L 32 60 L 64 48 L 96 42 L 128 28 L 160 8"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {[
                      { cx: 0, cy: 65 },
                      { cx: 32, cy: 60 },
                      { cx: 64, cy: 48 },
                      { cx: 96, cy: 42 },
                      { cx: 128, cy: 28 },
                      { cx: 160, cy: 8 }
                    ].map((pt, idx) => (
                      <circle key={idx} cx={pt.cx} cy={pt.cy} r="3.5" fill="#059669" />
                    ))}
                  </svg>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="pt-4 mt-4 border-t border-emerald-500/20 text-xs text-emerald-900 flex items-center justify-between font-medium">
                <span>✅ Guaranteed ₹0 Electricity Bill</span>
                <span className="font-bold text-[#b45309]">30-Yr Asset</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
