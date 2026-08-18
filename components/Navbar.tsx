'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Solar', href: '#why-solar' },
    { name: 'Solutions', href: '#services' },
    { name: 'System Tiers', href: '#system-tiers' },
    { name: 'Why Sunlite', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Subsidy', href: '#subsidy' },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'py-3.5 bg-[#E9E6DC]/90 backdrop-blur-2xl border-b border-[#1C1B18]/10 shadow-lg shadow-black/[0.03]'
          : 'py-5 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo - Sunlite Solutions */}
            <a href="#" className="flex items-center group">
              <img
                src="/logo-icon.png"
                alt="Sunlite Solutions"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#DCD9D1]/80 border border-[#1C1B18]/10 backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-xs font-semibold text-[#38362E] hover:text-[#d97706] hover:bg-[#E9E6DC] rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-[#1C1B18] text-[#E9E6DC] font-bold text-xs tracking-wide shadow-md hover:bg-[#d97706] hover:text-white transition-all duration-300 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#d97706] group-hover:text-white transition-colors" />
                  Instant Solar Quote
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-3.5 py-1.5 rounded-full bg-[#1C1B18] text-[#E9E6DC] font-bold text-xs"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#DCD9D1] border border-[#1C1B18]/10 text-[#1C1B18]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#E9E6DC]/98 backdrop-blur-2xl pt-24 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="space-y-4">
              <p className="text-xs font-semibold text-[#7E7A6C] uppercase tracking-widest">Navigation</p>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-2xl font-bold text-[#1C1B18] hover:text-[#d97706] transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-4 rounded-xl bg-[#1C1B18] text-[#E9E6DC] font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#d97706]" />
              Calculate Instant Solar Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
