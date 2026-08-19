'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Factory, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, HelpCircle } from 'lucide-react';

interface SolarAdvisorProps {
  onOpenQuoteModal: () => void;
}

export const SolarAdvisorSection: React.FC<SolarAdvisorProps> = ({ onOpenQuoteModal }) => {
  const [activePersona, setActivePersona] = useState<'home' | 'business' | 'industry'>('home');
  const [monthlyBill, setMonthlyBill] = useState<number>(6000);
  const [location, setLocation] = useState<string>('Kottayam');

  const personaData = {
    home: {
      eyebrow: 'Residential Solar Advisor',
      title: 'Precision solar tailored for your home.',
      copy: 'Eliminate monthly power bills and protect your household from rising Kerala electricity tariffs. Eligible for up to ₹78,000 Direct PM Surya Ghar Govt Subsidy.',
      kw: monthlyBill < 5000 ? '1–3 kW' : monthlyBill < 10000 ? '3–5 kW' : monthlyBill < 18000 ? '5–8 kW' : '8–15 kW+',
      goal: 'Zero Electric Bill',
      subsidy: 'Up to ₹78,000',
      payback: '3.2 – 3.8 Years',
      icon: Home,
      tag: 'Residential Tier-1',
    },
    business: {
      eyebrow: 'Commercial Solar Advisor',
      title: 'Slash operating expenses for your enterprise.',
      copy: 'For offices, hospitals, retail showrooms, and institutions. Accelerate business depreciation benefits up to 40% while slashing peak daytime grid tariffs.',
      kw: monthlyBill < 20000 ? '10–20 kW' : monthlyBill < 50000 ? '20–50 kW' : '50–100 kW+',
      goal: 'Operating Cost Reduction',
      subsidy: '40% Tax Depreciation',
      payback: '2.8 – 3.4 Years',
      icon: Building2,
      tag: 'Commercial High-Yield',
    },
    industry: {
      eyebrow: 'Industrial EPC Advisor',
      title: 'High-capacity turnkey EPC solar power.',
      copy: 'Engineered for factories, processing units, cold storages, and heavy industrial loads. Optimized HT line integration, high MTBF inverters, and power-factor correction.',
      kw: '50 kW – 500 kW+',
      goal: 'Turnkey EPC Architecture',
      subsidy: 'Industrial Tax Incentives',
      payback: '2.5 – 3.2 Years',
      icon: Factory,
      tag: 'Heavy Industrial EPC',
    },
  };

  const current = personaData[activePersona];

  return (
    <section id="assessment" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#d97706]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#b45309] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-soft-sm hover:border-[#d97706]/40 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" /> Interactive Solar Advisor
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-[1.2] mb-6"
          >
            Start with your property, <span className="text-gradient-amber">not a generic product.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A] leading-relaxed font-normal"
          >
            Select your property category below to see recommended system capacity, payback horizon, and government financial benefits.
          </motion.p>
        </div>

        {/* Advisor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Persona Selector Tabs & Trust Summary (Eliminating dead empty space) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">

            {/* Persona Tabs */}
            <div className="flex flex-col gap-3">
              {[
                {
                  id: 'home',
                  name: 'Residential Solar',
                  subtext: 'Homes, villas & apartments',
                  badge: 'PM Surya Scheme',
                  icon: Home,
                },
                {
                  id: 'business',
                  name: 'Commercial Solar',
                  subtext: 'Offices, clinics & commercial buildings',
                  badge: 'Tax Depreciation',
                  icon: Building2,
                },
                {
                  id: 'industry',
                  name: 'Industrial Solar',
                  subtext: 'Factories, warehouses & EPC plants',
                  badge: 'HT / LT Turnkey',
                  icon: Factory,
                },
              ].map((p) => {
                const Icon = p.icon;
                const isActive = activePersona === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePersona(p.id as 'home' | 'business' | 'industry')}
                    className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden ${isActive
                        ? 'bg-[#DCD9D1] border-[#d97706] shadow-soft-md scale-[1.02]'
                        : 'bg-[#E9E6DC] border-[#1C1B18]/10 hover:bg-[#DCD9D1]/70 hover:border-[#1C1B18]/20'
                      }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d97706] rounded-r-full" />
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-[#1C1B18] text-[#ffb45d] shadow-sm' : 'bg-[#DCD9D1] text-[#38362E] group-hover:bg-[#1C1B18] group-hover:text-[#ffb45d]'
                          }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <b className="block text-sm sm:text-base font-extrabold text-[#1C1B18] leading-tight">
                            {p.name}
                          </b>
                          <span className="block text-[11px] text-[#5A564A] font-medium mt-0.5">
                            {p.subtext}
                          </span>
                        </div>
                      </div>

                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${isActive ? 'bg-[#059669]/15 text-[#059669] border border-[#059669]/30' : 'bg-[#1C1B18]/5 text-[#7E7A6C]'
                        }`}>
                        {p.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Assessment Inclusions Card (Fills height seamlessly with high-value info) */}
            <div className="p-5 rounded-2xl bg-[#DCD9D1] border border-[#1C1B18]/10 shadow-soft-sm">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1B18]">
                  Free Advisor Survey Includes
                </span>
              </div>
              <ul className="space-y-2 text-xs text-[#38362E] font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] flex-shrink-0" />
                  <span>KSEB Net-Meter Feasibility Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] flex-shrink-0" />
                  <span>PM Surya Ghar Direct Subsidy Processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] flex-shrink-0" />
                  <span>Zero-Pressure 30-Year Engineering Proposal</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Dynamic Interactive Recommendation Panel */}
          <div className="lg:col-span-8 bg-[#1C1B18] p-7 sm:p-10 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between shadow-soft-lg border border-white/10">

            {/* Subtle glow in card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#d97706]/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activePersona}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#ffb45d] text-xs font-mono font-bold tracking-wider uppercase">
                    <Zap className="w-3 h-3 text-[#ff8a1e]" />
                    {current.eyebrow}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Category: <strong className="text-slate-200">{current.tag}</strong>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
                  {current.copy}
                </p>

                {/* KPI Metrics Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <small className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Recommended Capacity</small>
                    <strong className="block text-xl font-extrabold text-white mt-1">{current.kw}</strong>
                    <span className="text-[10px] text-slate-400 font-medium">Tailored for site load</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <small className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Financial Incentive</small>
                    <strong className="block text-xl font-extrabold text-[#059669] mt-1">{current.subsidy}</strong>
                    <span className="text-[10px] text-slate-400 font-medium">Govt scheme / Tax credit</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <small className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Estimated Payback</small>
                    <strong className="block text-xl font-extrabold text-[#ffb45d] mt-1">{current.payback}</strong>
                    <span className="text-[10px] text-slate-400 font-medium">Pure profit thereafter</span>
                  </div>
                </div>

                {/* Interactive Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  {/* Slider Control */}
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-[11px] text-slate-300 font-mono font-semibold">Average Monthly Electricity Bill</label>
                      <span className="text-sm font-mono font-extrabold text-[#ffb45d]">
                        ₹{monthlyBill.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={2000}
                      max={activePersona === 'home' ? 30000 : 100000}
                      step={500}
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      className="w-full h-2 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#ff8a1e]"
                    />
                    <div className="flex justify-between text-[9px] text-slate-400 font-mono mt-1">
                      <span>₹2,000</span>
                      <span>₹{activePersona === 'home' ? '15,000' : '50,000'}</span>
                      <span>₹{activePersona === 'home' ? '30,000+' : '1,00,000+'}</span>
                    </div>
                  </div>

                  {/* Location Selector */}
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                    <label className="block text-[11px] text-slate-300 font-mono font-semibold mb-2">
                      Installation District in Kerala
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-[#1C1B18] border border-white/15 rounded-xl px-3 py-2 text-white font-bold text-xs outline-none cursor-pointer focus:border-[#ff8a1e] transition-colors"
                    >
                      <option value="Kottayam">Kottayam (Fastest Dispatch · Central HQ)</option>
                      <option value="Ernakulam">Ernakulam / Kochi</option>
                      <option value="Alappuzha">Alappuzha</option>
                      <option value="Idukki">Idukki</option>
                      <option value="Pathanamthitta">Pathanamthitta</option>
                      <option value="Thrissur">Thrissur</option>
                      <option value="Kollam">Kollam</option>
                      <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                      <option value="Other">Other District in Kerala</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom CTA Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="text-xs text-slate-300 text-center sm:text-left">
                <span className="font-bold text-white">Ready for a site-specific design?</span>
                <p className="text-[11px] text-slate-400">Our senior solar engineer will survey your site in {location}.</p>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ff8a1e] to-[#e9680b] text-white font-bold text-xs shadow-soft-lg hover:scale-[1.03] transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 flex-shrink-0"
              >
                <span>Get My Exact Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
