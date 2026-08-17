'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FeaturedCaseStudySection: React.FC = () => {
  return (
    <section id="case-study" className="py-28 bg-[#101821] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffb45d] block mb-3">
            Featured project story
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Turn installations into evidence, not decoration.
          </h2>
          <p className="text-sm sm:text-base text-[#aab5bd]">
            The production site should publish real project stories with photos, system design, customer objective, installation scope and measured outcomes. The structure below is ready for verified data.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Card */}
          <div className="lg:col-span-7 bg-[#17232e] p-8 sm:p-10 rounded-3xl border border-[#2a3945] flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#ff8a1e]/20 text-[#ffb45d] text-[10px] font-mono font-bold uppercase tracking-wider mb-6">
                CASE STUDY · REPLACE WITH VERIFIED PROJECT
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                A residential rooftop planned around real electricity use.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Replace this narrative with a genuine Sunlite installation. The strongest case studies explain the customer's starting problem, the site constraints, why the system was sized the way it was, what was installed and what changed after commissioning.
              </p>

              {/* Meta */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="p-4 rounded-2xl bg-[#101821] border border-[#2a3945]">
                  <small className="block text-[10px] text-[#8f9ca5] font-mono">Location</small>
                  <strong className="block text-sm font-bold text-white mt-1">Chingavanam, Kottayam*</strong>
                </div>

                <div className="p-4 rounded-2xl bg-[#101821] border border-[#2a3945]">
                  <small className="block text-[10px] text-[#8f9ca5] font-mono">System</small>
                  <strong className="block text-sm font-bold text-white mt-1">5 kW on-grid*</strong>
                </div>

                <div className="p-4 rounded-2xl bg-[#101821] border border-[#2a3945]">
                  <small className="block text-[10px] text-[#8f9ca5] font-mono">Objective</small>
                  <strong className="block text-sm font-bold text-[#ffb45d] mt-1">Bill reduction*</strong>
                </div>
              </div>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#ff8a1e] to-[#e9680b] text-white font-bold text-xs shadow-md hover:scale-105 transition-all w-fit"
            >
              <span>View project stories</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Side Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#E9E6DC] text-[#1C1B18] border border-[#1C1B18]/10 shadow-md">
              <h3 className="text-base font-extrabold text-[#1C1B18] mb-2">01 · Customer problem</h3>
              <p className="text-xs text-[#5A564A] leading-relaxed">
                Document the electricity bill pattern, property type, operating hours, pain points and reason the customer considered solar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#E9E6DC] text-[#1C1B18] border border-[#1C1B18]/10 shadow-md">
              <h3 className="text-base font-extrabold text-[#1C1B18] mb-2">02 · Engineering decision</h3>
              <p className="text-xs text-[#5A564A] leading-relaxed">
                Show the roof constraints, system architecture, capacity rationale, inverter/module approach and any backup or future-load consideration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#E9E6DC] text-[#1C1B18] border border-[#1C1B18]/10 shadow-md">
              <h3 className="text-base font-extrabold text-[#1C1B18] mb-2">03 · Verified outcome</h3>
              <p className="text-xs text-[#5A564A] leading-relaxed">
                Publish measured or documented generation, bill impact, commissioning date and customer feedback only when the evidence is available.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
