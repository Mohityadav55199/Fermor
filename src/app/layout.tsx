import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fermor — All your finances made simple",
  description:
    "Understand your money. Make informed decisions. Grow with confidence. Stocks, Direct Mutual Funds, SIPs, F&O, Research, and Multi-Asset Portfolio.",
  keywords: [
    "Fermor",
    "Fintech India",
    "Direct Mutual Funds",
    "Stock Broker India",
    "Step-Up SIP Calculator",
    "Portfolio Rebalancing",
    "SEBI Registered Broker",
  ],
  authors: [{ name: "Fermor Technologies" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Fermor — All your finances made simple",
    description:
      "Understand. Act. Grow. One unified financial platform for Stocks, Mutual Funds, SIPs, F&O, and Wealth Management.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#00C875",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#FAF9F6] text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
