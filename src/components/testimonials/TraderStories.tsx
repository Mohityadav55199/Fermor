"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { Star, MessageSquare } from "lucide-react";

interface Story {
  name: string;
  role: string;
  city: string;
  category: "wealth" | "fno" | "multi";
  portfolio: string;
  headline: string;
  quote: string;
  stat: string;
  statColor: string;
}

const STORIES: Story[] = [
  {
    name: "Aditya Roy",
    role: "Engineering Director",
    city: "Bengaluru",
    category: "wealth",
    portfolio: "₹65L Net Worth",
    headline: "The Step-Up SIP Engine doubled my retirement projection.",
    quote:
      "I was running static SIPs for 6 years on Groww without realizing how much money I was losing to inflation. Fermor's automated 10% annual step-up plus the direct plan converter saved me ₹4.2 Lakhs in fees alone.",
    stat: "+22.4% XIRR · 4 Years",
    statColor: "text-fermor-400 bg-fermor-500/8 border-fermor-500/20",
  },
  {
    name: "Priyanka Shenoy",
    role: "Full-Time Derivatives Trader",
    city: "Mumbai",
    category: "fno",
    portfolio: "₹1.2Cr/Day Turnover",
    headline: "The Payoff Simulator stopped me from taking reckless delta risk.",
    quote:
      "Every other broker just lets you buy naked calls with zero context. Fermor shows you the exact breakeven and max loss curve before you place the order. Plus ₹10 flat brokerage saved me ₹80,000 this financial year.",
    stat: "Saved ₹84,000 Brokerage",
    statColor: "text-blue-400 bg-blue-500/8 border-blue-500/20",
  },
  {
    name: "Vikramaditya Kulkarni",
    role: "Angel Investor & Founder",
    city: "Pune",
    category: "multi",
    portfolio: "₹2.8Cr Multi-Broker",
    headline: "Finally, one clean dashboard for Zerodha, ICICI, and Gold.",
    quote:
      "I had 14 Excel sheets trying to calculate my family's consolidated XIRR across 3 Demats and SGBs. Fermor's multi-broker reconciliation synced everything in under 60 seconds. Flawless execution.",
    stat: "100% Consolidated View",
    statColor: "text-purple-400 bg-purple-500/8 border-purple-500/20",
  },
  {
    name: "Rohan Malhotra",
    role: "Fintech Product Manager",
    city: "Gurugram",
    category: "wealth",
    portfolio: "₹28L Mutual Funds",
    headline: "The Smart Dip-Buyer is pure algorithmic alpha.",
    quote:
      "Whenever Nifty fell 1.5% during intraday market corrections, Fermor automatically topped up my flexi-cap fund. Buying those dips consistently added nearly 2.8% extra annual return to my portfolio.",
    stat: "+3.1% Alpha from Dips",
    statColor: "text-amber-400 bg-amber-500/8 border-amber-500/20",
  },
];

const FILTERS = [
  { key: "all", label: "All Investors" },
  { key: "wealth", label: "SIP Builders" },
  { key: "fno", label: "F&O Traders" },
  { key: "multi", label: "HNI Portfolios" },
] as const;

export const TraderStories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "wealth" | "fno" | "multi">("all");

  const filteredStories =
    selectedCategory === "all"
      ? STORIES
      : STORIES.filter((s) => s.category === selectedCategory);

  return (
    <section className="section-divider py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="badge badge-emerald mb-1">
              <MessageSquare className="w-3.5 h-3.5" />
              Investor Stories
            </div>
            <div className="accent-bar mb-5" />
            <h2 className="text-[36px] sm:text-[48px] font-extrabold text-white tracking-tight leading-tight">
              Trusted by 1,50,000+<br />
              <span className="text-fermor-400">smart Indian investors.</span>
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-1.5 bg-[#0D111A] p-1.5 rounded-xl border border-white/[0.07] overflow-x-auto no-scrollbar">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => { soundFx.playClick(); setSelectedCategory(key); }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === key
                    ? "bg-fermor-500/15 text-fermor-300 border border-fermor-500/25"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredStories.map((story, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 border border-white/[0.07] bg-[#0D111A] flex flex-col justify-between gap-6 card-hover group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className={`badge text-[10px] border ${story.statColor}`}>{story.stat}</span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug group-hover:text-fermor-400 transition-colors">
                  &ldquo;{story.headline}&rdquo;
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">{story.quote}</p>
              </div>

              <div className="pt-5 border-t border-white/[0.05] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{story.name}</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    {story.role} · {story.city}
                  </div>
                </div>
                <span className="badge badge-blue text-[10px]">{story.portfolio}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
