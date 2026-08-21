"use client";

import React from "react";
import { Landmark, Lock, ShieldCheck, FileCheck } from "lucide-react";

export const TrustPhilosophySection: React.FC = () => {
  const principles = [
    {
      icon: Landmark,
      title: "Direct Depository Custody",
      desc: "Your shares and mutual fund units reside directly in your independent CDSL account in your name.",
    },
    {
      icon: Lock,
      title: "0% Commission Philosophy",
      desc: "We exclusively offer Direct Mutual Funds. We do not earn distributor cuts from fund houses.",
    },
    {
      icon: FileCheck,
      title: "Transparent Flat Pricing",
      desc: "No hidden percentage-based software charges, terminal fees, or surprise markups on execution.",
    },
    {
      icon: ShieldCheck,
      title: "Private & Encrypted",
      desc: "Bank-grade encryption with hardware passkeys and biometric 2FA. We never sell or monetize user data.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#EAE8E2]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Editorial Heading */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Financial tools should make decisions clearer, not more complicated.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Fermor was engineered with a straightforward principle: provide transparent, direct market access and clear context so you can make informed decisions with your own money.
          </p>
        </div>

        {/* 4 Clean Editorial Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-[#E8E6E1] flex items-center justify-center text-[#00844F]">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
