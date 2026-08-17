'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Factory, Sparkles, ArrowRight } from 'lucide-react';

interface SolarAdvisorProps {
  onOpenQuoteModal: () => void;
}

export const SolarAdvisorSection: React.FC<SolarAdvisorProps> = ({ onOpenQuoteModal }) => {
  const [activePersona, setActivePersona] = useState<'home' | 'business' | 'industry'>('home');
  const [monthlyBill, setMonthlyBill] = useState<number>(6000);
  const [location, setLocation] = useState<string>('Kottayam');

  const personaData = {
    home: {
      eyebrow: 'Preliminary recommendation',
      title: 'A starting point for your home.',
      copy: 'Tell us your monthly bill and we can estimate a starting system range. Final sizing requires a site assessment.',
      kw: monthlyBill < 5000 ? '2–3 kW' : monthlyBill < 10000 ? '3–5 kW' : monthlyBill < 18000 ? '5–8 kW' : '8 kW+',
      goal: 'Bill reduction',
    },
    business: {
      eyebrow: 'Commercial recommendation',
      title: 'Build a business case for solar.',
      copy: 'For commercial properties, the production flow should capture operating hours, sanctioned load, roof area and business electricity usage.',
      kw: '10–50+ kW',
      goal: 'Operating cost',
    },
    industry: {
      eyebrow: 'Industrial recommendation',
      title: 'Start with your engineering requirement.',
      copy: 'For larger EPC opportunities, the production flow should collect load profile, roof/land area, sanctioned load and project timeline.',
      kw: '50 kW+',
      goal: 'EPC solution',
    },
  };

  const current = personaData[activePersona];

  return (
    <section id="assessment" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#e9680b] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" /> Interactive Solar Advisor
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight mb-6"
          >
            Start with your property, not a product.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A]"
          >
            Choose your goal and explore a preliminary solar recommendation. The production version should connect this flow to a proper lead form and verified calculation engine.
          </motion.p>
        </div>

        {/* Advisor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Persona Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => setActivePersona('home')}
              className={`p-6 rounded-2xl border text-left transition-all ${
                activePersona === 'home'
                  ? 'bg-[#DCD9D1] border-[#ff8a1e] shadow-md translate-x-1'
                  : 'bg-[#E9E6DC] border-[#1C1B18]/10 hover:bg-[#DCD9D1]/50'
              }`}
            >
              <b className="flex items-center gap-2 text-base font-extrabold text-[#1C1B18]">
                <Home className="w-5 h-5 text-[#ff8a1e]" /> 🏠 My Home
              </b>
              <span className="block text-xs text-[#5A564A] mt-1">Reduce household electricity costs</span>
            </button>

            <button
              onClick={() => setActivePersona('business')}
              className={`p-6 rounded-2xl border text-left transition-all ${
                activePersona === 'business'
                  ? 'bg-[#DCD9D1] border-[#ff8a1e] shadow-md translate-x-1'
                  : 'bg-[#E9E6DC] border-[#1C1B18]/10 hover:bg-[#DCD9D1]/50'
              }`}
            >
              <b className="flex items-center gap-2 text-base font-extrabold text-[#1C1B18]">
                <Building2 className="w-5 h-5 text-[#ff8a1e]" /> 🏢 My Business
              </b>
              <span className="block text-xs text-[#5A564A] mt-1">Reduce operating electricity costs</span>
            </button>

            <button
              onClick={() => setActivePersona('industry')}
              className={`p-6 rounded-2xl border text-left transition-all ${
                activePersona === 'industry'
                  ? 'bg-[#DCD9D1] border-[#ff8a1e] shadow-md translate-x-1'
                  : 'bg-[#E9E6DC] border-[#1C1B18]/10 hover:bg-[#DCD9D1]/50'
              }`}
            >
              <b className="flex items-center gap-2 text-base font-extrabold text-[#1C1B18]">
                <Factory className="w-5 h-5 text-[#ff8a1e]" /> 🏭 My Industry
              </b>
              <span className="block text-xs text-[#5A564A] mt-1">Explore larger EPC requirements</span>
            </button>
          </div>

          {/* Persona Panel */}
          <div className="lg:col-span-8 bg-[#101821] p-8 sm:p-10 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffb45d]">
                {current.eyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-3">
                {current.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                {current.copy}
              </p>

              {/* Chips */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="p-4 rounded-2xl bg-[#17232e] border border-[#2d3a45]">
                  <small className="block text-[10px] text-[#8f9ba7] font-mono">Indicative system</small>
                  <strong className="block text-lg font-bold text-white mt-1">{current.kw}</strong>
                </div>

                <div className="p-4 rounded-2xl bg-[#17232e] border border-[#2d3a45]">
                  <small className="block text-[10px] text-[#8f9ba7] font-mono">Primary goal</small>
                  <strong className="block text-lg font-bold text-white mt-1">{current.goal}</strong>
                </div>

                <div className="p-4 rounded-2xl bg-[#17232e] border border-[#2d3a45]">
                  <small className="block text-[10px] text-[#8f9ba7] font-mono">Next step</small>
                  <strong className="block text-lg font-bold text-[#ffb45d] mt-1">Site survey</strong>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#1b2833] border border-[#2d3a45]">
                  <label className="block text-[10px] text-[#9aa6b1] font-mono mb-2">Monthly electricity bill</label>
                  <input
                    type="range"
                    min={2000}
                    max={30000}
                    step={500}
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full accent-[#ff8a1e] cursor-pointer"
                  />
                  <span className="block text-sm font-mono font-bold text-[#ff8a1e] mt-2">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#1b2833] border border-[#2d3a45]">
                  <label className="block text-[10px] text-[#9aa6b1] font-mono mb-2">Property location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent text-white font-bold text-sm outline-none cursor-pointer"
                  >
                    <option className="bg-[#101821] text-white">Kottayam</option>
                    <option className="bg-[#101821] text-white">Ernakulam</option>
                    <option className="bg-[#101821] text-white">Alappuzha</option>
                    <option className="bg-[#101821] text-white">Idukki</option>
                    <option className="bg-[#101821] text-white">Pathanamthitta</option>
                    <option className="bg-[#101821] text-white">Other Kerala location</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ff8a1e] to-[#e9680b] text-white font-bold text-xs shadow-lg hover:scale-105 transition-all flex items-center gap-2"
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
