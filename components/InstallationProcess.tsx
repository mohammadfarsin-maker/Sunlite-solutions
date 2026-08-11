'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INSTALLATION_STEPS } from '../data/solarData';
import { Scan, FileCheck, Wrench, Zap, CheckCircle2, ArrowRight, Shield, Clock } from 'lucide-react';

export const InstallationProcess: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scan':
        return <Scan className="w-6 h-6" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="process" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#b45309] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Clock className="w-3.5 h-3.5" /> Turnkey Seamless Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight mb-6"
          >
            From Solar Design to Activation{' '}
            <span className="text-gradient-amber block">In 4 Easy Steps.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A]"
          >
            We manage 100% of engineering, DISCOM approvals, structural mounting, and PM Surya Ghar subsidy claims.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Step Selectors */}
          <div className="lg:col-span-5 space-y-4">
            {INSTALLATION_STEPS.map((step, idx) => {
              const isActive = activeStepIdx === idx;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#DCD9D1] border-[#1C1B18]/30 shadow-md'
                      : 'bg-[#E9E6DC] border-[#1C1B18]/10 hover:bg-[#DCD9D1]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-[#1C1B18] text-[#E9E6DC]'
                            : 'bg-[#DCD9D1] text-[#d97706] border border-[#1C1B18]/10'
                        }`}
                      >
                        {getStepIcon(step.icon)}
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#7E7A6C] font-bold">
                          Step {step.step} • {step.duration}
                        </span>
                        <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-[#1C1B18]' : 'text-[#5A564A]'}`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-3.5 h-3.5 rounded-full border ${
                        isActive ? 'bg-[#d97706] border-[#d97706]' : 'border-[#A6A192]'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStepIdx}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-[#DCD9D1] p-8 sm:p-12 rounded-3xl flex flex-col justify-between border border-[#1C1B18]/15 shadow-sm relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="px-4 py-1.5 rounded-full bg-[#1C1B18] text-[#E9E6DC] font-mono text-xs font-bold">
                  STAGE {INSTALLATION_STEPS[activeStepIdx].step} OF 04
                </span>
                <span className="text-xs font-mono text-[#5A564A] font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#d97706]" /> Duration: {INSTALLATION_STEPS[activeStepIdx].duration}
                </span>
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b45309]">
                {INSTALLATION_STEPS[activeStepIdx].subtitle}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1C1B18] mt-1 mb-6">
                {INSTALLATION_STEPS[activeStepIdx].title}
              </h3>

              <p className="text-base text-[#5A564A] leading-relaxed mb-8">
                {INSTALLATION_STEPS[activeStepIdx].description}
              </p>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#E9E6DC] border border-[#1C1B18]/10">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#059669] flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-[#1C1B18]">Full Safety & Rigging Shield</p>
                    <p className="text-[10px] text-[#5A564A]">Structure certified up to 170 km/h wind loads</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b45309] flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-[#1C1B18]">100% Paperwork Managed</p>
                    <p className="text-[10px] text-[#5A564A]">DISCOM net-metering & PM Surya subsidy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#1C1B18]/10 flex items-center justify-between mt-8">
              <button
                onClick={() => setActiveStepIdx((prev) => (prev + 1) % INSTALLATION_STEPS.length)}
                className="text-xs text-[#d97706] font-bold hover:underline flex items-center gap-2"
              >
                <span>Next Step: {INSTALLATION_STEPS[(activeStepIdx + 1) % INSTALLATION_STEPS.length].title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs font-mono text-[#7E7A6C] font-semibold">Helios Turnkey Guarantee</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
