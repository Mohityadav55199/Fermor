"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { formatINR } from "@/lib/utils";

export const FinancialClaritySection: React.FC = () => {
  const [surplus, setSurplus] = useState<number>(30000);
  const [emergencyFundOk, setEmergencyFundOk] = useState<boolean>(true);

  // Clear product calculation
  const equityDeployment = emergencyFundOk ? surplus * 0.7 : surplus * 0.4;
  const debtDeployment = surplus - equityDeployment;

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#EAE8E2]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Decision Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Financial clarity, not financial noise.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Fermor evaluates your liquidity, current portfolio balance, and market valuations to answer simple, everyday financial questions without guesswork.
          </p>
        </div>

        {/* Real Product Decision Card */}
        <div className="product-card p-6 sm:p-8 bg-white space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#F4F2EC]">
            <div>
              <div className="text-xs text-slate-500 font-medium">Monthly Decision Workflow</div>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                &ldquo;Should I invest this month?&rdquo;
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-500">
              Interactive Allocation Rule Engine
            </div>
          </div>

          {/* Interactive Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-[#FAF9F6] rounded-xl border border-[#E8E6E1]">
            {/* Surplus Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-slate-700">
                <span>Available Monthly Surplus:</span>
                <span className="font-bold font-mono text-slate-900 tnum">{formatINR(surplus)}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="80000"
                step="5000"
                value={surplus}
                onChange={(e) => setSurplus(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-[11px] text-slate-500">Adjust amount to test monthly deployment logic</div>
            </div>

            {/* Emergency Fund Status Toggle */}
            <div className="space-y-2">
              <div className="text-xs font-medium text-slate-700">Emergency Fund Status:</div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEmergencyFundOk(true)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium border transition-all ${
                    emergencyFundOk
                      ? "bg-white text-slate-900 border-slate-900 font-bold shadow-2xs"
                      : "bg-[#FAF9F6] text-slate-600 border-[#EAE8E2] hover:bg-white"
                  }`}
                >
                  ✓ 6+ Months Buffer Intact
                </button>
                <button
                  onClick={() => setEmergencyFundOk(false)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium border transition-all ${
                    !emergencyFundOk
                      ? "bg-white text-slate-900 border-slate-900 font-bold shadow-2xs"
                      : "bg-[#FAF9F6] text-slate-600 border-[#EAE8E2] hover:bg-white"
                  }`}
                >
                  Below 6 Months Buffer
                </button>
              </div>
              <div className="text-[11px] text-slate-500">Determines risk tolerance for new inflows</div>
            </div>
          </div>

          {/* 4-Step Clarity Decision Logic */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Evaluated Recommendation
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2] space-y-1">
                <div className="text-[11px] font-mono text-slate-500">1. Liquidity Posture</div>
                <div className="text-sm font-bold text-slate-900">
                  {emergencyFundOk ? "Ready to Invest" : "Replenish First"}
                </div>
                <div className="text-xs text-slate-600">
                  {emergencyFundOk
                    ? "Safe liquid reserves confirmed in high-yield debt."
                    : "Prioritizing capital preservation before equity deployment."}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#EAE8E2] space-y-1">
                <div className="text-[11px] font-mono text-slate-500">2. Portfolio Balance</div>
                <div className="text-sm font-bold text-slate-900">
                  {emergencyFundOk ? "Equity Underweight 4%" : "Conservative Tilt"}
                </div>
                <div className="text-xs text-slate-600">
                  {emergencyFundOk
                    ? "Deploying fresh capital naturally rebalances your target."
                    : "Channeling larger portion to liquid buffer."}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#E8FAF1] border border-[rgba(0,200,117,0.3)] space-y-1">
                <div className="text-[11px] font-mono font-semibold text-[#00844F]">
                  3. Recommended Action
                </div>
                <div className="text-sm font-bold text-slate-900 tnum">
                  {formatINR(equityDeployment)} Equity + {formatINR(debtDeployment)} Debt
                </div>
                <div className="text-xs text-[#00844F]">
                  1-click allocation into your scheduled direct index plan.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
