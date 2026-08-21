"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import confetti from "canvas-confetti";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Check,
  X,
  Lock,
} from "lucide-react";

interface EarlyAccessCTAProps {
  isOpen?: boolean;
  initialValue?: string;
  onClose?: () => void;
}

export const EarlyAccessCTA: React.FC<EarlyAccessCTAProps> = ({
  isOpen = false,
  initialValue = "",
  onClose,
}) => {
  const [step, setStep] = useState<"phone" | "otp" | "success">("phone");
  const [phoneOrEmail, setPhoneOrEmail] = useState(initialValue || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneOrEmail) return;
    soundFx.playSuccess();
    setStep("otp");
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    soundFx.playSuccess();

    setTimeout(() => {
      setIsSubmitting(false);
      setStep("success");
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00C875", "#00B368", "#10E38B", "#F59E0B"],
        });
      } catch {
        // Safe fallback
      }
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-md bg-white border border-[#E2DFD8] rounded-3xl p-6 sm:p-8 shadow-2xl relative space-y-6 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 rounded-lg bg-[#FAF9F6] text-slate-500 hover:text-slate-900 hover:bg-[#F4F3EF] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {step === "phone" && (
          <form onSubmit={handlePhoneSubmit} className="space-y-5">
            <div className="space-y-2">
              <span className="pill-badge pill-green text-[10px]">
                <Lock className="w-3 h-3" /> Step 1 of 2: KYC Phone Verification
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Open Your Fermor Account
              </h3>
              <p className="text-xs text-slate-600">
                Enter your mobile number linked to Aadhaar for instant 3-minute paperless e-KYC.
              </p>
            </div>

            <div className="flex items-center px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E2DFD8] text-slate-900 font-mono text-sm focus-within:border-[#00C875] focus-within:bg-white transition-all">
              <span className="text-slate-500 mr-2 select-none">+91</span>
              <input
                type="tel"
                required
                placeholder="98765 43210"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                className="bg-transparent focus:outline-none w-full text-slate-900 placeholder:text-slate-400 font-mono"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3 text-sm justify-center font-semibold"
            >
              <span>Send OTP & Proceed</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-slate-500 pt-1">
              <span>✓ ₹0 Account Opening</span>
              <span>✓ Lifetime ₹0 AMC</span>
            </div>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleOtpSubmit} className="space-y-5">
            <div className="space-y-2">
              <span className="pill-badge pill-green text-[10px]">
                Step 2 of 2: Enter 4-Digit OTP
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Verify Your Mobile
              </h3>
              <p className="text-xs text-slate-600">
                We sent a 4-digit verification code to{" "}
                <span className="text-slate-900 font-mono font-semibold">+91 {phoneOrEmail}</span>
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  defaultValue={idx === 0 ? "7" : idx === 1 ? "4" : idx === 2 ? "2" : "9"}
                  className="h-13 text-center font-mono text-xl font-bold rounded-xl bg-[#FAF9F6] border border-[#E2DFD8] text-slate-900 focus:border-[#00C875] focus:bg-white focus:outline-none"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-3 text-sm justify-center font-semibold"
            >
              {isSubmitting ? "Verifying CDSL / Aadhaar..." : "Verify & Unlock Free Account"}
            </button>
          </form>
        )}

        {step === "success" && (
          <div className="text-center space-y-4 py-4">
            <div className="w-14 h-14 rounded-full bg-[#E8FAF1] text-[#00844F] border border-[#00C875]/30 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-slate-900">Welcome to Fermor!</h3>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Your Demat account is provisioned with CDSL. ₹0 brokerage is unlocked on all Equity & Direct Mutual Fund orders.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E8E6E1] text-xs font-mono text-[#00844F]">
              Demat UCC: <span className="text-slate-900 font-bold">FERM-9482-IND</span>
            </div>

            <button
              onClick={onClose}
              className="btn-primary w-full py-3 text-sm justify-center font-semibold"
            >
              Enter Your Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
