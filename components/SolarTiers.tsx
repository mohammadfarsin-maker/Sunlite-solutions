'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOLAR_TIERS, SolarTier } from '../data/solarData';
import { Zap, CheckCircle2, ArrowRight, Battery, Cpu, Home, ShieldCheck } from 'lucide-react';

interface ServicesSectionProps {
  onSelectTier: (tier: SolarTier) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const services = [
    { num: '01', title: 'Residential Solar', desc: 'Rooftop solar systems designed around home electricity usage, roof area and site conditions.', href: '/solutions/residential-solar', featured: true, image: '/solar-solutions/Residential-Solar.jpeg' },
    { num: '02', title: 'Commercial Solar', desc: 'Solar solutions for offices, shops, institutions and other commercial properties.', href: '/solutions/commercial-solar', image: '/solar-solutions/commercial-solar.jpeg' },
    { num: '03', title: 'Industrial Solar', desc: 'Turnkey EPC solutions for larger rooftops and industrial electricity requirements.', href: '/solutions/industrial-solar', image: '/solar-solutions/industrial-solar.jpeg' },
    { num: '04', title: 'On-Grid Solar', desc: 'Grid-connected rooftop systems designed to reduce electricity purchases from the grid.', href: '/solutions/on-grid-solar', image: '/solar-solutions/On-Grid-Solar.jpeg' },
    { num: '05', title: 'Hybrid Solar', desc: 'Solar generation combined with battery backup for savings plus additional power resilience.', href: '/solutions/hybrid-solar', image: '/solar-solutions/hybrid.jpeg' },
    { num: '06', title: 'Off-Grid Solar', desc: 'Independent solar systems for locations or applications where grid availability, reliability or operating requirements call for a standalone design.', href: '/solutions/off-grid-solar', image: '/solar-solutions/off-grid-Solar.jpeg' },
    { num: '07', title: 'AMC & Monitoring', desc: 'Preventive maintenance, system checks, cleaning guidance and performance support after commissioning.', href: '/solar-amc', image: '/solar-solutions/monitoring.jpeg', isLast: true },
  ];

