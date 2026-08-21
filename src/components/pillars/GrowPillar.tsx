"use client";

import React, { useState, useMemo } from "react";
import { soundFx } from "@/lib/audio";
import { formatINR } from "@/lib/utils";
import { TrendingUp, Plus, RefreshCw } from "lucide-react";

export const GrowPillar: React.FC = () => {
  const [monthlySIP, setMonthlySIP] = useState<number>(15000);
  const [stepUpRate, setStepUpRate] = useState<number>(10);
  const [years, setYears] = useState<number>(20);
  const [expectedReturn, setExpectedReturn] = useState<number>(14);
  const [smartDipActive, setSmartDipActive] = useState<boolean>(false);

  const sipCalc = useMemo(() => {
    let totalInvested = 0;
    let totalCorpus = 0;
    const monthlyRate = expectedReturn / 100 / 12;
    let currentMonthly = monthlySIP;
    const yearlyData: { year: number; corpus: number; invested: number }[] = [];

    for (let y = 1; y <= years; y++) {
      if (y > 1) currentMonthly *= 1 + stepUpRate / 100;
      for (let m = 0; m < 12; m++) {
        totalInvested += currentMonthly;
        totalCorpus = (totalCorpus + currentMonthly) * (1 + monthlyRate);
      }
      yearlyData.push({ year: y, corpus: totalCorpus, invested: totalInvested });
    }

    const wealthCreated = totalCorpus - totalInvested;
    const finalDipBonus = smartDipActive ? totalCorpus * 0.063 : 0;
    return { totalInvested, totalCorpus: totalCorpus + finalDipBonus, wealthCreated, yearlyData };
  }, [monthlySIP, stepUpRate, years, expectedReturn, smartDipActive]);

  const maxCorpus = Math.max(...sipCalc.yearlyData.map((d) => d.corpus));

  const sliders: {
    label: string; value: number; min: number; max: number; step: number;
    unit: string; isPrefix: boolean; setter: (v: number) => void;
  }[] = [
    { label: "Monthly SIP", value: monthlySIP, min: 1000, max: 100000, step: 500, unit: "₹", isPrefix: true, setter: setMonthlySIP },
    { label: "Step-Up / Year", value: stepUpRate, min: 0, max: 25, step: 1, unit: "%", isPrefix: false, setter: setStepUpRate },
    { label: "Time Horizon", value: years, min: 5, max: 30, step: 1, unit: " Yrs", isPrefix: false, setter: setYears },
    { label: "Expected CAGR", value: expectedReturn, min: 6, max: 20, step: 0.5, unit: "%", isPrefix: false, setter: setExpectedReturn },
  ];

  return (
    <section id="grow" className="section-divider py-24 px-4 sm:px-6 lg:px-8 bg-[#07090E]">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="badge badge-purple mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            Pillar 03 · Grow
          </div>
          <div className="accent-bar mb-5" style={{ background: "linear-gradient(90deg, #a855f7, #c084fc)" }} />
          <h2 className="text-[36px] sm:text-[48px] font-extrabold text-white tracking-tight leading-tight">
            Compound like the wealthy.<br />
            <span className="text-purple-400">Not like the textbooks.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed max-w-2xl">
            Step-Up SIPs automatically increase your monthly investment by a fixed percentage each year — simulating your income growth and maximising compounding impact without manual intervention.
          </p>
        </div>

        {/* Calculator + Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sliders */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.07] bg-[#0D111A] p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-bold text-white">Wealth Projection Calculator</h3>

            {sliders.map(({ label, value, min, max, step, unit, isPrefix, setter }) => (
              <div key={label} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{label}</span>
                  <span className="font-bold text-white tnum">
                    {isPrefix ? `${unit}${value.toLocaleString("en-IN")}` : `${value}${unit}`}
                  </span>
                </div>
                <input
                  type="range" min={min} max={max} step={step} value={value}
                  onChange={(e) => { soundFx.playClick(); setter(Number(e.target.value)); }}
                  className="w-full"
                  style={{ accentColor: "#a855f7" }}
                />
              </div>
            ))}

            {/* Smart Dip toggle */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              smartDipActive ? "border-purple-500/25 bg-purple-500/8" : "border-white/[0.06] bg-white/[0.02]"
            }`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5 text-purple-400" />
                    Smart Dip-Buyer Bonus
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Auto invest extra +₹5K when markets dip &gt;1.5%
                  </p>
                </div>
                <button
                  onClick={() => { soundFx.playClick(); setSmartDipActive(!smartDipActive); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border flex-shrink-0 ${
                    smartDipActive
                      ? "bg-purple-500/15 text-purple-300 border-purple-500/25"
                      : "bg-white/5 text-slate-400 border-white/10"
                  }`}
                >
                  {smartDipActive ? "● ON" : "○ OFF"}
                </button>
              </div>
            </div>
          </div>

          {/* Visual results */}
          <div className="lg:col-span-7 space-y-4">
            {/* Key results */}
            <div className="grid grid-cols-2 gap-4">
              <div className="stat-card text-center">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Total Invested</div>
                <div className="text-2xl font-bold font-mono tnum text-white">{formatINR(sipCalc.totalInvested)}</div>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  ₹{monthlySIP.toLocaleString("en-IN")}/mo → +{stepUpRate}% annually
                </div>
              </div>
              <div className="stat-card text-center pricing-featured">
                <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider mb-2">Projected Wealth</div>
                <div className="text-2xl font-bold font-mono tnum text-fermor-400">{formatINR(sipCalc.totalCorpus)}</div>
                <div className="text-xs text-fermor-400/70 mt-1 font-mono">
                  Wealth Created: {formatINR(sipCalc.wealthCreated)}
                </div>
              </div>
            </div>

            {/* Bar chart */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#0D111A] p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4 text-xs font-mono text-slate-500">
                <span>Year-by-Year Compounding</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-white/15" /> Invested</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-purple-500" /> Corpus</span>
                </div>
              </div>

              <div className="flex items-end gap-0.5 h-36 overflow-x-auto no-scrollbar pb-2">
                {sipCalc.yearlyData.map(({ year, corpus, invested }) => {
                  const corpH = Math.max(4, (corpus / maxCorpus) * 136);
                  const invH = Math.max(2, (invested / maxCorpus) * 136);
                  return (
                    <div key={year} className="group relative flex-1 flex flex-col items-center min-w-[18px]">
                      <div className="relative flex items-end gap-px h-36">
                        <div
                          className="bg-white/[0.08] rounded-t-sm flex-1 transition-all"
                          style={{ height: `${invH}px` }}
                        />
                        <div
                          className="bg-purple-500 rounded-t-sm flex-1 transition-all"
                          style={{ height: `${corpH}px` }}
                        />
                      </div>
                      <div className="text-[8px] font-mono text-slate-600 mt-1">Yr{year}</div>

                      <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-10 pointer-events-none">
                        <div className="bg-[#0D111A] border border-white/10 rounded-lg px-2.5 py-2 text-[10px] font-mono shadow-xl whitespace-nowrap">
                          <div className="text-purple-300">Corpus: {formatINR(corpus)}</div>
                          <div className="text-slate-400">Invested: {formatINR(invested)}</div>
                        </div>
                        <div className="w-px h-2 bg-white/20" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
