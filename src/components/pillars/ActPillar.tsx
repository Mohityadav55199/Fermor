"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { OPTIONS_STRATEGIES } from "@/lib/market-data";
import { Zap } from "lucide-react";

export const ActPillar: React.FC = () => {
  const [selectedStrategyId, setSelectedStrategyId] = useState<string>("bull-call-spread");
  const [marketScenarioNifty, setMarketScenarioNifty] = useState<number>(24950);

  const currentStrategy = OPTIONS_STRATEGIES.find((s) => s.id === selectedStrategyId) || OPTIONS_STRATEGIES[0];

  return (
    <section id="act" className="section-divider py-24 px-4 sm:px-6 lg:px-8 bg-[#05070A]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="badge badge-emerald mb-4">
            <Zap className="w-3.5 h-3.5" />
            Pillar 02 · Act
          </div>
          <div className="accent-bar mb-5" />
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-white tracking-tight leading-tight">
            Execute with precision.<br />
            <span className="text-fermor-400">Know your risk before you trade.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed max-w-2xl">
            Most retail derivative traders blow up because legacy brokerages treat F&O as a black box. Fermor gives you institutional payoff visualisers, automated stop-loss brackets, and sub-15ms DMA routing.
          </p>
        </div>

        {/* Options Studio */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#0D111A] overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 py-5 border-b border-white/[0.06]">
            <div>
              <div className="text-[10px] font-mono text-fermor-400 uppercase tracking-widest mb-1">Interactive F&O Payoff Simulator</div>
              <h3 className="text-lg font-bold text-white">Visual Derivatives Studio</h3>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 bg-[#05070A] p-1.5 rounded-xl border border-white/[0.06]">
              {OPTIONS_STRATEGIES.map((strat) => (
                <button
                  key={strat.id}
                  onClick={() => { soundFx.playClick(); setSelectedStrategyId(strat.id); }}
                  className={`px-3.5 py-1.5 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                    selectedStrategyId === strat.id
                      ? "bg-fermor-500/15 text-fermor-300 border border-fermor-500/25"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {strat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-6">
            {/* Chart */}
            <div className="lg:col-span-8 rounded-xl border border-white/[0.06] bg-[#05070A] p-5 space-y-5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fermor-400 animate-ping" />
                  <span className="text-white font-semibold">NIFTY 50 Expiry Payoff</span>
                  <span>(Underlying: 24,823.15)</span>
                </div>
                <span className="text-fermor-400">₹10 Flat Brokerage</span>
              </div>

              <div className="relative h-52 w-full">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
                  <line x1="20" y1="100" x2="480" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="94" fill="#64748b" fontSize="9" fontFamily="monospace">₹0 Breakeven</text>
                  <text x="25" y="28" fill="#00E599" fontSize="9" fontFamily="monospace">+ Profit Zone</text>
                  <text x="25" y="180" fill="#f43f5e" fontSize="9" fontFamily="monospace">− Loss Zone</text>

                  {currentStrategy.id === "bull-call-spread" && (
                    <>
                      <path d="M 50,150 L 220,150 L 350,40 L 480,40 L 480,100 L 280,100 L 50,100 Z" fill="rgba(0,229,153,0.06)" />
                      <path d="M 50,150 L 220,150 L 280,100 L 50,100 Z" fill="rgba(244,63,94,0.06)" />
                      <path d="M 50,150 L 220,150 L 350,40 L 480,40" fill="none" stroke="#00E599" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="220" cy="150" r="4" fill="#f43f5e" />
                      <text x="190" y="168" fill="#94a3b8" fontSize="8" fontFamily="monospace">Buy 24800 CE</text>
                      <circle cx="350" cy="40" r="4" fill="#00E599" />
                      <text x="320" y="30" fill="#00E599" fontSize="8" fontFamily="monospace">Sell 25100 CE</text>
                    </>
                  )}
                  {currentStrategy.id === "iron-condor" && (
                    <>
                      <path d="M 50,160 L 150,160 L 200,60 L 320,60 L 370,160 L 470,160" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="200" cy="60" r="4" fill="#38bdf8" />
                      <circle cx="320" cy="60" r="4" fill="#38bdf8" />
                      <text x="205" y="48" fill="#38bdf8" fontSize="9" fontFamily="monospace">24,600 – 25,000 sweet spot</text>
                    </>
                  )}
                  {currentStrategy.id === "long-straddle" && (
                    <>
                      <path d="M 50,30 L 260,160 L 470,30" fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="260" cy="160" r="4" fill="#f43f5e" />
                      <text x="210" y="178" fill="#f43f5e" fontSize="8" fontFamily="monospace">Max Loss at 24,800</text>
                    </>
                  )}

                  <line x1="300" y1="20" x2="300" y2="180" stroke="#fbbf24" strokeWidth="1.5" />
                  <rect x="258" y="4" width="84" height="17" rx="4" fill="#fbbf24" />
                  <text x="263" y="15" fill="#000" fontSize="9" fontWeight="bold" fontFamily="monospace">Nifty: {marketScenarioNifty}</text>
                </svg>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Simulate Expiry Level</span>
                  <span className="text-amber-400 font-bold">{marketScenarioNifty}</span>
                </div>
                <input
                  type="range" min="24200" max="25600" step="50" value={marketScenarioNifty}
                  onChange={(e) => { soundFx.playClick(); setMarketScenarioNifty(Number(e.target.value)); }}
                  className="w-full"
                  style={{ accentColor: "#00E599" }}
                />
              </div>
            </div>

            {/* Strategy metrics */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-xl border border-white/[0.06] bg-[#05070A] p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">Classification</span>
                  <span className="badge badge-emerald text-[10px]">{currentStrategy.type}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{currentStrategy.description}</p>

                <div className="grid grid-cols-2 gap-2 font-mono">
                  <div className="p-3 rounded-xl bg-[#0D111A] border border-white/[0.05]">
                    <div className="text-[9px] text-slate-500">Max Profit</div>
                    <div className="text-sm font-bold text-fermor-400 mt-0.5">{currentStrategy.maxProfit}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0D111A] border border-white/[0.05]">
                    <div className="text-[9px] text-slate-500">Max Loss</div>
                    <div className="text-sm font-bold text-rose-400 mt-0.5">{currentStrategy.maxLoss}</div>
                  </div>
                </div>

                <div className="space-y-2 text-[11px] font-mono text-slate-400">
                  {[
                    ["Breakeven", currentStrategy.breakeven, "text-white"],
                    ["Risk : Reward", currentStrategy.riskRewardRatio, "text-fermor-400"],
                    ["IV Environment", currentStrategy.ivPercentile, "text-slate-300"],
                  ].map(([k, v, cls]) => (
                    <div key={k} className="flex justify-between">
                      <span>{k}:</span>
                      <span className={`font-bold ${cls}`}>{v}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => soundFx.playSuccess()}
                  className="btn-primary w-full justify-center text-xs"
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  Deploy Strategy (₹10 Flat)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
