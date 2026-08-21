"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { formatINR } from "@/lib/utils";
import { PieChart, ShieldCheck, ArrowRight, CheckCircle, RefreshCw } from "lucide-react";

export const UnderstandPillar: React.FC = () => {
  const [selectedView, setSelectedView] = useState<"overlap" | "direct">("overlap");

  return (
    <section id="understand" className="section-divider py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="badge badge-blue mb-4">
            <PieChart className="w-3.5 h-3.5" />
            Pillar 01 · Understand
          </div>
          <div className="accent-bar mb-5" />
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-white tracking-tight leading-tight">
            Stop checking five apps.<br />
            <span className="text-blue-400">One view for your entire wealth.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed max-w-2xl">
            Connect your Zerodha, Groww, bank Demat, and SGBs. Fermor consolidates everything into a live net worth dashboard with real XIRR, hidden fee detection, and portfolio health scoring.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main card — Multi-broker aggregator */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 border border-white/[0.07] bg-[#0D111A] card-hover flex flex-col gap-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Multi-Broker Reconciliation</div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  One consolidated ledger for your<br className="hidden sm:block" /> family&apos;s entire financial footprint.
                </h3>
              </div>
              <span className="badge badge-emerald flex-shrink-0">● CDSL / NSDL</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Connect with read-only tokens. No manual exports. Fermor normalises corporate actions, stock splits, dividends, and bonus shares automatically.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "Zerodha Kite", return: "+24.2%", val: "₹24,80,000", sub: "18 Direct Equities" },
                { name: "Groww / AMC", return: "+19.8%", val: "₹16,45,000", sub: "4 Mutual Funds" },
                { name: "RBI SGB / Gold", return: "+16.5%", val: "₹7,00,400", sub: "Tranche 2020-21", amber: true },
              ].map((b) => (
                <div key={b.name} className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.015] space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">{b.name}</span>
                    <span className={`font-mono font-bold ${b.amber ? "text-amber-400" : "text-fermor-400"}`}>{b.return}</span>
                  </div>
                  <div className="text-base font-bold font-mono tnum text-white">{b.val}</div>
                  <div className="text-[10px] text-slate-500">{b.sub}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-fermor-400" />
              Zero transaction permissions required · Read-only reconciliation
            </div>
          </div>

          {/* Portfolio intelligence card */}
          <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 border border-white/[0.07] bg-[#0D111A] card-hover flex flex-col justify-between gap-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">Portfolio Intelligence</div>
                <div className="flex items-center bg-[#05070A] p-0.5 rounded-lg border border-white/[0.06]">
                  {(["overlap", "direct"] as const).map((v) => (
                    <button
                      key={v}
                      onClick={() => { soundFx.playClick(); setSelectedView(v); }}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono font-semibold transition-all ${
                        selectedView === v
                          ? v === "overlap" ? "bg-blue-500/20 text-blue-300" : "bg-fermor-500/15 text-fermor-300"
                          : "text-slate-500"
                      }`}
                    >
                      {v === "overlap" ? "Overlap" : "Direct Plan"}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white">
                {selectedView === "overlap" ? "Hidden Portfolio Overlaps" : "Commission Drag Calculator"}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {selectedView === "overlap"
                  ? "5 mutual funds don't mean diversification if they all hold the same 15 large-cap stocks."
                  : "Regular plans silently deduct 1.0–1.5% annually. Over 20 years, that's 28% of your corpus gone."}
              </p>
            </div>

            {selectedView === "overlap" ? (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-3">
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Parag Parikh Flexi Cap</span>
                  <span className="text-amber-400 font-bold">42% Overlap</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>UTI Nifty 50 Index Fund</span>
                  <span>14 Common Stocks</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: "42%" }} />
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  Common: <span className="text-slate-300">HDFCBANK, RELIANCE, ICICIBANK, ITC, INFY</span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2.5">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Regular Plan Commission:</span>
                  <span className="text-rose-400 font-bold">1.25% p.a.</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Fermor Direct Plan:</span>
                  <span className="text-fermor-400 font-bold">0.00%</span>
                </div>
                <div className="rounded-xl border border-fermor-500/20 bg-fermor-500/5 p-2.5 text-center text-xs text-slate-300">
                  20-Year Compounded Savings: <span className="text-fermor-400 font-mono font-bold">₹38,40,000+</span>
                </div>
              </div>
            )}

            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-fermor-400" />
              Automatic engine included free with Fermor
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
