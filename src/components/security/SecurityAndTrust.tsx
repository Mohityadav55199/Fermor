"use client";

import React from "react";
import {
  ShieldCheck, Lock, Landmark, FileCheck,
  Server, Fingerprint, CheckCircle2, AlertTriangle,
} from "lucide-react";

const pillars = [
  {
    icon: Landmark,
    color: "text-fermor-400",
    bg: "bg-fermor-500/8",
    border: "border-fermor-500/20",
    title: "Direct CDSL Demat Custody",
    body: "Shares and mutual fund units are held in your independent CDSL demat account with direct SMS/Email alerts from the depository.",
    proof: "100% Insolvency Immune",
  },
  {
    icon: FileCheck,
    color: "text-blue-400",
    bg: "bg-blue-500/8",
    border: "border-blue-500/20",
    title: "SEBI Registered Member",
    body: "Registered Stock Broker & Research Analyst complying with all SEBI, NSE, BSE, and MCX investor protection guidelines.",
    proof: "Reg: INZ000301438",
  },
  {
    icon: Fingerprint,
    color: "text-purple-400",
    bg: "bg-purple-500/8",
    border: "border-purple-500/20",
    title: "FIDO2 Biometric 2FA",
    body: "Hardware passkeys (TouchID, FaceID, YubiKey) and 256-bit AES encryption. No passwords stored in plain text.",
    proof: "SOC2 Type II Certified",
  },
  {
    icon: Server,
    color: "text-amber-400",
    bg: "bg-amber-500/8",
    border: "border-amber-500/20",
    title: "99.99% Execution Uptime",
    body: "Multi-region active-active colocation directly at NSE/BSE server cages in Mumbai with sub-15ms round-trip latency.",
    proof: "Direct Exchange Leased Lines",
  },
];

export const SecurityAndTrust: React.FC = () => {
  return (
    <section id="security" className="section-divider py-24 px-4 sm:px-6 lg:px-8 bg-[#05070A]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="badge badge-emerald mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            Security & Regulation
          </div>
          <div className="accent-bar mb-5" />
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-white tracking-tight leading-tight">
            Your wealth is sacred.<br />
            <span className="text-fermor-400">Institutional custody by design.</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
            Your shares are deposited in your name directly with CDSL. Even in the extreme theoretical event of Fermor shutting down, your stocks and mutual funds remain 100% yours.
          </p>
        </div>

        {/* 4-pillar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ icon: Icon, color, bg, border, title, body, proof }) => (
            <div
              key={title}
              className="rounded-2xl p-6 border border-white/[0.06] bg-[#0D111A] space-y-4 card-hover"
            >
              <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white leading-snug">{title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{body}</p>
              <div className={`text-[11px] font-mono flex items-center gap-1.5 ${color}`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                {proof}
              </div>
            </div>
          ))}
        </div>

        {/* Risk notice */}
        <div className="p-5 rounded-xl border border-amber-500/20 bg-amber-950/15 flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-slate-400 leading-relaxed">
            <span className="font-bold text-amber-300 font-mono block">
              Statutory Risk Warning on Derivatives (F&O) Trading:
            </span>
            <p>
              As per SEBI study: 9 out of 10 individual traders in equity Futures and Options Segment incurred net losses. On average, loss-makers registered net trading loss close to ₹50,000. Over and above the net trading losses, loss-makers expended an additional 28% of net trading losses as transaction costs. Those making net trading profits incurred between 15% to 50% of such profits as transaction cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
