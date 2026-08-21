"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/audio";
import {
  Search,
  TrendingUp,
  Sliders,
  Zap,
  PieChart,
  FileSpreadsheet,
  X,
  ArrowRight,
  Sparkles,
  Command,
} from "lucide-react";

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction?: (actionId: string) => void;
}

interface PaletteItem {
  id: string;
  title: string;
  category: "Indices & Stocks" | "Tools & Simulators" | "Actions";
  description: string;
  href?: string;
  badge?: string;
}

const PALETTE_ITEMS: PaletteItem[] = [
  {
    id: "nifty",
    title: "NIFTY 50 (24,823.15)",
    category: "Indices & Stocks",
    description: "Benchmark Indian Equity Index • +0.58%",
    badge: "NSE",
  },
  {
    id: "reliance",
    title: "RELIANCE (₹2,984.50)",
    category: "Indices & Stocks",
    description: "Reliance Industries • Strong Buy • 94 Health Score",
    badge: "Largecap",
  },
  {
    id: "tatamotors",
    title: "TATAMOTORS (₹1,042.80)",
    category: "Indices & Stocks",
    description: "Tata Motors • EV & JLR Growth Catalyst",
    badge: "Auto",
  },
  {
    id: "hdfcbank",
    title: "HDFCBANK (₹1,648.20)",
    category: "Indices & Stocks",
    description: "HDFC Bank • Credit Growth & Deposit Accretion",
    badge: "Banking",
  },
  {
    id: "sip-calc",
    title: "Step-Up SIP & Compounding Engine",
    category: "Tools & Simulators",
    description: "Calculate generational wealth with annual step-up & inflation",
    href: "#calculator",
    badge: "Grow",
  },
  {
    id: "fno-payoff",
    title: "Options Payoff Visualizer",
    category: "Tools & Simulators",
    description: "Interactive strike & risk-reward payoff curve simulator",
    href: "#act",
    badge: "Act",
  },
  {
    id: "portfolio-aggregator",
    title: "Multi-Broker Wealth Sync",
    category: "Tools & Simulators",
    description: "Consolidate Zerodha, Groww, Demats & Gold in one pane",
    href: "#understand",
    badge: "Understand",
  },
  {
    id: "pricing-savings",
    title: "Brokerage Savings Calculator",
    category: "Tools & Simulators",
    description: "Calculate how much you save on ₹10 flat orders vs ₹20",
    href: "#pricing",
    badge: "₹10 Flat",
  },
  {
    id: "open-account",
    title: "Open Free Fermor Demat Account",
    category: "Actions",
    description: "100% paperless onboarding in under 3 minutes",
    badge: "Instant",
  },
];

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onSelectAction,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        soundFx.playClick();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filtered = PALETTE_ITEMS.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  const handleSelect = (item: PaletteItem) => {
    soundFx.playSuccess();
    if (item.href) {
      window.location.hash = item.href;
    }
    if (onSelectAction) {
      onSelectAction(item.id);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#0D121F] border border-white/20 rounded-3xl shadow-2xl shadow-black overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-fermor-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search stocks, mutual funds, calculators, shortcuts..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-white placeholder:text-slate-500 font-mono text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white bg-white/5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-1 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500 font-mono text-xs">
              No assets or tools matching &quot;{searchQuery}&quot;
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`p-3 rounded-2xl cursor-pointer flex items-center justify-between transition-all group ${
                  idx === selectedIndex
                    ? "bg-fermor-500/10 border border-fermor-500/20 text-white"
                    : "hover:bg-white/[0.04] text-slate-300"
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white font-mono group-hover:text-fermor-300">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400">{item.description}</div>
                </div>

                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-fermor-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#07090E] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 mr-1">↵</kbd>
              to select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 mr-1">ESC</kbd>
              to close
            </span>
          </div>
          <span className="text-fermor-400">Fermor Command Deck</span>
        </div>
      </div>
    </div>
  );
};
