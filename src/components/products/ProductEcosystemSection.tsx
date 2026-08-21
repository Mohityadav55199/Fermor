"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  PieChart,
  Repeat,
  Zap,
  BookOpen,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const ProductEcosystemSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"invest" | "portfolio" | "research" | "markets">("invest");

  const categories = [
    { id: "invest" as const, label: "Invest & Compound", count: "3 Products" },
    { id: "markets" as const, label: "Markets & Trading", count: "2 Products" },
    { id: "research" as const, label: "Research Studio", count: "1 Product" },
    { id: "portfolio" as const, label: "Portfolio Intelligence", count: "1 Product" },
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#EAE8E2]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Product Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Your financial world, in one place.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Fermor brings together direct investing, derivatives, and research under one structured architecture — without fragmenting your capital across different apps.
          </p>
        </div>

        {/* Structured Product Category Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-[#EAE8E2] pb-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-slate-900 text-white font-semibold shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-[#F4F2EC]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* PRODUCT CATEGORY 1: INVEST & COMPOUND */}
        {activeCategory === "invest" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-150">
            {/* Direct Mutual Funds */}
            <div className="product-card p-6 bg-white space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <PieChart className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Direct Mutual Funds</h3>
                    <div className="text-[11px] text-slate-500 font-mono">0% Commission Direct Plans</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Invest directly with AMCs without paying 1–1.5% regular distributor commissions. Direct plans compound higher returns over long horizons.
              </p>
              <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-mono flex items-center justify-between text-slate-700">
                <span>Distributor Commission:</span>
                <span className="font-bold text-[#00844F]">₹0 (Zero forever)</span>
              </div>
            </div>

            {/* Smart Step-Up SIPs */}
            <div className="product-card p-6 bg-white space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#00844F] flex items-center justify-center">
                    <Repeat className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Smart Step-Up SIPs</h3>
                    <div className="text-[11px] text-slate-500 font-mono">Automated Habit Building</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Set and forget automated monthly investments with an optional 10% annual step-up that scales naturally as your income grows.
              </p>
              <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-mono flex items-center justify-between text-slate-700">
                <span>Annual Increment Engine:</span>
                <span className="font-bold text-slate-900">+10% Automated</span>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCT CATEGORY 2: MARKETS & TRADING */}
        {activeCategory === "markets" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-150">
            {/* Stocks */}
            <div className="product-card p-6 bg-white space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E8FAF1] text-[#00844F] flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Direct Equities</h3>
                    <div className="text-[11px] text-slate-500 font-mono">NSE & BSE Cash Delivery</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct market access for long-term equity investing with zero brokerage on delivery trades. All shares settle directly into your independent CDSL account.
              </p>
              <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-mono flex items-center justify-between text-slate-700">
                <span>Equity Delivery Brokerage:</span>
                <span className="font-bold text-[#00844F]">₹0.00 / trade</span>
              </div>
            </div>

            {/* F&O Derivatives */}
            <div className="product-card p-6 bg-white space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">F&O Derivatives</h3>
                    <div className="text-[11px] text-slate-500 font-mono">Futures & Options Studio</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structure defined-risk multi-leg options strategies. Review real-time breakeven and max risk curves before sending orders to the exchange.
              </p>
              <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-mono flex items-center justify-between text-slate-700">
                <span>Options Payoff Analysis:</span>
                <span className="font-bold text-slate-900">Built-in Free</span>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCT CATEGORY 3: RESEARCH STUDIO */}
        {activeCategory === "research" && (
          <div className="product-card p-6 sm:p-8 bg-white space-y-4 animate-in fade-in duration-150">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#00844F] flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Institutional Equity Research</h3>
                <div className="text-[11px] text-slate-500 font-mono">Clarity Without Jargon</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Fermor distils earnings conference calls, quarterly filings, and balance sheet metrics into concise 60-second investment briefs. Understand business drivers rather than reacting to short-term headlines.
            </p>
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div>
                <div className="text-slate-500 text-[10px]">Coverage Focus</div>
                <div className="font-bold text-slate-900 mt-0.5">Top 250 Leaders</div>
              </div>
              <div>
                <div className="text-slate-500 text-[10px]">Analysis Format</div>
                <div className="font-bold text-slate-900 mt-0.5">60-Second Briefs</div>
              </div>
              <div>
                <div className="text-slate-500 text-[10px]">Data Integrity</div>
                <div className="font-bold text-[#00844F] mt-0.5">Audited Balance Sheets</div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCT CATEGORY 4: PORTFOLIO INTELLIGENCE */}
        {activeCategory === "portfolio" && (
          <div className="product-card p-6 sm:p-8 bg-white space-y-4 animate-in fade-in duration-150">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Unified Portfolio Consolidation</h3>
                <div className="text-[11px] text-slate-500 font-mono">Multi-Broker Reconciliation</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Reconcile holdings across Zerodha, Groww, bank Demats, and Sovereign Gold Bonds into one clean consolidated view with read-only tokens.
            </p>
            <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] text-xs font-mono flex items-center justify-between text-slate-700">
              <span>Depository Synchronization:</span>
              <span className="font-bold text-slate-900">Direct CDSL / NSDL Statements</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
