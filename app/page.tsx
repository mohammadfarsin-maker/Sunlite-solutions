'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustStatsStrip } from '../components/TrustStatsStrip';
import { WhySolar } from '../components/WhySolar';
import { SolarAdvisorSection } from '../components/SolarAdvisorSection';
import { ServicesSection, SolarTiers } from '../components/SolarTiers';
import { EnergyFlowExplainer } from '../components/EnergyFlowExplainer';
import { SolarEducationSection } from '../components/SolarEducationSection';
import { WhySunliteSection } from '../components/WhySunliteSection';
import { InstallationProcess } from '../components/InstallationProcess';
import { SubsidySection } from '../components/SubsidySection';
import { ROICalculator } from '../components/ROICalculator';
import { ProjectsSection } from '../components/ProjectsSection';
import { FeaturedCaseStudySection } from '../components/FeaturedCaseStudySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { SolarGuideSection } from '../components/SolarGuideSection';
import { ServiceAreasSection } from '../components/ServiceAreasSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
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

