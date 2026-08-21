"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { BROKER_COMPARISON } from "@/lib/market-data";
import { formatINR } from "@/lib/utils";
import { FileSpreadsheet, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  onOpenOnboarding: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenOnboarding }) => {
  const [monthlyTrades, setMonthlyTrades] = useState<number>(40);

  const legacyBrokerCostYear = monthlyTrades * 20 * 12 + 354;
  const fermorBrokerCostYear = monthlyTrades * 10 * 12;
  const annualSavings = legacyBrokerCostYear - fermorBrokerCostYear;

  const pricingCards = [
    {
      tag: "Long-Term Wealth",
      tagColor: "text-fermor-400",
      title: "Equity & Investments",
      price: "₹0",
      priceLabel: "Free Forever",
      desc: "Zero brokerage on all NSE/BSE Equity Delivery investments and Sovereign Gold Bonds.",
      features: ["₹0 Equity Delivery", "₹0 Demat Account Opening", "₹0 Annual Maintenance (AMC)"],
      featureColor: "text-fermor-400",
      featured: false,
    },
    {
      tag: "Active Trading",
      tagColor: "text-fermor-400",
      title: "F&O & Intraday",
      price: "₹10",
      priceLabel: "Flat per executed order",
      desc: "50% cheaper than legacy platforms. Built with sub-15ms DMA routing.",
      features: ["₹10 Flat (vs ₹20 elsewhere)", "Free Payoff Visualizer included", "Zero terminal subscription fees"],
      featureColor: "text-fermor-400",
      featured: true,
      badge: "50% Cheaper",
    },
    {
      tag: "Direct Plans",
      tagColor: "text-purple-400",
      title: "Mutual Funds",
      price: "₹0",
      priceLabel: "Zero Commission",
      desc: "100% Direct Mutual Funds with automated Step-Up SIP capabilities.",
      features: ["0.0% Distributor Commission", "Free Smart SIP Dip-Buyer", "Multi-Broker Overlap Scanner"],
      featureColor: "text-purple-400",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="section-divider py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="badge badge-emerald mb-1">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <div className="accent-bar mb-5" />
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-white tracking-tight leading-tight">
            No asterisks. No hidden fees.<br />
            <span className="text-fermor-400">Keep 100% of your gains.</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
            We don&apos;t charge account maintenance fees, call-and-trade markups, or mutual fund platform commissions. A clean, flat ₹10 on derivatives — that&apos;s it.
          </p>
        </div>

        {/* 3 Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricingCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-7 border flex flex-col justify-between gap-6 relative card-hover transition-all duration-300 ${
                card.featured
                  ? "pricing-featured border-fermor-500/30"
                  : "border-white/[0.07] bg-[#0D111A]"
              }`}
            >
              {card.badge && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-fermor-500 text-[#07090E] font-extrabold font-mono text-[10px] uppercase tracking-wide shadow">
                  {card.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className={`text-[10px] font-mono font-bold uppercase tracking-widest ${card.tagColor}`}>{card.tag}</div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <div className="flex items-baseline gap-2.5">
                  <span className={`text-5xl font-extrabold font-mono ${card.featured ? "text-fermor-400" : "text-white"}`}>{card.price}</span>
                  <span className="text-xs font-mono text-slate-400">{card.priceLabel}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
              </div>

              <ul className="space-y-3 pt-5 border-t border-white/[0.05]">
                {card.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${card.featureColor}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Savings calculator */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#0D111A] p-6 sm:p-8 space-y-8">
          <div className="space-y-1">
            <div className="text-[10px] font-mono text-fermor-400 uppercase tracking-widest">Interactive Calculator</div>
            <h3 className="text-xl font-bold text-white">See how much you save every year</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Monthly F&O / Intraday Orders:</span>
                <span className="text-fermor-400 font-bold text-lg tnum">{monthlyTrades}</span>
              </div>
              <input
                type="range" min="5" max="200" step="5" value={monthlyTrades}
                onChange={(e) => { soundFx.playClick(); setMonthlyTrades(Number(e.target.value)); }}
                className="w-full"
                style={{ accentColor: "#00E599" }}
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>5 orders</span>
                <span>100 orders</span>
                <span>200 orders</span>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-6 p-5 rounded-xl bg-[#05070A] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-[11px] text-slate-500 font-mono">Your Annual Savings with Fermor:</div>
                <div className="text-3xl font-extrabold font-mono tnum text-fermor-400">
                  {formatINR(annualSavings)} <span className="text-xs text-slate-400 font-normal">/ yr</span>
                </div>
                <div className="text-[11px] text-slate-500">vs. ₹20/order legacy platforms + AMC</div>
              </div>
              <button
                onClick={() => { soundFx.playSuccess(); onOpenOnboarding(); }}
                className="btn-primary whitespace-nowrap"
              >
                Switch & Save
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#0D111A] overflow-hidden">
          <div className="px-6 py-5 border-b border-white/[0.06]">
            <h3 className="font-bold text-white text-base">Brokerage & Feature Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/[0.06] text-slate-400">
                  <th className="px-6 py-4 font-semibold text-slate-300 min-w-[180px]">Feature</th>
                  <th className="px-4 py-4 font-bold text-fermor-400">Fermor</th>
                  <th className="px-4 py-4 text-slate-400">Zerodha</th>
                  <th className="px-4 py-4 text-slate-400">Groww</th>
                  <th className="px-4 py-4 text-slate-400">ICICI Direct</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {BROKER_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-slate-200 font-sans font-medium">{row.feature}</td>
                    <td className="px-4 py-4 font-bold text-fermor-400">{row.fermor}</td>
                    <td className="px-4 py-4 text-slate-400">{row.zerodha}</td>
                    <td className="px-4 py-4 text-slate-400">{row.groww}</td>
                    <td className="px-4 py-4 text-slate-400">{row.iciciDirect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
