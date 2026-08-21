"use client";

import React, { useState } from "react";
import { Eye, Zap, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { formatINR } from "@/lib/utils";

export const ProductStorySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<"understand" | "act" | "grow">("understand");

  const stages = [
    {
      id: "understand" as const,
      number: "01",
      name: "Understand",
      heading: "See where your money stands.",
      description:
        "Connect your bank Demats, direct mutual fund portfolios, and savings into one clear statement. See your true family XIRR, asset weights, and unnecessary fee leaks.",
      items: [
        "Consolidated ledger across bank Demats & mutual funds",
        "Asset allocation breakdown across Equities, Debt, and Gold",
        "Fee leak scanner highlights expensive regular plan commissions",
      ],
    },
    {
      id: "act" as const,
      number: "02",
      name: "Act",
      heading: "Know what deserves your attention.",
      description:
        "Make decisions with transparent context. Whether you are executing equity orders or building risk-defined options strategies, understand your exact risk and payoff before you trade.",
      items: [
        "Direct market access routing for low slippage execution",
        "Visual payoff curves showing exact breakeven & max loss",
        "Clear rebalancing prompts when asset weights drift off-target",
      ],
    },
    {
      id: "grow" as const,
      number: "03",
      name: "Grow",
      heading: "Turn good decisions into progress.",
      description:
        "Automate the habits that build lasting wealth. Step up your SIPs to match career growth, accumulate systematically during market corrections, and harvest tax losses legally.",
      items: [
        "Automated 10% annual Step-Up SIP compounding engine",
        "Rule-based accumulation during broad market corrections",
        "Tax-loss harvesting to offset taxable capital gains seamlessly",
      ],
    },
  ];

  const currentStage = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#EAE8E2]">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Editorial Section Intro */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Product Narrative
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Finance gives you numbers.<br />
            <span className="text-[#00C875]">Fermor gives them context.</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Financial clarity isn&apos;t about adding more charts. It is built around three natural stages: seeing your complete picture, making informed choices, and compounding with discipline.
          </p>
        </div>

        {/* Stage Switcher Tabs */}
        <div className="grid grid-cols-3 gap-2 border-b border-[#EAE8E2] pb-px">
          {stages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`pb-4 text-left border-b-2 transition-all ${
                  isActive
                    ? "border-[#00C875] text-slate-900"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                <div className="text-xs font-mono font-medium">STAGE {stage.number}</div>
                <div className="text-lg sm:text-xl font-bold mt-0.5">{stage.name}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Content View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Stage Details */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {currentStage.heading}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentStage.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {currentStage.items.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#00C875] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Stage Preview Screen */}
          <div className="lg:col-span-6">
            <div className="product-card p-6 bg-white border border-[#E8E6E1]">
              {/* STAGE 1 PREVIEW: UNDERSTAND */}
              {activeStage === "understand" && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F4F2EC]">
                    <span className="text-xs font-semibold text-slate-900">
                      Consolidated Holdings Overview
                    </span>
                    <span className="text-[11px] font-mono text-[#00844F] bg-[#E8FAF1] px-2 py-0.5 rounded">
                      ● 3 Demats Connected
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    {[
                      { name: "Direct Equities (NSE/BSE)", broker: "Primary Demat", value: "₹5,22,350", change: "+18.4%" },
                      { name: "Direct Mutual Funds (0% Comm.)", broker: "AMC Direct", value: "₹2,02,200", change: "+15.1%" },
                      { name: "RBI Sovereign Gold Bonds", broker: "Depository", value: "₹1,17,950", change: "+12.2%" },
                    ].map((row) => (
                      <div
                        key={row.name}
                        className="p-3 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2] flex items-center justify-between"
                      >
                        <div>
                          <div className="font-semibold text-slate-900">{row.name}</div>
                          <div className="text-[11px] text-slate-500 font-mono">{row.broker}</div>
                        </div>
                        <div className="text-right font-mono">
                          <div className="font-bold text-slate-900 tnum">{row.value}</div>
                          <div className="text-[10px] text-[#00844F] font-semibold">{row.change}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#E8E6E1] text-xs text-slate-600 flex items-center justify-between">
                    <span>True Portfolio XIRR</span>
                    <span className="font-mono font-bold text-slate-900">+16.8% Annualized</span>
                  </div>
                </div>
              )}

              {/* STAGE 2 PREVIEW: ACT */}
              {activeStage === "act" && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F4F2EC]">
                    <span className="text-xs font-semibold text-slate-900">
                      Options Payoff & Risk Context
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      Defined Loss Strategy
                    </span>
                  </div>

                  <div className="h-28 w-full bg-[#FAF9F6] rounded-lg p-2 border border-[#E8E6E1] relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                      <line x1="10" y1="40" x2="290" y2="40" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1" />
                      <path d="M 20,60 L 100,60 L 180,20 L 280,20" fill="none" stroke="#00C875" strokeWidth="2.5" />
                      <circle cx="100" cy="60" r="3" fill="#E11D48" />
                      <circle cx="180" cy="20" r="3" fill="#00C875" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2]">
                      <div className="text-[10px] text-slate-500">Capped Max Profit</div>
                      <div className="font-bold text-[#00844F] mt-0.5">+₹11,250</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2]">
                      <div className="text-[10px] text-slate-500">Defined Max Loss</div>
                      <div className="font-bold text-rose-600 mt-0.5">-₹3,750</div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 text-center font-mono">
                    Breakeven visualized upfront before order placement.
                  </div>
                </div>
              )}

              {/* STAGE 3 PREVIEW: GROW */}
              {activeStage === "grow" && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F4F2EC]">
                    <span className="text-xs font-semibold text-slate-900">
                      Step-Up SIP Compounding Trajectory
                    </span>
                    <span className="text-[11px] font-mono text-[#00844F] font-bold">
                      10% Annual Increment
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2] space-y-1">
                      <div className="text-[11px] text-slate-500">Static SIP (15 Years)</div>
                      <div className="text-lg font-bold font-mono text-slate-800">₹62.8 Lakhs</div>
                      <div className="text-[10px] text-slate-400 font-mono">₹15,000 / month constant</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#E8FAF1] border border-[rgba(0,200,117,0.3)] space-y-1">
                      <div className="text-[11px] text-[#00844F] font-semibold">Fermor Step-Up SIP</div>
                      <div className="text-lg font-bold font-mono text-[#00844F]">₹1.34 Crore</div>
                      <div className="text-[10px] text-[#00844F] font-mono">+10% annual salary step-up</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#E8E6E1] text-xs text-slate-600">
                    <strong>Disciplined habit:</strong> Stepping up contributions matches salary growth, creating +113% additional compounding wealth without lifestyle strain.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