  return (
    <section id="services" className="py-28 bg-[#DCD9D1] border-t border-[#1C1B18]/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#d97706]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#e9680b] mb-4 block">
            Solar solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-[1.2] mb-6">
            One solar partner from planning to performance.
          </h2>
          <p className="text-base sm:text-lg text-[#5A564A] leading-relaxed font-normal">
            Solar is not one product. The right architecture depends on your electricity use, roof, grid connection, backup needs, operating hours and future loads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-3xl relative overflow-hidden border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg group ${s.isLast ? 'lg:col-span-1 lg:col-start-2' : ''
                } bg-[#E9E6DC] border-[#1C1B18]/10 hover:border-[#d97706]/40`}
            >
              {/* Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-[#1C1B18]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-[#ff8a1e] text-white font-black text-xs flex items-center justify-center shadow-soft-sm">
                  {s.num}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-[#1C1B18] mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-xs text-[#5A564A] leading-relaxed mb-6 font-normal">{s.desc}</p>
                </div>

                <a href={s.href} className="text-xs font-extrabold text-[#e9680b] hover:underline flex items-center gap-1.5 mt-auto group-hover:translate-x-0.5 transition-transform">
                  Explore →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SolarTiers: React.FC<ServicesSectionProps> = ({ onSelectTier }) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('3-5kw');

  const activeTier = SOLAR_TIERS.find((t) => t.id === selectedTierId) || SOLAR_TIERS[1];

  return (
    <section id="system-tiers" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#d97706]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#b45309] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-soft-sm hover:border-[#d97706]/40 transition-colors"
          >
            <Zap className="w-3.5 h-3.5" /> High Efficiency Solar Systems
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-[1.2] mb-6"
          >
            Engineered for Precision.{' '}
            <span className="text-gradient-amber block">Tailored for Every Home.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A] leading-relaxed font-normal"
          >
            Select from our Tier-1 monocrystalline N-Type TOPCon solar packages. All packages qualify for up to ₹78,000 Direct Govt Bank Subsidy.
          </motion.p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-14 p-2 rounded-2xl bg-[#DCD9D1] border border-[#1C1B18]/10 shadow-soft-sm">
          {SOLAR_TIERS.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTierId(tier.id)}
              className={`flex-1 min-w-[120px] py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 relative ${selectedTierId === tier.id
                ? 'text-[#E9E6DC]'
                : 'text-[#5A564A] hover:text-[#1C1B18]'
                }`}
            >
              {selectedTierId === tier.id && (
                <motion.div
                  layoutId="activeTierTab"
                  className="absolute inset-0 bg-[#1C1B18] rounded-xl -z-0 shadow-soft-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex flex-col items-center gap-0.5">
                <span>{tier.capacity}</span>
                <span className="text-[10px] opacity-80 font-medium">{tier.name}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Main Spec Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#DCD9D1] p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-[#1C1B18]/15 shadow-soft-md"
          >

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#1C1B18] text-[#E9E6DC] text-xs font-bold uppercase tracking-wider shadow-soft-sm">
                    {activeTier.capacity}
                  </span>
                  {activeTier.badge && (
                    <span className="px-3.5 py-1 rounded-full bg-[#059669]/15 text-[#059669] text-xs font-bold border border-[#059669]/20">
                      {activeTier.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1C1B18] mb-2 tracking-tight">
                  {activeTier.name} Solar Package
                </h3>
                <p className="text-sm text-[#5A564A] flex items-center gap-2 font-medium">
                  <Home className="w-4 h-4 text-[#d97706]" /> Recommended for: {activeTier.recommendedFor}
                </p>
              </div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#E9E6DC] border border-[#1C1B18]/10 shadow-soft-sm">
                <div>
                  <p className="text-[11px] text-[#7E7A6C] uppercase tracking-wider font-mono font-semibold">Retail Price</p>
                  <p className="text-lg font-bold text-[#7E7A6C] line-through">
                    ₹{activeTier.priceRaw.toLocaleString('en-IN')}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#059669] uppercase tracking-wider font-mono font-semibold">PM Surya Subsidy</p>
                  <p className="text-lg font-bold text-[#059669]">
                    -₹{activeTier.subsidyRaw.toLocaleString('en-IN')}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#b45309] uppercase tracking-wider font-mono font-semibold">Effective Cost</p>
                  <p className="text-2xl font-black text-[#b45309]">
                    ₹{activeTier.finalPriceRaw.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/10 shadow-soft-sm">
                  <p className="text-xs text-[#5A564A]">Daily Generation</p>
                  <p className="text-base font-bold text-[#1C1B18] mt-1">{activeTier.dailyGeneration}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/10 shadow-soft-sm">
                  <p className="text-xs text-[#5A564A]">Annual Savings</p>
                  <p className="text-base font-bold text-[#059669] mt-1">{activeTier.annualSavings}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/10 shadow-soft-sm">
                  <p className="text-xs text-[#5A564A]">Payback Period</p>
                  <p className="text-base font-bold text-[#b45309] mt-1">{activeTier.paybackPeriod}</p>
                </div>
              </div>

              {/* Hardware Details */}
              <div className="space-y-3 pt-4 border-t border-[#1C1B18]/10">
                <p className="text-xs font-mono font-bold uppercase text-[#b45309]">
                  Tier-1 Hardware Specifications
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#38362E] font-medium">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#d97706] flex-shrink-0" />
                    <span>Panels: {activeTier.specs.panelType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#d97706] flex-shrink-0" />
                    <span>Inverter: {activeTier.specs.inverterEfficiency}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Battery className="w-3.5 h-3.5 text-[#d97706] flex-shrink-0" />
                    <span>Storage: {activeTier.specs.batterySupport}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d97706] flex-shrink-0" />
                    <span>Warranty: {activeTier.specs.warranty}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#E9E6DC] p-6 rounded-2xl border border-[#1C1B18]/10 shadow-soft-sm">
              <div>
                <h4 className="text-sm font-bold text-[#1C1B18] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#d97706]" /> Supported Heavy Appliances
                </h4>
                <div className="space-y-3">
                  {activeTier.appliances.map((appliance) => (
                    <div
                      key={appliance}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#DCD9D1] border border-[#1C1B18]/10 text-xs font-semibold text-[#1C1B18]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                      <span>{appliance}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#DCD9D1] border border-[#1C1B18]/10 text-xs text-[#5A564A]">
                💡 <span className="font-bold text-[#1C1B18]">Required Roof Space:</span> {activeTier.roofArea} shade-free roof area.
              </div>

              <button
                onClick={() => onSelectTier(activeTier)}
                className="w-full py-4 rounded-full bg-[#1C1B18] text-[#E9E6DC] font-bold text-sm shadow-soft-md hover:bg-[#d97706] hover:text-white transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Select {activeTier.capacity} Package</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
