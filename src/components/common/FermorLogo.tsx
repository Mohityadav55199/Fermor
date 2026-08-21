"use client";

import React from "react";

interface FermorLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

// Official Fermor Brand Green
export const FERMOR_GREEN = "#00C875";

export const FermorLogo: React.FC<FermorLogoProps> = ({
  className = "",
  size = 28,
  showText = true,
  textColor = "text-slate-900",
}) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Exact Fermor Geometric Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-label="Fermor Logo Mark"
      >
        {/* Top Stepped Chevron */}
        <path
          d="M91 18L61 18L43 40L19 40L7 54L37 54L55 32L79 32Z"
          fill={FERMOR_GREEN}
        />
        {/* Bottom Stepped Chevron */}
        <path
          d="M91 44L61 44L43 66L19 66L7 80L37 80L55 58L79 58Z"
          fill={FERMOR_GREEN}
        />
      </svg>

      {showText && (
        <span
          className={`font-extrabold tracking-[0.16em] text-lg font-sans uppercase leading-none ${textColor}`}
        >
          FERMOR
        </span>
      )}
    </div>
  );
};
