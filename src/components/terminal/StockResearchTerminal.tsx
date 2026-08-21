"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { RESEARCH_STOCKS, StockData } from "@/lib/market-data";
import {
  LineChart, TrendingUp, TrendingDown,
  Sparkles, Zap, CheckCircle2, ArrowUpRight,
} from "lucide-react";

export const StockResearchTerminal: React.FC = () => {
  const [selectedStockSymbol, setSelectedStockSymbol] = useState<string>("RELIANCE");
  const [selectedTimeframe, setSelectedTimeframe] = useState<"1D" | "1W" | "1M" | "1Y" | "5Y">("1Y");

  const stock: StockData =
    RESEARCH_STOCKS.find((s) => s.symbol === selectedStockSymbol) || RESEARCH_STOCKS[0];

  const currentHistory = stock.historical[selectedTimeframe];
  const prices = currentHistory.prices;
  const labels = currentHistory.labels;
  const minPrice = Math.min(...prices) * 0.98;
  const maxPrice = Math.max(...prices) * 1.02;

  const points = prices.map((price, idx) => {
    const x = (idx / (prices.length - 1)) * 460 + 20;
    const y = 160 - ((price - minPrice) / (maxPrice - minPrice)) * 130;
    return `${x},${y}`;
  });

  const pathD = `M ${points.join(" L ")}`;
  const areaD = `${pathD} L ${points[points.length - 1].split(",")[0]},180 L ${points[0].split(",")[0]},180 Z`;
  const isPositive = stock.change >= 0;

  const sentimentColor =
    stock.sentiment === "Strong Buy" ? "text-fermor-400 bg-fermor-500/10 border-fermor-500/25" :
    stock.sentiment === "Buy" ? "text-blue-400 bg-blue-500/10 border-blue-500/25" :
    stock.sentiment === "Accumulate" ? "text-amber-400 bg-amber-500/10 border-amber-500/25" :
    "text-slate-400 bg-white/5 border-white/10";

  return (
    <section id="research" className="section-divider py-24 px-4 sm:px-6 lg:px-8 bg-[#05070A]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="badge badge-amber mb-1">
              <LineChart className="w-3.5 h-3.5" />
              Research Studio
            </div>
            <div className="accent-bar mb-5" style={{ background: "linear-gradient(90deg, #f59e0b, #fcd34d)" }} />
            <h2 className="text-[36px] sm:text-[48px] font-extrabold text-white tracking-tight leading-tight">
              Institutional intelligence.<br />
              <span className="text-amber-400">Zero corporate jargon.</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Balance sheets, earnings concalls, and business catalysts distilled into actionable 60-second intelligence briefs.
            </p>
          </div>

          {/* Stock selector */}
          <div className="flex items-center gap-2 flex-wrap">
            {RESEARCH_STOCKS.map((item) => (
              <button
                key={item.symbol}
                onClick={() => { soundFx.playClick(); setSelectedStockSymbol(item.symbol); }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap border ${
                  selectedStockSymbol === item.symbol
                    ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border-white/[0.06]"
                }`}
              >
                {item.symbol}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal card */}
        <div className="rounded-2xl border border-white/[0.07] bg-[#0D111A] overflow-hidden">
          {/* Top bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 border-b border-white/[0.06] bg-[#080C14]">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-2xl font-extrabold text-white font-mono">{stock.symbol}</h3>
              <span className="text-xs text-slate-400 font-sans">{stock.name}</span>
              <span className={`badge text-[10px] border ${sentimentColor}`}>{stock.sentiment}</span>
              <span className="badge badge-blue text-[10px]">{stock.sector}</span>
            </div>

            <div className="flex items-baseline gap-3">
              <div className="text-2xl font-extrabold font-mono tnum text-white">
                ₹{stock.price.toFixed(2)}
              </div>
              <div className={`flex items-center text-xs font-mono font-bold ${isPositive ? "text-fermor-400" : "text-rose-400"}`}>
                {isPositive ? <TrendingUp className="w-3.5 h-3.5 mr-1" /> : <TrendingDown className="w-3.5 h-3.5 mr-1" />}
                {isPositive ? "+" : ""}{stock.change.toFixed(2)} ({stock.changePercent}%)
              </div>
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-6">
            {/* Chart panel */}
            <div className="lg:col-span-8 rounded-xl border border-white/[0.06] bg-[#05070A] p-5 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex bg-[#0D111A] p-1 rounded-lg border border-white/[0.05] gap-0.5">
                  {(["1D", "1W", "1M", "1Y", "5Y"] as const).map((tf) => (
                    <button
                      key={tf}
                      onClick={() => { soundFx.playClick(); setSelectedTimeframe(tf); }}
                      className={`px-3 py-1 rounded text-[11px] font-mono font-semibold transition-all ${
                        selectedTimeframe === tf
                          ? "bg-amber-500/20 text-amber-300"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
                <span className="text-xs font-mono text-slate-500 hidden sm:block">
                  H: ₹{Math.max(...prices).toFixed(2)} · L: ₹{Math.min(...prices).toFixed(2)}
                </span>
              </div>

              <div className="relative h-52">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
                  <defs>
                    <linearGradient id="chart-g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.20" />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[30, 100, 170].map((y) => (
                    <line key={y} x1="20" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,0.05)" strokeDasharray="4" />
                  ))}
                  <path d={areaD} fill="url(#chart-g)" />
                  <path d={pathD} fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  {points.map((pt, idx) => {
                    const [cx, cy] = pt.split(",");
                    return (
                      <circle key={idx} cx={cx} cy={cy} r="3.5"
                        fill="#07090E" stroke="#F59E0B" strokeWidth="2"
                        className="hover:r-5 cursor-pointer transition-all"
                      />
                    );
                  })}
                  <circle cx={points[points.length - 1].split(",")[0]} cy={points[points.length - 1].split(",")[1]} r="4" fill="#F59E0B">
                    <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <div className="flex justify-between px-4 pt-1 text-[10px] font-mono text-slate-500">
                  {labels.map((lbl, i) => <span key={i}>{lbl}</span>)}
                </div>
              </div>

              {/* Executive thesis */}
              <div className="p-4 rounded-xl bg-[#0D111A] border border-white/[0.05] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Executive Thesis
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{stock.overview}</p>
              </div>
            </div>

            {/* Metrics panel */}
            <div className="lg:col-span-4 space-y-4">
              {/* Health meter */}
              <div className="rounded-xl border border-white/[0.06] bg-[#05070A] p-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Health Score</span>
                  <span className="font-bold text-fermor-400">{stock.healthScore} / 100</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-fermor-500 to-fermor-400 rounded-full transition-all duration-500"
                    style={{ width: `${stock.healthScore}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 font-mono">
                  <div className="p-3 rounded-xl bg-[#0D111A] border border-white/[0.05]">
                    <div className="text-[9px] text-slate-500">P/E Ratio</div>
                    <div className="text-sm font-bold text-white mt-0.5">{stock.pe}x</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0D111A] border border-white/[0.05]">
                    <div className="text-[9px] text-slate-500">Market Cap</div>
                    <div className="text-sm font-bold text-white mt-0.5">{stock.marketCap}</div>
                  </div>
                </div>
              </div>

              {/* Catalysts */}
              <div className="rounded-xl border border-white/[0.06] bg-[#05070A] p-5 space-y-3">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Upcoming Catalysts
                </div>
                <ul className="space-y-2.5">
                  {stock.catalysts.map((cat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{cat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => soundFx.playSuccess()}
                  className="btn-secondary w-full justify-center text-xs mt-1"
                  style={{ padding: "8px 16px" }}
                >
                  Read Full Analysis
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
