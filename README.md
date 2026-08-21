# FERMOR — Homepage & Wealth Intelligence Platform

> **"All your finances made simple. Understand. Act. Grow."**

This repository contains the homepage and financial product experience for **FERMOR**, designed and engineered as part of the Frontend Developer evaluation.

---

## 🌟 Live Demo & Architecture

- **Live Local Run**: `npm run dev` at [http://localhost:3005](http://localhost:3005)
- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Fermor Tokens
- **Icons**: Lucide React
- **Brand Geometry**: Authentic 2-stepped chevron Fermor vector mark + Transparent Favicon

---

## 💡 Product Thinking & Design Philosophy: "The Clarity Engine"

Finance in India is fragmented across multiple broker Demats, AMC direct portals, banking accounts, and tax tools. Most platforms simply display raw numbers without context. Fermor acts as **The Clarity Engine**: translating complex financial realities into simple, confident decisions.

### Reference Synthesis

```
┌──────────────────────────┐   ┌──────────────────────────┐   ┌──────────────────────────┐
│          MONZO           │   │       WEALTHFRONT        │   │          FERMOR          │
│   (Human & Approachable) │   │ (Clarity & Storytelling) │   │     (Brand & Market)     │
└────────────┬─────────────┘   └────────────┬─────────────┘   └────────────┬─────────────┘
             │                              │                              │
             ▼                              ▼                              ▼
  • Human, approachable tone     • Connecting features to       • Exact green stepped mark
  • Living product previews        long-term outcomes           • "All your finances
  • De-jargonized copy           • Progressive disclosure         made simple."
  • Touch-friendly clarity       • Clean decision frameworks    • "Understand. Act. Grow."
             │                              │                   • Indian context (₹, SIP,
             │                              │                     Direct MFs, CDSL, SGB)
             └──────────────────────┬───────┴──────────────────────────────┘
                                    │
                                    ▼
                     ┌──────────────────────────────┐
                     │    FERMOR DESIGN LANGUAGE    │
                     │  "The Clarity Engine" (2026) │
                     │  Warm • Human • Disciplined  │
                     └──────────────────────────────┘
```

1. **Product Demonstration Over Marketing Hype**: Show the actual interface solving real financial problems rather than relying on abstract marketing slogans.
2. **Context Over Data Overload**: Every metric is paired with clear meaning (e.g., *Current allocation vs. Target*, *Static SIP vs. Step-Up compounding*).
3. **Warm Editorial Calm**: A warm off-white canvas (`#FAF9F6`), generous whitespace, and sharp slate typography (`#0F172A`) replace dark cyberpunk glows and neon gradients.
4. **Restraint with Color**: Brand green (`#00C875`) is reserved exclusively for positive financial momentum, interactive actions, and the brand mark.
5. **Monospace for Data, Sans for Humans**: Monospace (`JetBrains Mono`) is strictly applied to numerical figures (`.tnum`) and chart axes; all headlines, navigation, and body copy use clean modern sans-serif (`Inter`).
6. **Zero Fabricated Claims**: No fake user numbers, invented AUM, or synthetic badges.

---

## 📋 Section Architecture

1. **Minimal Navigation**: Fixed/sticky navbar with Fermor logo, clean navigation links, and primary CTA.
2. **Hero (Asymmetrical 50/50 Composition)**:
   - Left: Editorial headline *"All your finances made simple."* with supporting proposition and primary actions.
   - Right: Interactive Net Worth Dashboard with dynamic `1M | 6M | 1Y | ALL` SVG chart and interactive asset allocation breakdown.
3. **The Core Narrative (Understand → Act → Grow)**:
   - **Stage 01 Understand**: Consolidated holdings overview across bank Demats & mutual funds + fee leak scanner.
   - **Stage 02 Act**: Risk-defined options payoff visualizer & direct execution.
   - **Stage 03 Grow**: Automated 10% annual Step-Up SIP habit builder.
4. **Structured Product Ecosystem**:
   - Organized by financial domain: *Invest & Compound* (Direct MFs, Step-Up SIPs), *Markets & Trading* (Equities, F&O), *Research Studio* (60s Briefs), and *Portfolio Intelligence* (Multi-broker CDSL sync).
5. **Financial Decision Experience ("Should I invest this month?")**:
   - Interactive monthly surplus slider and emergency buffer toggle that dynamically generate a 3-step personalized allocation recommendation.
6. **Trust & Philosophy**: Editorial principles covering Direct CDSL Demat Custody, 0% Commission Philosophy, Transparent Flat Pricing, and Bank-Grade Privacy.
7. **Final Actionable CTA & Footer**: Focused on *"Understand your money. Act with clarity. Grow with confidence."*

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm 9+

### Installation & Local Run
```bash
# Clone the repository
git clone https://github.com/Mohityadav55199/Fermor.git
cd Fermor

# Install dependencies
npm install

# Start local development server on port 3005
npm run dev -- -p 3005
```

Open [http://localhost:3005](http://localhost:3005) in your browser.

---

## 📦 Production Build Verification

```bash
# Verify TypeScript types and production bundle
npm run build
```

---

## 🛡️ License
© Fermor Technologies. All rights reserved.
