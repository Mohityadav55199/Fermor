# FERMOR — Homepage & Wealth Intelligence Platform

> **"All your finances made simple. Understand. Act. Grow."**

This repository contains the homepage and interactive financial intelligence suite for **FERMOR**, designed and engineered as part of the Frontend Developer / Founding Software Engineer evaluation.

---

## 🌟 Live Demo & Preview
- **Framework**: Next.js 14 (App Router) + React 18+ + TypeScript
- **Styling**: Tailwind CSS + Custom Fermor Tokens
- **Icons & Motion**: Lucide React + Native CSS Springs + Web Audio API
- **Live Local Run**: `npm run dev` at [http://localhost:3000](http://localhost:3000)

---

## 💡 Product Thinking & Design Philosophy

### Why Most AI-Generated Templates Fail
Generic AI templates suffer from repetitive clichés: purple/cyan neon blobs, meaningless floating 3D spheres, vague buzzwords (*"supercharge synergy"*), static non-functional screenshot mockups, and zero understanding of Indian capital market realities (such as SEBI compliance, direct vs regular mutual fund expense ratios, STT/brokerage calculations, and derivative risk disclosures).

### The Fermor Approach: Distinct, Authentic, High-Conviction
1. **True Brand Alignment**: Built strictly around Fermor's emerald/mint green brand identity (`#00E599` / `#00C076`), rich obsidian slate surfaces (`#07090E`), and institutional-grade typography with monospace numeric alignments.
2. **Pillared Architecture (Solving *Understand. Act. Grow.*)**:
   - **Understand (Pillar 01)**: Solves the multi-broker fragmentation problem. Connects Zerodha, Groww, Demats, and Gold into a unified net worth and identifies hidden expense-ratio leaks (saving thousands of rupees by switching regular mutual funds to direct plans).
   - **Act (Pillar 02)**: Bridges the gap between retail traders and institutional tools. Features a **live interactive F&O Options Payoff Visualizer** (Bull Call Spread, Iron Condor, Long Straddle) that makes derivatives risk and breakeven transparent *before* an order is placed.
   - **Grow (Pillar 03)**: Features an **Interactive Step-Up SIP Simulator** demonstrating how an annual 10% step-up more than doubles wealth creation compared to static investments, with optional 6% inflation-adjustment modeling.
3. **Institutional Research Terminal**: Real-time stock scanner with interactive timeframes (1D, 1W, 1M, 1Y, 5Y), candlestick/area chart rendering, P/E metrics, Fermor Health Scores, and plain-English business catalysts.
4. **Working Micro-Interactions**:
   - **Live Simulated Market Ticker** (Nifty 50, Sensex, Bank Nifty, S&P 500, Gold, Forex).
   - **Global Command Palette (`⌘K` / `Ctrl+K`)** for instant symbol search and tool shortcuts.
   - **Synthesized Web Audio Haptics** (subtle tactile audio feedback on clicks and toggles with zero external assets).
   - **Interactive Brokerage Savings Calculator** comparing Fermor's ₹10 flat orders vs traditional ₹20 + AMC brokers.
   - **Multi-Step Onboarding Modal** with phone/OTP simulation and confetti celebration.
   - **SEBI Regulatory Compliance**: Legally accurate statutory disclosures, CDSL depository custody details, and derivative risk notices.

---

## 🛠️ Project Structure

```
fermor-homepage/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with SEO metadata & fonts
│   │   ├── page.tsx           # Assembled interactive homepage
│   │   └── globals.css        # Fermor theme variables, scrollbars & grid
│   ├── components/
│   │   ├── common/
│   │   │   └── FermorLogo.tsx # Official Fermor SVG brand geometry
│   │   ├── navbar/
│   │   │   ├── MarketTicker.tsx # Live simulated indices ticker
│   │   │   └── Navbar.tsx     # Navigation, mega-menu & controls
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx
│   │   │   └── InteractiveCommandDeck.tsx # 3-Pillar interactive deck
│   │   ├── pillars/
│   │   │   ├── UnderstandPillar.tsx # Portfolio sync & overlap scanner
│   │   │   ├── ActPillar.tsx        # F&O Options Payoff Visualizer
│   │   │   └── GrowPillar.tsx       # Step-Up SIP Compounding Engine
│   │   ├── terminal/
│   │   │   └── StockResearchTerminal.tsx # Interactive Stock charts
│   │   ├── pricing/
│   │   │   └── PricingSection.tsx   # Fees & interactive savings calculator
│   │   ├── security/
│   │   │   └── SecurityAndTrust.tsx # CDSL custody & SEBI compliance
│   │   ├── testimonials/
│   │   │   └── TraderStories.tsx    # Investor personas & reviews
│   │   ├── command-palette/
│   │   │   └── CommandPaletteModal.tsx # Global ⌘K search dialog
│   │   ├── cta/
│   │   │   └── EarlyAccessCTA.tsx   # KYC onboarding with confetti
│   │   └── footer/
│   │       └── Footer.tsx           # Regulatory disclosures & sitemap
│   ├── lib/
│   │   ├── audio.ts                 # Web Audio API sound synthesizer
│   │   ├── market-data.ts           # Indian market feeds & stock data
│   │   └── utils.ts                 # Currency (INR) & class helpers
│   └── types/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v18.17.0` or later (tested on Node v24)
- npm / yarn / pnpm

### 2. Installation
```bash
# Clone repository
git clone https://github.com/your-username/fermor-homepage.git
cd fermor-homepage

# Install dependencies
npm install
```

### 3. Running Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 🚢 Deployment (Vercel / Netlify)

### Deploy to Vercel
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import this repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**.

---

## 📋 Key Architectural Decisions
- **Zero Heavy External Chart Libraries**: Charts and payoff curves are built with lightweight, responsive native SVGs, reducing bundle size to under **121 kB** First Load JS.
- **Web Audio API Haptics**: High-frequency micro-haptics synthesized in browser memory without loading bulky `.mp3` files over the network.
- **Strict Tabular Numerics**: Implemented `tnum` font features so financial stock tickers and currency values remain strictly stable during real-time updates without horizontal jitter.
- **Accessibility & Keyboard Ergonomics**: Global keyboard listeners (`⌘K`, `Ctrl+K`, `Esc`) and high-contrast color ratios ensuring WCAG AAA standards.
