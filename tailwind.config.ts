import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fermor: {
          50: "#e6fff4",
          100: "#c4ffe4",
          200: "#8effcb",
          300: "#4dfcae",
          400: "#10E38B",
          500: "#00C875", // Primary Authentic FERMOR Brand Green
          600: "#00A862",
          700: "#00844f",
          800: "#05673f",
          900: "#075435",
          950: "#00301d",
        },
        dark: {
          bg: "#07090E",
          surface: "#0D111A",
          card: "#121824",
          cardHover: "#172030",
          border: "#1E293B",
          borderGlow: "rgba(0, 229, 153, 0.2)",
          muted: "#94A3B8",
        },
        light: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          cardHover: "#F1F5F9",
          border: "#E2E8F0",
          muted: "#64748B",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      },
      animation: {
        ticker: "ticker 35s linear infinite",
        tickerFast: "ticker 20s linear infinite",
        pulseSlow: "pulseSlow 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;
