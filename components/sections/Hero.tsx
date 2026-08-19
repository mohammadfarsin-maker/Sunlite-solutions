'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronDown, Zap, Activity } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

const TOTAL_FRAMES = 300;

const CINEMATIC_STATES = [
  {
    frameLabel: '01 / 05',
    leftValue: 'Site assessment',
    leftCopy: 'Roof + load analysis — Evaluate roof, shading, electrical configuration and future energy needs.',
    rightValue: 'Solar + grid',
    rightCopy: 'Start with the property. Choose architecture after understanding the requirement.'
  },
  {
    frameLabel: '02 / 05',
    leftValue: 'System design',
    leftCopy: 'Capacity + architecture — Translate electricity use and site constraints into a practical system design.',
    rightValue: '3–5 kW',
    rightCopy: 'Residential starting range. Planning range only; final capacity depends on actual conditions.'
  },
  {
    frameLabel: '03 / 05',
    leftValue: 'Generation',
    leftCopy: 'Sunlight → DC power — Panels generate electricity from available sunlight; the inverter converts it for use.',
    rightValue: 'Solar output',
    rightCopy: 'Energy generation. Performance varies with weather, orientation, shading and system design.'
  },
  {
    frameLabel: '04 / 05',
    leftValue: 'Energy flow',
    leftCopy: 'Property + grid — Power serves the property load; grid interaction depends on system architecture.',
    rightValue: 'Load + grid',
    rightCopy: 'On-grid / hybrid. Hybrid systems can add battery-backed selected-load capability.'
  },
  {
    frameLabel: '05 / 05',
    leftValue: 'Support',
    leftCopy: 'Monitor + maintain — Commissioning is followed by monitoring, maintenance and after-sales support.',
    rightValue: 'Long-life asset',
    rightCopy: 'Service relationship. Use verified warranty and service terms on production pages.'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [currentFrameNum, setCurrentFrameNum] = useState(1);
  const [cinStateIndex, setCinStateIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const drawFrame = useCallback((targetFrameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current.get(targetFrameIndex);

    if (!img || !img.complete) {
      let closestDist = Infinity;
      let closestFrameIndex = 1;

      imagesRef.current.forEach((loadedImg, idx) => {
        if (loadedImg.complete && loadedImg.naturalWidth > 0) {
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

  useEffect(() => {
    let isCancelled = false;

    const getFramePath = (index: number) => {
      const frameNum = String(index).padStart(3, '0');
      return `/images/herosection/desktop/ezgif-frame-${frameNum}.webp`;
    };

    const loadFrame = (frameIndex: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesRef.current.has(frameIndex)) {
          resolve();
          return;
        }
        const img = new Image();
        img.src = getFramePath(frameIndex);
        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current.set(frameIndex, img);
          }
          resolve();
        };
        img.onerror = () => resolve();
      });
    };

    // Above-the-fold priority: Preload initial frames (1..3) eagerly for instant paint
    const initialFrames = [1, 2, 3];
    Promise.all(initialFrames.map((idx) => loadFrame(idx))).then(() => {
      if (isCancelled) return;
      setPosterLoaded(true);
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        drawFrame(1);
      }

      // Progressive Keyframe Loading (step by 4)
      const keyframes: number[] = [];
      for (let i = 1; i <= TOTAL_FRAMES; i += 4) {
        keyframes.push(i);
      }
      if (!keyframes.includes(TOTAL_FRAMES)) keyframes.push(TOTAL_FRAMES);

      const startProgressiveLoad = async () => {
        const BATCH_SIZE = 4;

        // Phase 1: Keyframe passes
        for (let i = 0; i < keyframes.length; i += BATCH_SIZE) {
          if (isCancelled) return;
          const batch = keyframes.slice(i, i + BATCH_SIZE);
          await Promise.all(batch.map((idx) => loadFrame(idx)));
          await new Promise((r) => setTimeout(r, 20));
        }

        // Phase 2: Remaining intermediate frames
        const remainingFrames: number[] = [];
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
          if (!imagesRef.current.has(i)) {
            remainingFrames.push(i);
          }
        }

        for (let i = 0; i < remainingFrames.length; i += BATCH_SIZE) {
          if (isCancelled) return;
          const batch = remainingFrames.slice(i, i + BATCH_SIZE);
          await Promise.all(batch.map((idx) => loadFrame(idx)));
          await new Promise((r) => setTimeout(r, 20));
        }
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => startProgressiveLoad());
      } else {
        setTimeout(startProgressiveLoad, 50);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * (TOTAL_FRAMES - 1)))
    );
    setCurrentFrameNum(frameIndex + 1);

    const stIdx = Math.min(CINEMATIC_STATES.length - 1, Math.floor(latest * CINEMATIC_STATES.length));
    setCinStateIndex(stIdx);

    requestAnimationFrame(() => drawFrame(frameIndex));
  });

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

  const framePadding = useTransform(scrollYProgress, [0.02, 0.25], ['0px', '28px']);
  const frameRadius = useTransform(scrollYProgress, [0.02, 0.25], ['0px', '28px']);
  const frameScale = useTransform(scrollYProgress, [0.02, 0.25], [1, 0.95]);

  const headerOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.18], [0, -40]);

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const currentState = CINEMATIC_STATES[cinStateIndex];

  return (
    <div ref={targetRef} className="relative h-[300vh] bg-[#E9E6DC]">

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        <motion.div
          style={{
            padding: framePadding,
            scale: frameScale,
            borderRadius: frameRadius,
          }}
          className="relative w-full h-full overflow-hidden bg-[#1C1B18] shadow-2xl transition-all duration-100 ease-out"
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/80 via-transparent to-[#1C1B18]/50 pointer-events-none" />

          {/* HERO SKELETON LOADING STATE */}
          {!posterLoaded && (
            <div className="absolute inset-0 bg-[#1C1B18] z-30 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-12 h-12 rounded-full border-4 border-[#ff8a1e]/20 border-t-[#ff8a1e] animate-spin mb-4" />
              <p className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest animate-pulse">
                Loading Sunlite Solar Experience...
              </p>
            </div>
          )}

          {/* MAIN HERO COPY OVERLAY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity: headerOpacity, y: headerY }}
            className="absolute inset-x-0 top-20 sm:top-28 z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E6DC]/90 backdrop-blur-md border border-white/20 mb-3 sm:mb-4 shadow-soft-sm hover:border-[#d97706]/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff8a1e] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#1C1B18] uppercase tracking-wider">
                Solar EPC · Kottayam, Kerala
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-3 sm:mb-4 drop-shadow-md"
            >
              Kerala's Trusted Solar Panel Installation Company
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs sm:text-base text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed mb-5 sm:mb-6 drop-shadow"
            >
              Residential, commercial and industrial solar systems — from site assessment and system design to installation, subsidy guidance and ongoing support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center gap-3 flex-wrap"
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff8a1e] to-[#e9680b] text-white font-bold text-xs shadow-soft-lg hover:scale-[1.03] hover:shadow-[#ff8a1e]/20 transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                Get a Free Site Survey ↗
              </a>

              <a
                href="#calculator"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs backdrop-blur-md hover:scale-[1.03] transition-all duration-200 flex items-center gap-1.5 active:scale-95"
              >
                Calculate My Savings
              </a>
            </motion.div>
          </motion.div>

          {/* RESPONSIVE FLOATING CARDS CONTAINER (NO OVERLAP ON MOBILE) */}
          <div className="absolute bottom-6 sm:bottom-10 inset-x-4 sm:inset-x-10 z-20 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-3 sm:gap-6 pointer-events-none">
            {/* FLOATING LEFT CARD */}
            <div className="w-full sm:max-w-xs md:max-w-sm p-3.5 sm:p-5 rounded-2xl bg-[#090F12]/85 border border-white/15 backdrop-blur-xl shadow-2xl text-white pointer-events-auto">
              <small className="block text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400">
                Engineering state
              </small>
              <strong className="block text-sm sm:text-lg font-extrabold text-white mt-0.5 sm:mt-1">
                {currentState.leftValue}
              </strong>
              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed mt-1 sm:mt-2 hidden xs:block sm:block">
                {currentState.leftCopy}
              </p>
            </div>

            {/* FLOATING RIGHT CARD */}
            <div className="w-full sm:max-w-xs md:max-w-sm p-3.5 sm:p-5 rounded-2xl bg-[#090F12]/85 border border-white/15 backdrop-blur-xl shadow-2xl text-white pointer-events-auto">
              <small className="block text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400">
                System intelligence
              </small>
              <strong className="block text-sm sm:text-lg font-extrabold text-[#ffb45d] mt-0.5 sm:mt-1">
                {currentState.rightValue}
              </strong>
              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed mt-1 sm:mt-2 hidden xs:block sm:block">
                {currentState.rightCopy}
              </p>
            </div>
          </div>

          {/* FINAL STATE WELCOME OVERLAY (APPEARS ON 4th/5th STATE) */}
          {cinStateIndex >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-x-0 top-1/3 z-30 flex flex-col items-center text-center px-4 max-w-2xl mx-auto pointer-events-none"
            >
              <div className="px-6 py-4">
                <span className="px-3.5 py-1 rounded-full bg-[#ff8a1e] text-white font-mono text-[10px] uppercase font-bold tracking-widest inline-block mb-3">
                  POWER YOUR FUTURE
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md mb-2">
                  Welcome to Sunlite Solutions
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  Your trusted solar partner across Kottayam & Kerala. Reliable engineering, seamless subsidy guidance, and guaranteed performance.
                </p>
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-[#1C1B18] text-xs gap-1 pointer-events-none"
      >
        <span className="uppercase tracking-widest text-[9px] font-mono font-extrabold bg-[#E9E6DC]/90 px-3 py-1 rounded-full border border-[#1C1B18]/15 shadow-sm">
          Scroll to animate the energy journey
        </span>
        <ChevronDown className="w-4 h-4 text-[#ff8a1e]" />
      </motion.div>

    </div>
  );
};

