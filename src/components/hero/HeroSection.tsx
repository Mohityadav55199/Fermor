"use client";

import React, { useState } from "react";
import { ArrowRight, TrendingUp, ChevronRight } from "lucide-react";
import { formatINR } from "@/lib/utils";

interface HeroSectionProps {
  onOpenOnboarding: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOnboarding }) => {
  const [timeframe, setTimeframe] = useState<"1M" | "6M" | "1Y" | "ALL">("1Y");
  const [selectedAsset, setSelectedAsset] = useState<string>("equity");

  // Realistic sample portfolio data for product demonstration
  const portfolioData = {
    totalValue: 842500,
    growthPercent: 12.4,
    growthAmount: 93100,
    allocations: [
      {
        id: "equity",
        name: "Equities",
        percent: 62,
        value: 522350,
        color: "bg-[#00C875]",
        textColor: "text-[#00844F]",
        note: "Direct NSE/BSE Holdings",
      },
      {
        id: "mutual_funds",
        name: "Direct Mutual Funds",
        percent: 24,
        value: 202200,
        color: "bg-blue-500",
        textColor: "text-blue-600",
        note: "Zero-Commission Index & Flexi Cap",
      },
      {
        id: "cash",
        name: "Cash & Liquid",
        percent: 14,
        value: 117950,
        color: "bg-slate-400",
        textColor: "text-slate-600",
        note: "Emergency Buffer & Liquid Reserves",
      },
    ],
    // Timeframe-specific chart coordinates
    charts: {
      "1M": "M 0,65 Q 40,62 80,64 T 160,58 T 240,54 T 320,48 T 400,42",
      "6M": "M 0,80 Q 40,75 80,68 T 160,60 T 240,48 T 320,44 T 400,35",
      "1Y": "M 0,85 Q 50,78 100,72 T 200,55 T 300,42 T 400,24",
      ALL: "M 0,90 Q 60,82 120,70 T 240,45 T 340,30 T 400,18",
    },
  };

  const currentAllocation =
    portfolioData.allocations.find((a) => a.id === selectedAsset) ||
    portfolioData.allocations[0];

  return (
    <section className="pt-12 pb-18 px-4 sm:px-6 lg:px-8 border-b border-[#EAE8E2]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Financial Operating System
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                All your finances <br />
                <span className="text-[#00C875]">made simple.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Understand your money. Make informed decisions. Grow with confidence.
                One unified platform designed for long-term clarity and disciplined compounding.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenOnboarding}
                className="btn-primary text-sm px-6 py-3 font-semibold"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                <span>Explore how it works</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Product Areas Line */}
            <div className="pt-4 border-t border-[#EAE8E2]">
              <div className="text-xs text-slate-500 font-medium">
                Unified for:{" "}
                <span className="text-slate-800">
                  Stocks · Mutual Funds · SIPs · F&O · Research · Portfolio
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Authentic Product Interface Screen */}
          <div className="lg:col-span-6">
            <div className="product-card p-6 sm:p-7 bg-white">
              {/* Product Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#F4F2EC]">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Portfolio Overview</div>
                  <div className="text-sm font-bold text-slate-900">Total Net Worth</div>
                </div>

                {/* Range Selector */}
                <div className="flex bg-[#F4F2EC] p-0.5 rounded-lg text-xs font-mono">
                  {(["1M", "6M", "1Y", "ALL"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeframe(t)}
                      className={`px-2.5 py-1 rounded font-medium transition-all ${
                        timeframe === t
                          ? "bg-white text-slate-900 shadow-2xs font-bold"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Value & Trend */}
              <div className="py-5 space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 tnum">
                    {formatINR(portfolioData.totalValue)}
                  </span>
                  <span className="inline-flex items-center text-xs font-mono font-bold text-[#00844F] bg-[#E8FAF1] px-2 py-0.5 rounded">
                    <TrendingUp className="w-3.5 h-3.5 mr-1" />
                    +{portfolioData.growthPercent}% this year
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  +₹93,100 net gain across connected accounts
                </div>
              </div>

              {/* Product SVG Chart */}
              <div className="h-28 w-full bg-[#FAF9F6] rounded-lg p-2 border border-[#E8E6E1] relative overflow-hidden">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d={portfolioData.charts[timeframe]}
                    fill="none"
                    stroke="#00C875"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="transition-all duration-300 ease-out"
                  />
                  <circle cx="400" cy="24" r="4" fill="#00C875" />
                </svg>
              </div>

              {/* Asset Allocation Breakdown */}
              <div className="pt-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Asset Allocation</span>
                  <span className="text-[11px] text-slate-500">Tap to inspect</span>
                </div>

                {/* Visual Proportion Bar */}
                <div className="h-2.5 w-full rounded-full overflow-hidden flex gap-0.5 bg-[#F4F2EC]">
                  {portfolioData.allocations.map((a) => (
                    <div
                      key={a.id}
                      onClick={() => setSelectedAsset(a.id)}
                      className={`h-full cursor-pointer transition-opacity ${a.color} ${
                        selectedAsset === a.id ? "opacity-100 ring-1 ring-slate-900" : "opacity-80 hover:opacity-100"
                      }`}
                      style={{ width: `${a.percent}%` }}
                      title={`${a.name}: ${a.percent}%`}
                    />
                  ))}
                </div>

                {/* Asset Breakdown Row */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {portfolioData.allocations.map((asset) => {
                    const isSelected = selectedAsset === asset.id;
                    return (
                      <button
                        key={asset.id}
                        onClick={() => setSelectedAsset(asset.id)}
                        className={`p-2.5 rounded-lg border text-left transition-all ${
                          isSelected
                            ? "bg-[#FAF9F6] border-slate-900 shadow-2xs"
                            : "bg-white border-[#EAE8E2] hover:border-[#CBD5E1]"
                        }`}
                      >
                        <div className="text-[11px] text-slate-600 truncate font-medium">
                          {asset.name}
                        </div>
                        <div className="text-xs font-bold font-mono text-slate-900 mt-0.5 tnum">
                          {asset.percent}%
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Asset Context Detail */}
                <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#E8E6E1] text-xs flex items-center justify-between">
                  <span className="text-slate-600">
                    <strong className="text-slate-900 font-semibold">{currentAllocation.name}:</strong>{" "}
                    {currentAllocation.note}
                  </span>
                  <span className="font-mono font-bold text-slate-900 tnum">
                    {formatINR(currentAllocation.value)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
