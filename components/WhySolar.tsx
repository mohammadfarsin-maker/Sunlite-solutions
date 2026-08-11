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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#b45309] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5" /> Why Go Solar
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight mb-6"
          >
            Stop Paying Utility Hikes.{' '}
            <span className="text-gradient-amber block">Own Your Power Asset.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A]"
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
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#DCD9D1] p-8 rounded-3xl relative overflow-hidden border border-[#1C1B18]/10 hover:border-[#d97706]/40 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#E9E6DC] border border-[#1C1B18]/10 text-[#b45309] text-xs font-bold">
                  {reason.tag}
                </span>
                <div className="text-right">
                  <p className="text-2xl font-black text-[#1C1B18] group-hover:text-[#d97706] transition-colors">
                    {reason.metric}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-[#7E7A6C] font-mono font-semibold">
                    {reason.metricLabel}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1C1B18] mb-3 leading-snug">
                {reason.title}
              </h3>
              <p className="text-sm text-[#5A564A] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#DCD9D1] border border-[#1C1B18]/15 p-8 sm:p-12 shadow-sm"
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
              {[5, 10, 15, 25].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setComparisonYears(yr)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    comparisonYears === yr
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
            
            {/* Grid */}
            <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-red-700 text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" /> Traditional Power Grid
                  </span>
                  <span className="text-[10px] text-red-600 font-mono font-bold">Endless Expense</span>
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-red-900">
                  ₹{Math.round(totalGridCost).toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-[#5A564A] mt-1">
                  Total money paid to Kerala State Electricity Board (KSEB) with 8% tariff hikes over {comparisonYears} years.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-red-500/20 text-xs text-red-800 font-medium">
                ⚠️ 0% Equity built | Constant threat of power cuts & price surges.
              </div>
            </div>

            {/* Solar */}
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" /> Helios Solar Asset
                  </span>
                  <span className="text-[10px] text-emerald-700 font-mono font-bold">Net Wealth Generator</span>
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-emerald-900">
                  +₹{Math.round(solarSavings > 0 ? solarSavings : 0).toLocaleString('en-IN')}
                </p>
                <p className="text-xs text-[#5A564A] mt-1">
                  Net wealth saved in your pocket after recovering system cost!
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-emerald-500/20 text-xs text-emerald-900 flex items-center justify-between font-medium">
                <span>✅ Guaranteed ₹0 Electricity Bill</span>
                <span className="font-bold text-[#b45309]">25-Yr Asset</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
