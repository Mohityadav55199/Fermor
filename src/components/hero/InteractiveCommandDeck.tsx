"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { formatINR } from "@/lib/utils";
import {
  PieChart, Zap, TrendingUp, ShieldAlert, ArrowUpRight,
  RefreshCw, CheckCircle2, Sparkles,
} from "lucide-react";

export const InteractiveCommandDeck: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"understand" | "act" | "grow">("understand");
  const [switchedToDirect, setSwitchedToDirect] = useState(false);
  const [smartDipActive, setSmartDipActive] = useState(true);
  const [taxHarvested, setTaxHarvested] = useState(false);
  const [orderType, setOrderType] = useState<"BUY" | "SELL">("BUY");

  const tabs = [
    { id: "understand" as const, label: "Understand", icon: PieChart },
    { id: "act" as const, label: "Act", icon: Zap },
    { id: "grow" as const, label: "Grow", icon: TrendingUp },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-white/[0.08] bg-[#0A0E17] overflow-hidden shadow-2xl shadow-black/60">
      {/* Terminal header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-[#080C14] gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="w-px h-4 bg-white/[0.08] mx-1" />
          <span className="text-[11px] font-mono text-slate-500">
            Fermor Unified Terminal · <span className="text-fermor-400">v2.4 Live</span>
          </span>
        </div>

        {/* Tab controls */}
        <div className="flex items-center bg-[#05070A] p-1 rounded-xl border border-white/[0.06] w-full sm:w-auto">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { soundFx.playClick(); setActiveTab(id); }}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeTab === id
                  ? id === "understand"
                    ? "bg-blue-500/15 text-blue-300 border border-blue-500/25"
                    : id === "act"
                    ? "bg-fermor-500/15 text-fermor-300 border border-fermor-500/25"
                    : "bg-purple-500/15 text-purple-300 border border-purple-500/25"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* UNDERSTAND TAB */}
      {activeTab === "understand" && (
        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 animate-in fade-in duration-300">
          <div className="lg:col-span-7 space-y-4">
            {/* Net worth card */}
            <div className="rounded-xl p-5 border border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-fermor-400" />
                  Consolidated Net Worth · 4 Accounts
                </span>
                <span className="font-mono text-fermor-400 bg-fermor-500/10 px-2 py-0.5 rounded-full border border-fermor-500/20">
                  XIRR +21.4%
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold font-mono tnum text-white">{formatINR(4825400)}</span>
                <span className="flex items-center text-sm font-mono text-fermor-400">
                  <ArrowUpRight className="w-4 h-4" />
                  +19.4% YTD
                </span>
              </div>

              {/* Allocation bar */}
              <div className="mt-4 space-y-2">
                <div className="h-2 w-full rounded-full overflow-hidden flex gap-0.5 bg-transparent">
                  <div className="bg-fermor-500 rounded-l-full" style={{ width: "54%" }} />
                  <div className="bg-blue-500" style={{ width: "20%" }} />
                  <div className="bg-amber-400" style={{ width: "14%" }} />
                  <div className="bg-purple-500 rounded-r-full" style={{ width: "12%" }} />
                </div>
                <div className="grid grid-cols-4 text-[10px] font-mono text-slate-500">
                  {[
                    { color: "bg-fermor-500", label: "Equity 54%" },
                    { color: "bg-blue-500", label: "US 20%" },
                    { color: "bg-amber-400", label: "Gold 14%" },
                    { color: "bg-purple-500", label: "Debt 12%" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Broker pills */}
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { name: "Zerodha Kite", sub: "Synced 2m ago" },
                { name: "Groww / Coin", sub: "Synced 5m ago" },
                { name: "HDFC Demat", sub: "Real-time" },
              ].map((b) => (
                <div key={b.name} className="p-3 rounded-xl border border-white/[0.05] bg-white/[0.02] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fermor-400 animate-pulse flex-shrink-0" />
                  <div>
                    <div className="text-[11px] font-medium text-white">{b.name}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-5 space-y-4">
            {/* Health score */}
            <div className="rounded-xl p-5 border border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Portfolio Health</div>
                <div className="text-2xl font-bold text-white mt-1">
                  94 <span className="text-sm font-normal text-slate-500">/ 100</span>
                </div>
                <div className="text-[11px] text-fermor-400 mt-1">✓ Optimal diversification</div>
              </div>
              <div className="relative w-14 h-14">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-fermor-400" strokeDasharray="94, 100" strokeWidth="3"
                    strokeLinecap="round" stroke="currentColor" fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold font-mono text-white">94%</span>
              </div>
            </div>

            {/* Fee leak detector */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              switchedToDirect ? "border-fermor-500/25 bg-fermor-500/5" : "border-amber-500/25 bg-amber-500/5"
            }`}>
              <div className="flex items-start gap-3">
                <div className={`p-1.5 rounded-lg ${switchedToDirect ? "bg-fermor-500/15 text-fermor-400" : "bg-amber-500/15 text-amber-400"}`}>
                  {switchedToDirect ? <CheckCircle2 className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white mb-1">
                    {switchedToDirect ? "Expense Leaks Resolved" : "Expense Leak Detected"}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {switchedToDirect
                      ? "Switched 2 Regular MFs to Direct. Saving ₹34,200/yr."
                      : "2 Regular Funds charging 1.1% distributor fee. Switch now."}
                  </p>
                  <button
                    onClick={() => { soundFx.playSuccess(); setSwitchedToDirect(!switchedToDirect); }}
                    className={`mt-2.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      switchedToDirect
                        ? "bg-white/8 text-slate-400 hover:bg-white/15"
                        : "bg-amber-500 text-black hover:bg-amber-400"
                    }`}
                  >
                    <RefreshCw className={`w-3 h-3 ${switchedToDirect ? "" : "animate-spin"}`} />
                    {switchedToDirect ? "Reset" : "Convert to Direct (Save ₹34.2K)"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ACT TAB */}
      {activeTab === "act" && (
        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 animate-in fade-in duration-300">
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-xl p-5 border border-white/[0.06] bg-white/[0.02] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">NIFTY 24800 CALL</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">28 AUG EXP · NSE FO</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold font-mono tnum text-fermor-400">₹142.80</div>
                  <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1 justify-end">
                    <Zap className="w-3 h-3 text-fermor-400" /> &lt;12ms DMA
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {(["BUY", "SELL"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => { soundFx.playClick(); setOrderType(type); }}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      orderType === type
                        ? type === "BUY"
                          ? "bg-blue-600 text-white"
                          : "bg-rose-600 text-white"
                        : "bg-white/5 text-slate-500 hover:text-white"
                    }`}
                  >
                    {type === "BUY" ? "BUY (Call)" : "SELL (Short)"}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <div className="text-[10px] text-slate-500 mb-1">Qty (25/lot)</div>
                  <div className="px-3 py-2 bg-[#05070A] border border-white/[0.06] rounded-lg text-white">50 (2 Lots)</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 mb-1">Brokerage</div>
                  <div className="px-3 py-2 bg-[#05070A] border border-white/[0.06] rounded-lg text-fermor-400 font-bold flex justify-between">
                    ₹10 Flat <span className="line-through text-slate-600">₹20</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => soundFx.playSuccess()}
                className="btn-primary w-full justify-center"
              >
                <Zap className="w-4 h-4 fill-current" />
                Execute Lightning Order
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-xl p-5 border border-white/[0.06] bg-white/[0.02] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-fermor-400" />
                  <span className="font-bold text-white text-sm">Smart SIP Dip-Buyer</span>
                </div>
                <span className="badge badge-purple">Automated</span>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                Automatically triggers extra SIP investment when Nifty dips &gt;1.5% intraday.
              </p>

              <div className="p-3 rounded-xl bg-[#05070A] border border-white/[0.05] space-y-2 text-xs">
                {[
                  ["Trigger", "NIFTY 50 dips > 1.5%"],
                  ["Auto Top-Up", "+₹5,000 extra"],
                  ["Target Fund", "Parag Parikh Flexi (Direct)"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between text-slate-400">
                    <span>{k}:</span>
                    <span className="text-slate-200 font-mono">{v}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Status</span>
                <button
                  onClick={() => { soundFx.playClick(); setSmartDipActive(!smartDipActive); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                    smartDipActive
                      ? "bg-fermor-500/12 text-fermor-300 border-fermor-500/25"
                      : "bg-white/5 text-slate-400 border-white/10"
                  }`}
                >
                  {smartDipActive ? "● ACTIVE" : "○ PAUSED"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GROW TAB */}
      {activeTab === "grow" && (
        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 animate-in fade-in duration-300">
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-xl p-5 border border-white/[0.06] bg-white/[0.02] space-y-4">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-slate-500 uppercase tracking-wider">Step-Up Compounding</span>
                <span className="text-purple-400 font-mono">15 Yr · 14% CAGR</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#05070A] border border-white/[0.05]">
                  <div className="text-[10px] text-slate-500">Total Invested</div>
                  <div className="text-xl font-bold font-mono tnum text-slate-200 mt-1">{formatINR(4560000)}</div>
                  <div className="text-[10px] text-slate-600 mt-0.5">₹15K/mo + 10% step-up</div>
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20">
                  <div className="text-[10px] text-purple-300">Projected Wealth</div>
                  <div className="text-xl font-bold font-mono tnum text-fermor-400 mt-1">{formatINR(16280000)}</div>
                  <div className="text-[10px] text-fermor-400/70 mt-0.5">+₹1.17 Cr wealth created</div>
                </div>
              </div>

              {/* Compounding curve */}
              <div className="h-20 w-full">
                <svg className="w-full h-full" viewBox="0 0 300 80">
                  <defs>
                    <linearGradient id="comp-g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00E599" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00E599" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0,75 Q 75,70 150,55 T 300,10 L 300,80 L 0,80 Z" fill="url(#comp-g)" />
                  <path d="M 0,75 Q 75,70 150,55 T 300,10" fill="none" stroke="#00E599" strokeWidth="2.5" />
                  <circle cx="300" cy="10" r="3" fill="#00E599" className="animate-ping opacity-75" />
                  <circle cx="300" cy="10" r="3" fill="#00E599" />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl p-5 border border-white/[0.06] bg-white/[0.02] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm">Tax-Loss Harvesting</span>
                <span className="badge badge-emerald">Save Tax</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Offset STCG tax legally by realizing loss positions without disrupting allocation.
              </p>
              <div className="p-3 rounded-xl bg-[#05070A] border border-white/[0.05] space-y-2 text-xs">
                {[
                  ["Tax Offset", "₹42,500"],
                  ["STCG Saved", "₹8,500 (20% bracket)"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-slate-400">
                    <span>{k}:</span>
                    <span className="text-fermor-400 font-mono font-bold">{v}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => { soundFx.playSuccess(); setTaxHarvested(!taxHarvested); }}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                  taxHarvested
                    ? "bg-fermor-500/12 text-fermor-300 border-fermor-500/25"
                    : "bg-white/5 hover:bg-white/10 text-white border-white/10"
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                {taxHarvested ? "✓ Tax Offset Queued" : "Harvest Tax Loss FY25-26"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
