"use client";

import React, { useState, useEffect } from "react";
import { FermorLogo } from "@/components/common/FermorLogo";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenOnboarding: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOnboarding }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#products", label: "Products" },
    { href: "#research", label: "Research" },
    { href: "#about", label: "About" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-[#FAF9F6] border-b transition-colors duration-150 ${
        isScrolled ? "border-[#E2DFD8] shadow-2xs" : "border-[#EAE8E2]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C875] rounded"
          >
            <FermorLogo size={28} />
          </a>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-slate-900 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Primary Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenOnboarding}
              className="btn-primary hidden sm:inline-flex text-xs px-4 py-2"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E2DFD8] px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#E8E6E1]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOnboarding();
              }}
              className="w-full btn-primary justify-center text-sm py-2.5"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
