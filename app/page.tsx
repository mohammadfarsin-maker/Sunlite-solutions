'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollToTopButton } from '../components/layout/ScrollToTopButton';

import { Hero } from '../components/sections/Hero';
import { TrustStatsStrip } from '../components/sections/TrustStatsStrip';
import { WhySolar } from '../components/sections/WhySolar';
import { ServicesSection, SolarTiers } from '../components/sections/SolarTiers';
import { SolarEducationSection } from '../components/sections/SolarEducationSection';
import { WhySunliteSection } from '../components/sections/WhySunliteSection';
import { InstallationProcess } from '../components/sections/InstallationProcess';
import { SubsidySection } from '../components/sections/SubsidySection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { FeaturedCaseStudySection } from '../components/sections/FeaturedCaseStudySection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { SolarGuideSection } from '../components/sections/SolarGuideSection';
import { ServiceAreasSection } from '../components/sections/ServiceAreasSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';
import { CompanyDetails } from '../components/sections/CompanyDetails';

import { SolarAdvisorSection } from '../components/interactive/SolarAdvisorSection';
import { EnergyFlowExplainer } from '../components/interactive/EnergyFlowExplainer';
import { ROICalculator } from '../components/interactive/ROICalculator';
import { QuoteModal } from '../components/interactive/QuoteModal';

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
    <main className="min-h-screen bg-[#E9E6DC] text-[#1C1B18] relative">
      {/* Fixed Sticky Header overlapping Hero smoothly */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Hero Section (Cinematic scroll-driven background) */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Trust Stats Strip */}
      <TrustStatsStrip />

      {/* Why Solar Section */}
      <WhySolar />

      {/* Interactive Solar Advisor (Persona Section) */}
      <SolarAdvisorSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Services Section */}
      <ServicesSection onSelectTier={(tier) => handleOpenQuoteModal(tier)} />

      {/* System Tiers Section */}
      <SolarTiers onSelectTier={(tier) => handleOpenQuoteModal(tier)} />

      {/* Energy Flow Explainer (Dark Section) */}
      <EnergyFlowExplainer />

      {/* Solar Education Section */}
      {/* <SolarEducationSection /> */}

      {/* Why Sunlite Section */}
      <WhySunliteSection />

      {/* Installation Process */}
      <InstallationProcess />

      {/* Government Subsidy Section */}
      <SubsidySection />

      {/* Interactive ROI Calculator */}
      <ROICalculator onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Projects Section */}
      {/* <ProjectsSection /> */}

      {/* Featured Case Study (Dark Section) */}
      <FeaturedCaseStudySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Solar Guide Knowledge Hub */}
      <SolarGuideSection />

      {/* Service Areas */}
      {/* <ServiceAreasSection /> */}

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* Final Contact CTA */}
      <ContactSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollToTopButton />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        selectedTier={selectedTier}
      />
    </main>
  );
}

