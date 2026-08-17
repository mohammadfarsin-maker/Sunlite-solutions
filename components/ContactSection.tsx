'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="contact" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-[#101821] to-[#1a2a32] p-8 sm:p-14 rounded-3xl text-white relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffb45d]">
                Get started
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Let's see whether solar makes sense for your property.
              </h2>
              <p className="text-sm text-[#aab5bd] leading-relaxed">
                Book a site assessment or ask the Sunlite team to review your electricity use, roof suitability, system architecture, subsidy pathway and installation requirements.
              </p>
              <p className="text-sm font-bold text-white flex items-center gap-2 pt-2">
                <Phone className="w-4 h-4 text-[#ff8a1e]" /> +91 94473 05489 · WhatsApp available
              </p>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              <form onSubmit={(e) => { e.preventDefault(); onOpenQuoteModal(); }} className="bg-[#1c2a35] p-6 rounded-2xl border border-[#2f414e] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full p-3 rounded-xl bg-[#14212b] border border-[#3a4a55] text-xs text-white placeholder-slate-400 outline-none focus:border-[#ff8a1e]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="w-full p-3 rounded-xl bg-[#14212b] border border-[#3a4a55] text-xs text-white placeholder-slate-400 outline-none focus:border-[#ff8a1e]"
                  />
                </div>

                <input
                  type="text"
                  placeholder="City / district"
                  required
                  className="w-full p-3 rounded-xl bg-[#14212b] border border-[#3a4a55] text-xs text-white placeholder-slate-400 outline-none focus:border-[#ff8a1e]"
                />

                <select className="w-full p-3 rounded-xl bg-[#14212b] border border-[#3a4a55] text-xs text-white outline-none focus:border-[#ff8a1e]">
                  <option className="bg-[#101821]">Residential solar</option>
                  <option className="bg-[#101821]">Commercial solar</option>
                  <option className="bg-[#101821]">Industrial solar</option>
                  <option className="bg-[#101821]">Not sure — help me choose</option>
                </select>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#ff8a1e] to-[#e9680b] text-white font-bold text-xs shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <span>Request Free Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
