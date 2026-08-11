'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#DCD9D1] border-t border-[#1C1B18]/15 pt-20 pb-12 relative overflow-hidden text-[#5A564A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1C1B18]/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center group">
              <img 
                src="/images/logo-icon.png" 
                alt="Sunlite Solutions" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <p className="text-xs text-[#5A564A] leading-relaxed max-w-sm">
              Empowering India with next-generation Tier-1 TOPCon solar technology. 25-Year performance guarantees, PM Surya Ghar govt subsidies, and zero electricity bill independence.
            </p>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E9E6DC] border border-[#1C1B18]/10 text-[11px] font-mono text-[#059669] font-bold w-fit">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
              <span>Pan-India Grid Telemetry: 100% Operational</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#1C1B18] font-extrabold">
              Navigation & Systems
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#why-solar" className="hover:text-[#d97706] transition-colors flex items-center gap-1 font-medium">
                  Why Go Solar in India <ArrowUpRight className="w-3 h-3 text-[#7E7A6C]" />
                </a>
              </li>
              <li>
                <a href="#system-tiers" className="hover:text-[#d97706] transition-colors flex items-center gap-1 font-medium">
                  3kW, 5kW, 8kW & 12kW Specs <ArrowUpRight className="w-3 h-3 text-[#7E7A6C]" />
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#d97706] transition-colors flex items-center gap-1 font-medium">
                  25-Year ROI & Profit Calculator <ArrowUpRight className="w-3 h-3 text-[#7E7A6C]" />
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#d97706] transition-colors flex items-center gap-1 font-medium">
                  4-Step Installation Workflow <ArrowUpRight className="w-3 h-3 text-[#7E7A6C]" />
                </a>
              </li>
              <li>
                <a href="#company" className="hover:text-[#d97706] transition-colors flex items-center gap-1 font-medium">
                  Company & Warranty Credentials <ArrowUpRight className="w-3 h-3 text-[#7E7A6C]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Govt Scheme */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#1C1B18] font-extrabold">
              Central Govt Scheme
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5A564A] font-medium">
              <li>PM Surya Ghar Muft Bijli Yojana</li>
              <li>₹78,000 Direct DBT Subsidy</li>
              <li>Bi-Directional Net-Metering</li>
              <li>BIS & MNRE Compliant</li>
              <li>DISCOM Grid Synchronized</li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#1C1B18] font-extrabold">
              Solar Intelligence Dispatch
            </h4>
            <p className="text-xs text-[#5A564A]">
              Subscribe to get monthly solar policy updates, tariff alerts, and energy saving tips.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2.5 rounded-xl bg-[#E9E6DC] border border-[#1C1B18]/15 text-xs text-[#1C1B18] placeholder-[#7E7A6C] focus:outline-none focus:border-[#1C1B18]"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#1C1B18] text-[#E9E6DC] font-bold text-xs shadow-md hover:bg-[#d97706] hover:text-white transition-all"
              >
                Subscribe Dispatch
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7E7A6C] gap-4 font-medium">
          <p>© 2026 Sunlite Solutions India Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#1C1B18]">Privacy Policy</a>
            <a href="#" className="hover:text-[#1C1B18]">Terms of Service</a>
            <a href="#" className="hover:text-[#1C1B18]">Net-Metering Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
