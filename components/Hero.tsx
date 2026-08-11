'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Sparkles, ArrowRight, IndianRupee, ChevronDown, Zap, Activity } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const TOTAL_FRAMES = 240;

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Ref map to store downloaded images without re-rendering component
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [currentFrameNum, setCurrentFrameNum] = useState(1);
  const isMobileRef = useRef<boolean>(false);

  // Scroll tracking inside 380vh container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Helper to draw a frame to canvas with nearest loaded fallback
  const drawFrame = useCallback((targetFrameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find requested image or closest loaded frame
    let img = imagesRef.current.get(targetFrameIndex);

    if (!img || !img.complete) {
      // Find nearest available frame
      let closestDist = Infinity;
      let closestFrameIndex = 1;

      imagesRef.current.forEach((loadedImg, idx) => {
        if (loadedImg.complete) {
          const dist = Math.abs(idx - targetFrameIndex);
          if (dist < closestDist) {
            closestDist = dist;
            closestFrameIndex = idx;
          }
        }
      });

      img = imagesRef.current.get(closestFrameIndex);
    }

    if (img && img.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (canvas.width - img.width * ratio) / 2;
      const centerShiftY = (canvas.height - img.height * ratio) / 2;

      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShiftX,
        centerShiftY,
        img.width * ratio,
        img.height * ratio
      );
    }
  }, []);

  // Preload poster image immediately on mount, then chunked load remaining frames
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    isMobileRef.current = isMobile;
    const folder = isMobile ? 'mobile' : 'desktop';

    // 1. Immediately load Frame 1 poster asset
    const posterImg = new Image();
    posterImg.src = '/images/herosection/hero-poster.webp';
    posterImg.onload = () => {
      imagesRef.current.set(1, posterImg);
      setPosterLoaded(true);
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        drawFrame(0);
      }
    };

    // Helper to fetch an image frame
    const loadFrame = (frameIndex: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesRef.current.has(frameIndex)) {
          resolve();
          return;
        }
        const frameNum = String(frameIndex).padStart(3, '0');
        const img = new Image();
        img.src = `/images/herosection/${folder}/frame-${frameNum}.webp`;
        img.onload = () => {
          imagesRef.current.set(frameIndex, img);
          resolve();
        };
        img.onerror = () => resolve();
      });
    };

    // 2. Progressive loading: Step 1 = Keyframes (every 4th frame for instant scroll playback)
    const keyframes: number[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += 4) {
      keyframes.push(i);
    }
    if (!keyframes.includes(TOTAL_FRAMES)) keyframes.push(TOTAL_FRAMES);

    let isCancelled = false;

    const startProgressiveLoad = async () => {
      // Fetch keyframes first
      for (const frameIdx of keyframes) {
        if (isCancelled) return;
        await loadFrame(frameIdx);
      }

      // Step 2 = Load remaining intermediate frames in small idle batches
      const remainingFrames: number[] = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (!imagesRef.current.has(i)) {
          remainingFrames.push(i);
        }
      }

      const BATCH_SIZE = 8;
      for (let i = 0; i < remainingFrames.length; i += BATCH_SIZE) {
        if (isCancelled) return;
        const batch = remainingFrames.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map((idx) => loadFrame(idx)));
        // Yield to main thread
        await new Promise((r) => setTimeout(r, 15));
      }
    };

    // Defer non-critical frame loading until main thread completes initial layout
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => startProgressiveLoad());
    } else {
      setTimeout(startProgressiveLoad, 100);
    }

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  // Sync scroll to frame rendering
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * (TOTAL_FRAMES - 1)))
    );
    setCurrentFrameNum(frameIndex + 1);
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(scrollYProgress.get() * (TOTAL_FRAMES - 1)))
        );
        drawFrame(currentFrame);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame, scrollYProgress]);

  // SCROLL TRANSFORMS FOR APPLE-GRADE UI
  const framePadding = useTransform(scrollYProgress, [0.02, 0.25], ['0px', '28px']);
  const frameRadius = useTransform(scrollYProgress, [0.02, 0.25], ['0px', '28px']);
  const frameScale = useTransform(scrollYProgress, [0.02, 0.25], [1, 0.95]);

  // Header fade on scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

  // Floating side HUD 1
  const hud1Opacity = useTransform(scrollYProgress, [0.18, 0.28, 0.60, 0.70], [0, 1, 1, 0]);
  const hud1X = useTransform(scrollYProgress, [0.18, 0.28, 0.60, 0.70], [-40, 0, 0, -40]);

  // Floating side HUD 2
  const hud2Opacity = useTransform(scrollYProgress, [0.72, 0.82, 1], [0, 1, 1]);
  const hud2X = useTransform(scrollYProgress, [0.72, 0.82, 1], [40, 0, 0]);

  // Scroll Indicator
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <div ref={targetRef} className="relative h-[380vh] bg-[#E9E6DC]">
      
      {/* Sticky Fullscreen to Framed Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pt-16">
        
        {/* Animated Container Wrapper */}
        <motion.div
          style={{
            padding: framePadding,
            scale: frameScale,
            borderRadius: frameRadius,
          }}
          className="relative w-full h-full overflow-hidden bg-[#1C1B18] shadow-2xl transition-all duration-100 ease-out"
        >
          {/* Canvas Component */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Subtle Gradient Overlays for UI contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/70 via-transparent to-[#1C1B18]/40 pointer-events-none" />

          {/* Lightweight non-blocking initial placeholder fallback */}
          {!posterLoaded && (
            <div className="absolute inset-0 bg-[#1C1B18] animate-pulse pointer-events-none" />
          )}

          {/* TOP FLOATING HEADER (Phase 1: Initial view, fades cleanly on scroll) */}
          <motion.div
            style={{ opacity: headerOpacity, y: headerY }}
            className="absolute inset-x-0 top-12 z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E6DC]/90 backdrop-blur-md border border-[#1C1B18]/15 mb-4 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#d97706] animate-pulse" />
              <span className="text-[11px] font-extrabold text-[#1C1B18] uppercase tracking-wide">
                PM Surya Ghar Scheme — Up To ₹78,000 Govt Subsidy
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              Zero Electricity Bills.{' '}
              <span className="text-[#fbbf24]">25 Years Guarantee.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-medium leading-relaxed mb-6 drop-shadow">
              Tier-1 N-Type TOPCon Solar PV technology engineered for maximum return on investment in India.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-full bg-[#E9E6DC] text-[#1C1B18] font-bold text-xs shadow-xl hover:bg-[#d97706] hover:text-white transition-all flex items-center gap-2 group"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d97706] group-hover:text-white" />
                Calculate Savings (₹)
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs backdrop-blur-md transition-all flex items-center gap-1.5"
              >
                <IndianRupee className="w-3.5 h-3.5 text-[#fbbf24]" />
                ROI Calculator
              </a>
            </div>
          </motion.div>

          {/* FLOATING HUD CARD 1 (Phase 2: Bottom-Left Pinned Side Card during frame animation) */}
          <motion.div
            style={{ opacity: hud1Opacity, x: hud1X }}
            className="absolute bottom-10 left-6 sm:left-10 z-20 max-w-xs sm:max-w-sm p-6 rounded-2xl bg-[#1C1B18]/85 border border-white/20 backdrop-blur-xl shadow-2xl text-white pointer-events-auto"
          >
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#fbbf24]" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#fbbf24]">
                  ENGINE FRAME TELEMETRY
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded">
                FRAME {currentFrameNum} / {TOTAL_FRAMES}
              </span>
            </div>

            <h3 className="text-base font-extrabold text-white mb-1">
              Tier-1 TOPCon Silicon Architecture
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Dual-glass monocrystalline cells engineered for 23.2% module efficiency and zero summer heat drop.
            </p>

            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-2 border-t border-white/10 text-slate-300">
              <div>
                <span className="text-slate-400 block">GENERATION YIELD</span>
                <span className="font-bold text-emerald-400">26 kWh / Day</span>
              </div>
              <div>
                <span className="text-slate-400 block">WIND RATING</span>
                <span className="font-bold text-sky-400">170 km/h Safe</span>
              </div>
            </div>
          </motion.div>

          {/* FLOATING HUD CARD 2 (Phase 3: Bottom-Right Pinned Side Card at animation finish) */}
          <motion.div
            style={{ opacity: hud2Opacity, x: hud2X }}
            className="absolute bottom-10 right-6 sm:right-10 z-20 max-w-xs sm:max-w-sm p-6 rounded-2xl bg-[#1C1B18]/90 border border-white/20 backdrop-blur-xl shadow-2xl text-white pointer-events-auto"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#fbbf24]">
                READY FOR ACTIVATION
              </span>
            </div>

            <h3 className="text-lg font-extrabold text-white mb-2">
              Lock In Your 25-Year Energy Profits
            </h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Claim up to ₹78,000 Direct Govt Bank Subsidy under PM Surya Ghar Muft Bijli Yojana today.
            </p>

            <div className="space-y-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d97706] to-[#b45309] text-white font-extrabold text-xs tracking-wide shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Claim Custom Proposal (₹)
              </button>

              <a
                href="#system-tiers"
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
              >
                Explore 3kW, 5kW, 8kW Specs
              </a>
            </div>
          </motion.div>

          {/* Floating Progress Bar at bottom center */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-48 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
            <div
              className="h-full bg-gradient-to-r from-[#fbbf24] to-[#d97706] transition-all duration-75"
              style={{ width: `${(currentFrameNum / TOTAL_FRAMES) * 100}%` }}
            />
          </div>

        </motion.div>
      </div>

      {/* Down Scroll Prompt */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-[#1C1B18] text-xs gap-1 pointer-events-none"
      >
        <span className="uppercase tracking-widest text-[9px] font-mono font-extrabold bg-[#E9E6DC]/90 px-3 py-1 rounded-full border border-[#1C1B18]/15 shadow-sm">
          Scroll to animate frame
        </span>
        <ChevronDown className="w-4 h-4 text-[#d97706]" />
      </motion.div>

    </div>
  );
};
