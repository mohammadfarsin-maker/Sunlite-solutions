'use client';

import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { IndianRupee, Calculator, Sparkles, ArrowRight, BatteryCharging } from 'lucide-react';

interface ROICalculatorProps {
  onOpenQuoteModal: () => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ onOpenQuoteModal }) => {
  const monthlyBillId = useId();
  const sunHoursId = useId();
  const tariffHikeId = useId();

  const [monthlyBill, setMonthlyBill] = useState<number>(7500);
  const [sunHours, setSunHours] = useState<number>(5.5);
  const [tariffHike, setTariffHike] = useState<number>(8);
  const [hasBattery, setHasBattery] = useState<boolean>(false);

  const tariffPerUnit = 8.5;
  const monthlyKWhNeeded = monthlyBill / tariffPerUnit;
  const dailyKWhNeeded = monthlyKWhNeeded / 30;
  
  const calculatedKWRaw = dailyKWhNeeded / (sunHours * 0.85);
  const recommendedKW = Math.max(2, Math.min(25, Math.ceil(calculatedKWRaw * 2) / 2));

  const grossSystemCost = recommendedKW * 54000 + (hasBattery ? 90000 : 0);
  const subsidyAmount = recommendedKW >= 3 ? 78000 : 60000;
  const netSystemCost = Math.max(30000, grossSystemCost - subsidyAmount);

  let cumulativeGridCost = 0;
  let currentAnnualGridBill = monthlyBill * 12;
  const annualSavingsData: number[] = [];

  for (let year = 1; year <= 25; year++) {
    cumulativeGridCost += currentAnnualGridBill;
    annualSavingsData.push(Math.round(cumulativeGridCost - netSystemCost));
    currentAnnualGridBill *= (1 + tariffHike / 100);
  }

  const year25CumulativeSavings = cumulativeGridCost - netSystemCost;
  const paybackYears = (netSystemCost / (monthlyBill * 12)).toFixed(1);
  const co2TonsSaved = (recommendedKW * 1.35 * 25).toFixed(1);
  const treesEquivalent = Math.round(Number(co2TonsSaved) * 45);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d97706', '#b45309', '#059669', '#1C1B18']
    });
  };

  return (
    <section id="calculator" className="py-28 bg-[#E9E6DC] border-t border-[#1C1B18]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#b45309] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Calculator className="w-3.5 h-3.5" /> Interactive ROI & Profit Calculator
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#1C1B18] tracking-tight leading-tight mb-6"
          >
            Calculate Your 25-Year{' '}
            <span className="text-gradient-amber block">Solar Return on Investment.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#5A564A]"
          >
            Adjust your monthly electricity bill and sun exposure to see real-time net savings in Indian Rupees (₹) and government subsidy eligibility.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#DCD9D1] p-8 rounded-3xl space-y-8 flex flex-col justify-between border border-[#1C1B18]/15 shadow-sm"
          >
            <div>
              <h3 className="text-lg font-bold text-[#1C1B18] mb-6 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-[#d97706]" /> Monthly Usage & Conditions
              </h3>

              {/* Slider 1 */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <label htmlFor={monthlyBillId} className="text-[#38362E]">Average Monthly Electric Bill</label>
                  <span className="text-[#b45309] font-extrabold text-base font-mono">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id={monthlyBillId}
                  type="range"
                  min={1500}
                  max={50000}
                  step={500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-[#E9E6DC] rounded-lg appearance-none cursor-pointer accent-[#d97706]"
                />
                <div className="flex justify-between text-[10px] text-[#7E7A6C] font-mono font-semibold">
                  <span>₹1,500</span>
                  <span>₹25,000</span>
                  <span>₹50,000+</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <label htmlFor={sunHoursId} className="text-[#38362E]">Peak Daily Sun Exposure</label>
                  <span className="text-[#b45309] font-bold text-sm font-mono">
                    {sunHours} Hours / day
                  </span>
                </div>
                <input
                  id={sunHoursId}
                  type="range"
                  min={3.5}
                  max={7.5}
                  step={0.5}
                  value={sunHours}
                  onChange={(e) => setSunHours(Number(e.target.value))}
                  className="w-full h-2 bg-[#E9E6DC] rounded-lg appearance-none cursor-pointer accent-[#d97706]"
                />
                <div className="flex justify-between text-[10px] text-[#7E7A6C] font-mono font-semibold">
                  <span>3.5 hrs (Shaded)</span>
                  <span>5.5 hrs (Avg India)</span>
                  <span>7.5 hrs (Optimal)</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <label htmlFor={tariffHikeId} className="text-[#38362E]">Estimated Annual Tariff Increase</label>
                  <span className="text-[#b45309] font-bold text-sm font-mono">
                    {tariffHike}% / year
                  </span>
                </div>
                <input
                  id={tariffHikeId}
                  type="range"
                  min={5}
                  max={12}
                  step={1}
                  value={tariffHike}
                  onChange={(e) => setTariffHike(Number(e.target.value))}
                  className="w-full h-2 bg-[#E9E6DC] rounded-lg appearance-none cursor-pointer accent-[#d97706]"
                />
              </div>

              {/* Battery Toggle */}
              <div className="p-4 rounded-2xl bg-[#E9E6DC] border border-[#1C1B18]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BatteryCharging className="w-5 h-5 text-[#059669]" />
                  <div>
                    <p className="text-xs font-bold text-[#1C1B18]">Include Lithium LFP Battery Storage</p>
                    <p className="text-[10px] text-[#5A564A]">24/7 Power Backup during grid outages</p>
                  </div>
                </div>
                <button
                  onClick={() => setHasBattery(!hasBattery)}
                  className={`w-12 h-6 rounded-full transition-colors p-1 ${
                    hasBattery ? 'bg-[#059669]' : 'bg-[#C8C4B8]'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      hasBattery ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1C1B18]/10 text-xs text-[#5A564A] flex items-center justify-between font-semibold">
              <span>🇮🇳 PM Surya Ghar Scheme Included</span>
              <button
                onClick={triggerConfetti}
                className="text-[#d97706] font-bold hover:underline flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" /> Celebrate Savings
              </button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl bg-[#DCD9D1] border border-[#1C1B18]/15 p-8 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-[#b45309]">RECOMMENDED SYSTEM</span>
                  <h3 className="text-3xl font-extrabold text-[#1C1B18]">
                    {recommendedKW} kW Solar Array
                  </h3>
                </div>

                <div className="text-right bg-[#E9E6DC] border border-[#1C1B18]/10 px-4 py-2 rounded-2xl shadow-sm">
                  <p className="text-[10px] uppercase font-mono text-[#5A564A] font-bold">Net Investment (After Subsidy)</p>
                  <p className="text-2xl font-black text-[#b45309]">
                    ₹{netSystemCost.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                
                <div className="p-5 rounded-2xl bg-[#E9E6DC] border border-[#059669]/30">
                  <p className="text-[11px] text-[#059669] font-mono font-bold uppercase">25-Year Net Profit</p>
                  <p className="text-2xl sm:text-3xl font-black text-[#059669] mt-1">
                    ₹{Math.round(year25CumulativeSavings / 100000).toFixed(1)} L+
                  </p>
                  <p className="text-[10px] text-[#5A564A] mt-1 font-medium">Pure savings in INR</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#E9E6DC] border border-[#1C1B18]/10">
                  <p className="text-[11px] text-[#5A564A] font-mono font-bold uppercase">Payback Period</p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#1C1B18] mt-1">
                    {paybackYears} Years
                  </p>
                  <p className="text-[10px] text-[#5A564A] mt-1 font-medium">Free electricity thereafter</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#E9E6DC] border border-[#1C1B18]/10">
                  <p className="text-[11px] text-[#5A564A] font-mono font-bold uppercase">CO2 Offset</p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#b45309] mt-1">
                    {co2TonsSaved} Tons
                  </p>
                  <p className="text-[10px] text-[#5A564A] mt-1 font-medium">~{treesEquivalent} trees planted</p>
                </div>

              </div>

              {/* Chart Bar */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-xs font-mono font-semibold text-[#5A564A]">
                  <span>25-Year Cumulative Savings Trajectory</span>
                  <span className="text-[#059669] font-bold">Year 25: ₹{Math.round(year25CumulativeSavings).toLocaleString('en-IN')}</span>
                </div>
                
                <div className="h-6 w-full bg-[#E9E6DC] rounded-full p-1 border border-[#1C1B18]/10 flex items-center gap-1 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#d97706] to-[#059669] transition-all duration-700"
                    style={{ width: `${Math.min(100, Math.max(15, (year25CumulativeSavings / 4000000) * 100))}%` }}
                  />
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-[#1C1B18]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-[#1C1B18]">Ready to lock in your ₹{monthlyBill.toLocaleString('en-IN')}/mo savings?</p>
                <p className="text-[11px] text-[#5A564A]">Lock in your PM Surya Ghar subsidy before slot allocation ends.</p>
              </div>

              <button
                onClick={() => {
                  triggerConfetti();
                  onOpenQuoteModal();
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1C1B18] text-[#E9E6DC] font-bold text-xs shadow-md hover:bg-[#d97706] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Claim This System Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
