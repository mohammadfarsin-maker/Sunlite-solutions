'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WhySolar } from '../components/WhySolar';
import { SolarTiers } from '../components/SolarTiers';
import { ROICalculator } from '../components/ROICalculator';
import { InstallationProcess } from '../components/InstallationProcess';
import { CompanyDetails } from '../components/CompanyDetails';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { SolarTier } from '../data/solarData';

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<SolarTier | null>(null);

  const handleOpenQuoteModal = (tier?: SolarTier) => {
    if (tier) {
      setSelectedTier(tier);
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedTier(null);
  };

  return (
    <main className="min-h-screen bg-dark-bg text-slate-100 relative">
      {/* Apple-style floating dark glass Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Hero Section - Ready for future custom animation */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Why Solar Section - Grid Tariff vs Solar comparison */}
      <WhySolar />

      {/* Solar System Tiers - 3kW, 5kW, 8kW, 12kW+ specs */}
      <SolarTiers onSelectTier={(tier) => handleOpenQuoteModal(tier)} />

      {/* Interactive ROI & Profit Calculator in Indian Rupees (₹) */}
      <ROICalculator onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 4-Step Turnkey Installation Process */}
      <InstallationProcess />

      {/* Company Details & 25-Year Warranty Trust Seal */}
      <CompanyDetails />

      {/* Footer */}
      <Footer />

      {/* Interactive Lead Generation Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        selectedTier={selectedTier}
      />
    </main>
  );
}
