"use client";

import React, { useEffect, useState } from "react";
import { MARKET_INDICES, MarketIndex } from "@/lib/market-data";
import { TrendingUp, TrendingDown, Clock, Sparkles } from "lucide-react";
import { soundFx } from "@/lib/audio";

export const MarketTicker: React.FC = () => {
  const [indices, setIndices] = useState<MarketIndex[]>(MARKET_INDICES);
  const [activeTickId, setActiveTickId] = useState<string | null>(null);

  // Simulate subtle real-time market micro-ticks
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * indices.length);
      const delta = (Math.random() - 0.48) * (indices[randomIndex].price * 0.0004);

      setIndices((prev) =>
        prev.map((idx, i) => {
          if (i === randomIndex) {
            const newPrice = Number((idx.price + delta).toFixed(2));
            const newChange = Number((idx.change + delta).toFixed(2));
            const newChangePercent = Number(((newChange / (idx.price - idx.change)) * 100).toFixed(2));
            return {
              ...idx,
              price: newPrice,
              change: newChange,
              changePercent: newChangePercent,
            };
          }
          return idx;
        })
      );

      setActiveTickId(indices[randomIndex].id);
      setTimeout(() => setActiveTickId(null), 1200);
    }, 2800);

    return () => clearInterval(interval);
  }, [indices]);

  return (
    <div className="w-full bg-[#05070A] dark:bg-[#05070A] light:bg-slate-100 border-b border-white/[0.06] text-xs font-mono select-none overflow-hidden relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1.5 border-b border-white/[0.04]">
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 font-sans font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            NSE / BSE Real-time
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
            <Clock className="w-3 h-3 text-slate-400" />
            09:15 - 15:30 IST • Supercharged Latency &lt; 15ms
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-slate-400 font-sans">
          <span className="hidden md:inline-flex items-center gap-1 text-fermor-400 bg-fermor-500/5 px-2 py-0.5 rounded border border-fermor-500/10">
            <Sparkles className="w-3 h-3 text-fermor-400" />
            Direct Mutual Funds & Equity Delivery: ₹0 Brokerage
          </span>
          <div className="text-slate-400 text-[10px]">
            SEBI Reg: <span className="text-slate-300 font-mono">INZ000301438</span>
          </div>
        </div>
      </div>

      {/* Ticker marquee */}
      <div className="flex items-center overflow-hidden whitespace-nowrap py-1.5 hover:pause relative group">
        <div className="flex items-center gap-8 animate-ticker pl-4">
          {[...indices, ...indices].map((idx, i) => {
            const isPositive = idx.change >= 0;
            const isTicking = activeTickId === idx.id;

            return (
              <div
                key={`${idx.id}-${i}`}
                onClick={() => soundFx.playClick()}
                className={`inline-flex items-center gap-2 cursor-pointer transition-colors duration-200 px-2 py-0.5 rounded ${
                  isTicking
                    ? isPositive
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-rose-500/20 text-rose-300"
                    : "hover:bg-white/[0.04]"
                }`}
              >
                <span className="text-slate-300 font-semibold text-[11px]">
                  {idx.symbol}
                </span>
                <span className="text-white font-medium tnum text-[11px]">
                  {idx.price.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <span
                  className={`flex items-center text-[10px] font-medium tnum ${
                    isPositive ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {isPositive ? (
                    <TrendingUp className="w-2.5 h-2.5 mr-0.5" />
                  ) : (
                    <TrendingDown className="w-2.5 h-2.5 mr-0.5" />
                  )}
                  {isPositive ? "+" : ""}
                  {idx.changePercent}%
                </span>
                <span className="text-slate-500 text-[9px] ml-1 opacity-60">|</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
