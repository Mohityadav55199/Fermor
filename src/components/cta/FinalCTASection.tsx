"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface FinalCTASectionProps {
  onOpenOnboarding: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenOnboarding }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#EAE8E2] bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Understand your money. <br />
          Act with clarity. <br />
          <span className="text-[#00C875]">Grow with confidence.</span>
        </h2>

        <p className="text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
          Open your account in minutes. Experience unified financial clarity without fragmented apps or hidden commissions.
        </p>

        <div className="pt-2">
          <button
            onClick={onOpenOnboarding}
            className="btn-primary text-sm px-8 py-3.5 font-semibold"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
