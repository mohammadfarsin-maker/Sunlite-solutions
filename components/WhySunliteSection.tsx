'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHY_SUNLITE_POINTS } from '../data/solarData';
import { ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export const WhySunliteSection: React.FC = () => {
  const slides = [
    { src: '/whySolar/one.jpg', title: 'Quality Solar Installation' },
    { src: '/whySolar/two.jpg', title: 'Precision Roof Mounting' },
    { src: '/whySolar/three.jpg', title: 'Tier-1 High Yield Solar Panels' },
    { src: '/whySolar/four.jpg', title: 'Professional Site Engineering' },
    { src: '/whySolar/five.jpg', title: 'Seamless Grid Connection' },
    { src: '/whySolar/six.jpg', title: 'Long-term Maintenance & Support' },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="about" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#ff8a1e] text-xs font-mono font-bold uppercase tracking-widest shadow-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Why Sunlite Solutions
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight"
            >
              Local execution. Technical thinking. Long-term support.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-[#5A564A]"
            >
              Sunlite Solutions delivers engineered solar systems tailored for home and business roofs across Kerala, backed by reliable installation and dedicated after-sales support.
            </motion.p>

            <div className="space-y-3 pt-4">
              {WHY_SUNLITE_POINTS.map((pt) => (
                <div key={pt.step} className="p-4 rounded-2xl bg-[#DCD9D1] border border-[#1C1B18]/10">
                  <b className="text-sm font-bold text-[#1C1B18] block">{pt.step} · {pt.title}</b>
                  <p className="text-xs text-[#5A564A] mt-1">{pt.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Slideshow */}
          <div className="lg:col-span-6">
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-[#1C1B18]/20 shadow-xl group bg-[#1C1B18]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={slides[currentSlide].src} 
                    alt={slides[currentSlide].title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none z-10">
                <span className="px-3 py-1 rounded-full bg-[#ff8a1e] text-white font-mono text-[10px] uppercase font-bold tracking-wider inline-block mb-2 shadow-md">
                  KERALA ROOFTOP EPC
                </span>
                <p className="text-base font-extrabold text-white drop-shadow-md">{slides[currentSlide].title}</p>
              </div>

              {/* Arrow Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots indicator */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentSlide ? 'w-5 bg-[#ff8a1e]' : 'w-2 bg-white/40'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

