"use client";

import React from "react";
import { FermorLogo } from "@/components/common/FermorLogo";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navColumns = [
    {
      title: "Products",
      links: [
        { label: "Equities", href: "#products" },
        { label: "Direct Mutual Funds", href: "#products" },
        { label: "Step-Up SIPs", href: "#products" },
        { label: "F&O Derivatives", href: "#products" },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "How it works", href: "#how-it-works" },
        { label: "Decision Framework", href: "#research" },
        { label: "Research Studio", href: "#products" },
        { label: "Our Philosophy", href: "#about" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Fermor", href: "#about" },
        { label: "Depository Custody", href: "#about" },
        { label: "Privacy Policy", href: "#about" },
        { label: "Terms of Service", href: "#about" },
      ],
    },
  ];

  return (
    <footer className="bg-[#FAF9F6] text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upper Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-3">
            <FermorLogo size={26} />
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs font-sans">
              All your finances made simple. One unified home to Understand your money, Act with precision, and Grow across generations.
            </p>
          </div>

          {/* Navigation Links */}
          {navColumns.map(({ title, links }) => (
            <div key={title} className="space-y-3 font-sans">
              <div className="text-slate-900 font-semibold text-xs">{title}</div>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#EAE8E2] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <div>© {new Date().getFullYear()} Fermor Technologies. All rights reserved.</div>
          <button
            onClick={scrollToTop}
            className="text-slate-600 hover:text-slate-900 font-medium"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
