# FERMOR — Homepage & Financial Product Experience

> **"All your finances made simple. Understand. Act. Grow."**

This repository contains the submission for the **FERMOR Frontend Developer Assignment**.

- **Live Deployed Demo:** [https://fermor-mu.vercel.app](https://fermor-mu.vercel.app)
- **GitHub Repository:** [https://github.com/Mohityadav55199/Fermor](https://github.com/Mohityadav55199/Fermor)

---

## 🛠️ Tech Stack & Setup Instructions

### Stack
- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS + Custom Fermor Color Tokens
- **Icons:** Lucide React
- **Animation:** Framer Motion + CSS Transitions

### Prerequisites
- Node.js 18.17+ or 20+
- npm 9+

### Setup & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mohityadav55199/Fermor.git
   cd Fermor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run local development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💡 Important Design Decisions & Product Thinking

### 1. "The Clarity Engine" Product Concept
Indian financial wealth is fragmented across multiple Demat brokers, AMC direct portals, bank accounts, and tax tools. Most platforms simply display raw numbers without context. The FERMOR homepage is built as **The Clarity Engine**: translating complex financial realities into simple, confident decisions.

### 2. Product-Led Experience Over Marketing Hype
Rather than static illustrations or generic dark landing pages, the homepage features an **interactive Financial Intent Simulator**. Visitors can test real financial scenarios (e.g. *"Invest ₹15,000/mo"*, *"Save Tax under 80C"*) and see how money is dynamically routed across Direct Index Funds, Flexi-Cap MFs, and Emergency reserves.

### 3. Core Narrative (Understand → Act → Grow)
The layout guides users through three natural stages of financial life:
- **UNDERSTAND:** Consolidated holdings across Demats & MFs, true XIRR, fee leak scanner.
- **ACT:** Risk-defined options payoff visualizer & transparent order routing.
- **GROW:** Automated 10% annual Step-Up SIP habit compounding engine.

### 4. Absolute Brand Preservation
- **Logo:** Exact 2-stepped chevron Fermor vector mark (`/favicon.svg`) with uppercase tracking.
- **Palette:** Signature Fermor Green (`#00C875`) primary accent on a warm `#FAF9F6` off-white editorial canvas with crisp dark slate typography (`#0F172A`).
- **Identity:** Authentic Indian financial context (Rupees `₹`, Direct Mutual Funds, Step-Up SIPs, Nifty 50, ELSS 80C, EPF).

### 5. Typography & Motion
- Headlines and copy use `Inter` for human readability; numerical data uses `JetBrains Mono` with tabular numbers (`.tnum`).
- Micro-animations are strictly functional (number transitions, slider re-renders, stage tab reveals).

---

## 📁 Repository Structure

```
├── public/                 # Static brand assets & favicon
│   ├── favicon.svg         # Official green Fermor geometric mark
│   └── fermor-mark.png
├── src/
│   ├── app/                # Next.js 14 App Router (layout, page, styles)
│   ├── components/         # Modular React components
│   │   ├── navbar/         # Sticky glass navbar with live market ticker
│   │   ├── hero/           # Asymmetrical hero with interactive portfolio dashboard
│   │   ├── story/          # Interactive 3-stage timeline (Understand -> Act -> Grow)
│   │   ├── products/       # Asymmetrical Bento feature grid
│   │   ├── clarity/        # Financial decision case study simulator
│   │   ├── philosophy/     # Trust & transparency pillars
│   │   ├── cta/            # Early access onboarding modal
│   │   └── footer/         # Footer with legal disclaimers
│   └── lib/                # Utility helpers & formatting functions
└── tailwind.config.ts      # Custom Fermor color tokens & animations
```

---

## 📄 License & Attribution
Designed & developed for the FERMOR Frontend Developer Evaluation.
