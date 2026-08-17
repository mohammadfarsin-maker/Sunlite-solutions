'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1117] border-t border-[#222d35] pt-16 pb-12 text-[#9aa7b0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#222d35]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="flex items-center gap-2.5 text-white font-bold text-lg">
              <img 
                src="/logo-icon.png" 
                alt="Sunlite Solutions" 
                className="h-8 w-auto object-contain"
              />
              Sunlite Solutions
            </a>
            <p className="text-xs text-[#9aa7b0] leading-relaxed max-w-sm">
              Sunlite Solutions is Kerala's trusted solar EPC partner for residential, commercial and industrial rooftop solar installations.
            </p>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Solutions</h3>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="/solutions/residential-solar" className="hover:text-white transition-colors">Residential Solar</a>
              <a href="/solutions/commercial-solar" className="hover:text-white transition-colors">Commercial Solar</a>
              <a href="/solutions/industrial-solar" className="hover:text-white transition-colors">Industrial Solar</a>
              <a href="/solutions/on-grid-solar" className="hover:text-white transition-colors">On-Grid Solar</a>
              <a href="/solutions/hybrid-solar" className="hover:text-white transition-colors">Hybrid Solar</a>
              <a href="/solutions/off-grid-solar" className="hover:text-white transition-colors">Off-Grid Solar</a>
              <a href="/solar-amc" className="hover:text-white transition-colors">AMC & Monitoring</a>
            </div>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Resources</h3>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="/solar-subsidy-kerala" className="hover:text-white transition-colors">Solar Subsidy</a>
              <a href="/solar-calculator" className="hover:text-white transition-colors">Solar Calculator</a>
              <a href="/solar-guide" className="hover:text-white transition-colors">Solar Guide</a>
              <a href="/projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Company</h3>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="#about" className="hover:text-white transition-colors">About Sunlite</a>
              <a href="#areas" className="hover:text-white transition-colors">Service Areas</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>

        </div>

        {/* Foot Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9aa7b0] gap-2">
          <span>© {new Date().getFullYear()} Sunlite Solutions. All rights reserved.</span>
          <span>Kottayam, Kerala · +91 94473 05489</span>
        </div>

      </div>
    </footer>
  );
};

