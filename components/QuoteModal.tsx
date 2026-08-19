'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, ArrowRight, Home, Building, Factory, Shield, Phone, User, MapPin } from 'lucide-react';
import { SolarTier } from '../data/solarData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: SolarTier | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, selectedTier }) => {
  const [step, setStep] = useState<number>(1);
  const [propertyType, setPropertyType] = useState<string>('Independent Home');
  const [billRange, setBillRange] = useState<string>('₹5,000 - ₹10,000 / mo');
  const [systemSize, setSystemSize] = useState<string>(selectedTier ? selectedTier.capacity : '5 kW System');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [pincode, setPincode] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#d97706', '#b45309', '#059669']
      });
    }
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl rounded-3xl bg-[#E9E6DC] border border-[#1C1B18]/15 p-6 sm:p-10 shadow-2xl overflow-hidden text-[#1C1B18]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/10 text-[#5A564A] hover:text-[#1C1B18] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full bg-[#DCD9D1] border border-[#1C1B18]/15 text-[#b45309] font-mono text-[11px] font-bold uppercase">
                  STEP {step} OF 3 • PM SURYA GHAR ELIGIBILITY
                </span>
                <h3 className="text-2xl font-extrabold text-[#1C1B18] mt-2">
                  Get Instant Custom Solar Quote (₹)
                </h3>
                <p className="text-xs text-[#5A564A] mt-1">
                  Receive an immediate breakdown of system cost, direct bank subsidy, and 30-year return.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-[#DCD9D1] rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-[#1C1B18] transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#38362E] mb-3">
                      Select Property Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Independent Home', icon: Home },
                        { label: 'Apartment Rooftop', icon: Building },
                        { label: 'Commercial Estate', icon: Factory },
                        { label: 'Farmhouse / Villa', icon: Shield }
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.label}
                            onClick={() => setPropertyType(item.label)}
                            className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                              propertyType === item.label
                                ? 'bg-[#1C1B18] text-[#E9E6DC] border-[#1C1B18]'
                                : 'bg-[#DCD9D1] border-[#1C1B18]/10 text-[#38362E] hover:bg-[#C8C4B8]'
                            }`}
                          >
                            <Icon className="w-4 h-4 text-[#d97706]" />
                            <span className="text-xs font-bold">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#38362E] mb-3">
                      Average Monthly Electricity Bill (₹)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Under ₹3,000 / mo', '₹3,000 - ₹7,000 / mo', '₹7,000 - ₹15,000 / mo', '₹15,000+ / mo'].map((b) => (
                        <button
                          key={b}
                          onClick={() => setBillRange(b)}
                          className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                            billRange === b
                              ? 'bg-[#1C1B18] text-[#E9E6DC] border-[#1C1B18]'
                              : 'bg-[#DCD9D1] border-[#1C1B18]/10 text-[#38362E] hover:bg-[#C8C4B8]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#38362E] mb-3">
                      Select Preferred Capacity
                    </label>
                    <div className="space-y-3">
                      {[
                        { size: '3 kW System', desc: 'Ideal for 2-3 BHK | ~₹97,000 Net after Subsidy' },
                        { size: '5 kW System', desc: '⭐ Most Popular | ~₹2,07,000 Net after Subsidy' },
                        { size: '8 kW System', desc: 'Luxury Villa & Heavy Loads | ~₹3,52,000 Net after Subsidy' },
                        { size: '12+ kW Commercial', desc: 'Max ROI Industrial / Estate Array' }
                      ].map((item) => (
                        <button
                          key={item.size}
                          onClick={() => setSystemSize(item.size)}
                          className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                            systemSize === item.size
                              ? 'bg-[#1C1B18] text-[#E9E6DC] border-[#1C1B18]'
                              : 'bg-[#DCD9D1] border-[#1C1B18]/10 text-[#38362E] hover:bg-[#C8C4B8]'
                          }`}
                        >
                          <div>
                            <p className="text-xs font-bold">{item.size}</p>
                            <p className="text-[11px] opacity-80">{item.desc}</p>
                          </div>
                          {systemSize === item.size && <CheckCircle2 className="w-5 h-5 text-[#059669]" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#38362E] mb-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-[#7E7A6C]" />
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#DCD9D1] border border-[#1C1B18]/15 text-xs text-[#1C1B18] placeholder-[#7E7A6C] focus:outline-none focus:border-[#1C1B18]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#38362E] mb-1">Mobile Number (For Proposal & WhatsApp)</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 w-4 h-4 text-[#7E7A6C]" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#DCD9D1] border border-[#1C1B18]/15 text-xs text-[#1C1B18] placeholder-[#7E7A6C] focus:outline-none focus:border-[#1C1B18]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#38362E] mb-1">Area Pincode (To check DISCOM Net-Metering & Subsidy)</label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-[#7E7A6C]" />
                      <input
                        type="text"
                        placeholder="e.g. 110001 or 400001"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#DCD9D1] border border-[#1C1B18]/15 text-xs text-[#1C1B18] placeholder-[#7E7A6C] focus:outline-none focus:border-[#1C1B18]"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Action Bar */}
              <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#1C1B18]/10">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#5A564A] hover:text-[#1C1B18]"
                  >
                    Back
                  </button>
                ) : <div />}

                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-full bg-[#1C1B18] text-[#E9E6DC] font-bold text-xs shadow-md hover:bg-[#d97706] hover:text-white transition-all flex items-center gap-2"
                >
                  <span>{step === 3 ? 'Generate Instant Proposal (₹)' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Confirmation */
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#059669]/15 border border-[#059669]/30 text-[#059669] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#1C1B18] mb-2">
                Proposal Generated Successfully!
              </h3>
              <p className="text-xs text-[#5A564A] max-w-md mx-auto mb-6">
                Thank you <span className="text-[#b45309] font-bold">{fullName || 'Valued Customer'}</span>! Your estimated custom quote for a <span className="text-[#1C1B18] font-bold">{systemSize}</span> with <span className="text-[#059669] font-bold">₹78,000 PM Surya Ghar Govt Subsidy</span> has been prepared.
              </p>

              <div className="p-4 rounded-2xl bg-[#DCD9D1] border border-[#1C1B18]/10 text-xs text-left space-y-2 mb-6 max-w-md mx-auto">
                <p className="flex justify-between"><span className="text-[#5A564A]">Target System Size:</span> <span className="font-bold text-[#1C1B18]">{systemSize}</span></p>
                <p className="flex justify-between"><span className="text-[#5A564A]">Govt Subsidy Eligibility:</span> <span className="font-bold text-[#059669]">₹78,000 Direct DBT</span></p>
                <p className="flex justify-between"><span className="text-[#5A564A]">Est. 30-Yr Net Savings:</span> <span className="font-bold text-[#b45309]">₹30+ Lakhs</span></p>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-[#1C1B18] text-[#E9E6DC] font-bold text-xs hover:bg-[#d97706] hover:text-white transition-all"
              >
                Close & Return To Site
              </button>
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
