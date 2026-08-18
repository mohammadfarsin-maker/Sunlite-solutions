'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Grid, Zap, Home, RefreshCw } from 'lucide-react';

export const EnergyFlowExplainer: React.FC = () => {
  const nodes = [
    { icon: Sun, label: 'Sunlight', desc: 'Solar energy reaches the panels.' },
    { icon: Grid, label: 'Panels', desc: 'PV modules generate DC power.' },
    { icon: Zap, label: 'Inverter', desc: 'Converts power for use.' },
    { icon: Home, label: 'Your Property', desc: 'Solar power serves the load.' },
    { icon: RefreshCw, label: 'Grid', desc: 'Excess/imported power flows through the grid.' },
  ];

  return (
    <section className="py-24 bg-[#0e171d] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-end mb-16">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ffb45d] block mb-3">
              Visual explainer
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              See how your solar system works.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-lg">
            Understand how sunlight is converted into usable clean electricity for your home or business.
          </p>
        </div>

        {/* Nodes Grid with Animated Connecting Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative">
          
          {/* Desktop Connecting Line behind nodes */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-[#253946] -z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#ff8a1e] via-[#ffb45d] to-[#ff8a1e] shadow-[0_0_12px_#ff8a1e]"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>

          {nodes.map((n, idx) => {
            const Icon = n.icon;
            return (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center group relative z-10"
              >
                <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-[#16242e] border-2 border-[#334652] shadow-2xl text-white group-hover:border-[#ff8a1e] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,138,30,0.4)] transition-all duration-300 mb-4 cursor-pointer">
                  <Icon className="w-10 h-10 text-[#ff8a1e] group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <b className="block text-base font-bold text-white mb-1 group-hover:text-[#ffb45d] transition-colors">{n.label}</b>
                <small className="block text-xs text-slate-400 leading-relaxed max-w-[160px] mx-auto">{n.desc}</small>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
