"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProductStorySection } from "@/components/story/ProductStorySection";
import { ProductEcosystemSection } from "@/components/products/ProductEcosystemSection";
import { FinancialClaritySection } from "@/components/clarity/FinancialClaritySection";
import { TrustPhilosophySection } from "@/components/philosophy/TrustPhilosophySection";
import { FinalCTASection } from "@/components/cta/FinalCTASection";
import { Footer } from "@/components/footer/Footer";
import { EarlyAccessCTA } from "@/components/cta/EarlyAccessCTA";

export default function Home() {
  const [onboardingOpen, setOnboardingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-slate-900 selection:bg-[#00C875] selection:text-white">
      {/* 1. Minimal Premium Navigation */}
      <Navbar onOpenOnboarding={() => setOnboardingOpen(true)} />

      {/* 2. Asymmetrical Hero with Real Financial Product Interface */}
      <HeroSection onOpenOnboarding={() => setOnboardingOpen(true)} />

      {/* 3. Core Product Journey: UNDERSTAND -> ACT -> GROW */}
      <ProductStorySection />

      {/* 4. Structured Product Ecosystem (Stocks, MFs, SIPs, F&O, Research, Portfolio) */}
      <ProductEcosystemSection />

      {/* 5. Financial Decision Experience: "Should I invest this month?" */}
      <FinancialClaritySection />

      {/* 6. Philosophy & Trust Section */}
      <TrustPhilosophySection />

      {/* 7. Final Actionable CTA */}
      <FinalCTASection onOpenOnboarding={() => setOnboardingOpen(true)} />

      {/* 8. Minimal Professional Footer */}
      <Footer />

      {/* 9. Clean Onboarding Modal */}
      <EarlyAccessCTA
        isOpen={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
      />
    </main>
  );
}
