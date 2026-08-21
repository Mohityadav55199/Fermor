export interface MarketIndex {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  sparkline: number[];
}

export interface StockData {
  symbol: string;
  name: string;
  sector: string;
  price: number;
  change: number;
  changePercent: number;
  pe: number;
  marketCap: string;
  healthScore: number;
  sentiment: "Strong Buy" | "Buy" | "Neutral" | "Accumulate";
  overview: string;
  catalysts: string[];
  historical: {
    "1D": { labels: string[]; prices: number[] };
    "1W": { labels: string[]; prices: number[] };
    "1M": { labels: string[]; prices: number[] };
    "1Y": { labels: string[]; prices: number[] };
    "5Y": { labels: string[]; prices: number[] };
  };
}

export const MARKET_INDICES: MarketIndex[] = [
  {
    id: "nifty50",
    symbol: "NIFTY 50",
    name: "NSE Benchmark",
    price: 24823.15,
    change: 142.60,
    changePercent: 0.58,
    sparkline: [24650, 24690, 24710, 24680, 24740, 24780, 24823],
  },
  {
    id: "sensex",
    symbol: "SENSEX",
    name: "BSE Benchmark",
    price: 81332.72,
    change: 498.10,
    changePercent: 0.62,
    sparkline: [80800, 80950, 81050, 81010, 81180, 81290, 81332],
  },
  {
    id: "banknifty",
    symbol: "BANK NIFTY",
    name: "Banking Index",
    price: 51240.40,
    change: -88.35,
    changePercent: -0.17,
    sparkline: [51400, 51350, 51300, 51180, 51210, 51260, 51240],
  },
  {
    id: "sp500",
    symbol: "S&P 500",
    name: "US Benchmark",
    price: 5634.58,
    change: 32.12,
    changePercent: 0.57,
    sparkline: [5590, 5605, 5612, 5618, 5625, 5630, 5634],
  },
  {
    id: "nasdaq",
    symbol: "NASDAQ 100",
    name: "Tech Heavy",
    price: 19842.10,
    change: 174.80,
    changePercent: 0.89,
    sparkline: [19600, 19650, 19710, 19760, 19800, 19820, 19842],
  },
  {
    id: "gold",
    symbol: "MCX GOLD (10g)",
    name: "Precious Metals",
    price: 72450.00,
    change: 210.00,
    changePercent: 0.29,
    sparkline: [72100, 72200, 72280, 72340, 72400, 72420, 72450],
  },
  {
    id: "usdinr",
    symbol: "USD / INR",
    name: "Forex",
    price: 83.88,
    change: -0.04,
    changePercent: -0.05,
    sparkline: [83.95, 83.92, 83.90, 83.89, 83.87, 83.89, 83.88],
  },
];

export const RESEARCH_STOCKS: StockData[] = [
  {
    symbol: "RELIANCE",
    name: "Reliance Industries Ltd.",
    sector: "Energy & Conglomerate",
    price: 2984.50,
    change: 42.15,
    changePercent: 1.43,
    pe: 27.8,
    marketCap: "₹20.19 L Cr",
    healthScore: 94,
    sentiment: "Strong Buy",
    overview: "Dominant retail and digital telecom subscriber additions driving cash flows alongside renewable green hydrogen energy capex pivot.",
    catalysts: [
      "Jio 5G ARPU expansion to ₹210+ in upcoming quarter",
      "Retail network crossed 18,800 operational stores",
      "Jamnagar New Energy Giga Complex commissioning Phase 1",
    ],
    historical: {
      "1D": {
        labels: ["09:15", "10:30", "11:45", "13:00", "14:15", "15:30"],
        prices: [2945, 2960, 2955, 2972, 2980, 2984.5],
      },
      "1W": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        prices: [2910, 2935, 2928, 2960, 2984.5],
      },
      "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        prices: [2840, 2890, 2920, 2984.5],
      },
      "1Y": {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        prices: [2480, 2620, 2790, 2984.5],
      },
      "5Y": {
        labels: ["2022", "2023", "2024", "2025", "2026"],
        prices: [1860, 2240, 2580, 2820, 2984.5],
      },
    },
  },
  {
    symbol: "TATAMOTORS",
    name: "Tata Motors Ltd.",
    sector: "Automotive & EV",
    price: 1042.80,
    change: 28.30,
    changePercent: 2.79,
    pe: 16.4,
    marketCap: "₹3.82 L Cr",
    healthScore: 91,
    sentiment: "Strong Buy",
    overview: "JLR order book strength in Defender/Range Rover models paired with market leadership in Indian domestic electric passenger vehicles.",
    catalysts: [
      "JLR net cash positive target ahead of schedule",
      "Demerger into Commercial & Passenger EV businesses",
      "Curvv EV & Harrier EV launch ramp-up",
    ],
    historical: {
      "1D": {
        labels: ["09:15", "10:30", "11:45", "13:00", "14:15", "15:30"],
        prices: [1015, 1024, 1020, 1035, 1038, 1042.8],
      },
      "1W": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        prices: [990, 1005, 1012, 1025, 1042.8],
      },
      "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        prices: [940, 975, 1010, 1042.8],
      },
      "1Y": {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        prices: [620, 780, 920, 1042.8],
      },
      "5Y": {
        labels: ["2022", "2023", "2024", "2025", "2026"],
        prices: [310, 440, 680, 890, 1042.8],
      },
    },
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank Ltd.",
    sector: "Banking & Financials",
    price: 1648.20,
    change: 14.80,
    changePercent: 0.91,
    pe: 18.2,
    marketCap: "₹12.54 L Cr",
    healthScore: 96,
    sentiment: "Accumulate",
    overview: "Post-merger loan-to-deposit ratio normalization underway with steady CASA accretion and lowest NPA metrics in large-cap private banking.",
    catalysts: [
      "Deposit growth outstripping credit growth for 2 quarters",
      "Branch expansion to 9,000+ pan-India locations",
      "FII holding room expansion in MSCI index weights",
    ],
    historical: {
      "1D": {
        labels: ["09:15", "10:30", "11:45", "13:00", "14:15", "15:30"],
        prices: [1635, 1638, 1642, 1640, 1645, 1648.2],
      },
      "1W": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        prices: [1610, 1622, 1630, 1640, 1648.2],
      },
      "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        prices: [1580, 1600, 1625, 1648.2],
      },
      "1Y": {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        prices: [1520, 1560, 1610, 1648.2],
      },
      "5Y": {
        labels: ["2022", "2023", "2024", "2025", "2026"],
        prices: [1420, 1510, 1590, 1620, 1648.2],
      },
    },
  },
  {
    symbol: "INFY",
    name: "Infosys Ltd.",
    sector: "Information Technology",
    price: 1872.40,
    change: -12.10,
    changePercent: -0.64,
    pe: 28.5,
    marketCap: "₹7.76 L Cr",
    healthScore: 89,
    sentiment: "Neutral",
    overview: "Enterprise generative AI transformation (Topaz) winning large multi-year enterprise renewals across BFSI and manufacturing verticals.",
    catalysts: [
      "Large deal TCV exceeding $3.8 Billion",
      "Margin improvement from Project Maximus utilization",
      "US discretionary tech spending stabilization",
    ],
    historical: {
      "1D": {
        labels: ["09:15", "10:30", "11:45", "13:00", "14:15", "15:30"],
        prices: [1885, 1880, 1874, 1876, 1870, 1872.4],
      },
      "1W": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        prices: [1860, 1890, 1885, 1875, 1872.4],
      },
      "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        prices: [1790, 1830, 1860, 1872.4],
      },
      "1Y": {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        prices: [1420, 1560, 1720, 1872.4],
      },
      "5Y": {
        labels: ["2022", "2023", "2024", "2025", "2026"],
        prices: [1290, 1480, 1600, 1750, 1872.4],
      },
    },
  },
  {
    symbol: "ZOMATO",
    name: "Zomato Ltd. (Eternal)",
    sector: "Consumer Tech & Quick Commerce",
    price: 254.60,
    change: 8.90,
    changePercent: 3.62,
    pe: 64.2,
    marketCap: "₹2.24 L Cr",
    healthScore: 92,
    sentiment: "Buy",
    overview: "Blinkit quick commerce network hyper-scaling with dark store unit economics turning EBITDA profitable across tier-1 cities.",
    catalysts: [
      "Blinkit store count targeting 1,000+ by end of FY25",
      "Going-out business spin-off app (District) expansion",
      "Net consolidated cash reserves exceeding ₹12,000 Cr",
    ],
    historical: {
      "1D": {
        labels: ["09:15", "10:30", "11:45", "13:00", "14:15", "15:30"],
        prices: [246, 248, 250, 252, 253, 254.6],
      },
      "1W": {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        prices: [238, 242, 247, 250, 254.6],
      },
      "1M": {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        prices: [215, 230, 242, 254.6],
      },
      "1Y": {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        prices: [95, 140, 190, 254.6],
      },
      "5Y": {
        labels: ["2022", "2023", "2024", "2025", "2026"],
        prices: [55, 70, 120, 195, 254.6],
      },
    },
  },
];

export const OPTIONS_STRATEGIES = [
  {
    id: "bull-call-spread",
    name: "Bull Call Spread",
    type: "Moderately Bullish",
    risk: "Defined / Limited",
    reward: "Capped Profit",
    description: "Buy lower strike Call (ITM/ATM) and sell higher strike Call (OTM). Caps risk while lowering upfront premium cost.",
    strikes: { buy: 24800, sell: 25100, current: 24823 },
    maxProfit: "₹11,250 / lot",
    maxLoss: "₹3,750 / lot",
    breakeven: "24,875",
    riskRewardRatio: "1 : 3.0",
    ivPercentile: "24% (Low IV favors buying)",
  },
  {
    id: "iron-condor",
    name: "Iron Condor",
    type: "Range Bound / Neutral",
    risk: "Defined / Limited",
    reward: "Fixed Premium",
    description: "Sell OTM Call spread & OTM Put spread simultaneously. Profits from time decay (Theta) as long as market stays in the channel.",
    strikes: { buyPut: 24400, sellPut: 24600, sellCall: 25000, buyCall: 25200, current: 24823 },
    maxProfit: "₹6,800 / lot",
    maxLoss: "₹3,200 / lot",
    breakeven: "24,536 & 25,064",
    riskRewardRatio: "1 : 2.1",
    ivPercentile: "68% (High IV favors selling)",
  },
  {
    id: "long-straddle",
    name: "Long Straddle",
    type: "High Volatility Breakout",
    risk: "Fixed Premium Paid",
    reward: "Unlimited",
    description: "Buy ATM Call and ATM Put simultaneously. Ideal for major events (Budget, RBI Policy, Election, Earnings).",
    strikes: { buyCall: 24800, buyPut: 24800, current: 24823 },
    maxProfit: "Unlimited",
    maxLoss: "₹9,100 / lot",
    breakeven: "24,618 & 24,982",
    riskRewardRatio: "Asymmetric",
    ivPercentile: "15% (Cheap volatility)",
  },
];

export const BROKER_COMPARISON = [
  {
    feature: "Equity Delivery Brokerage",
    fermor: "₹0 (Free Forever)",
    zerodha: "₹0",
    groww: "₹20 or 0.05%",
    iciciDirect: "0.25% - 0.55%",
  },
  {
    feature: "F&O / Intraday per order",
    fermor: "₹10 Flat",
    zerodha: "₹20 Flat",
    groww: "₹20 Flat",
    iciciDirect: "₹20 - ₹50",
  },
  {
    feature: "Direct Mutual Funds AMC/Commission",
    fermor: "₹0 Zero Commission",
    zerodha: "₹0 (Coin AMC)",
    groww: "₹0",
    iciciDirect: "Regular Funds (1.5% commission)",
  },
  {
    feature: "Multi-Broker Wealth Sync & Overlap",
    fermor: "Included Free (Real-time)",
    zerodha: "Not Available",
    groww: "Limited Import",
    iciciDirect: "Not Available",
  },
  {
    feature: "Options Payoff Visualizer Built-in",
    fermor: "Real-time Built-in",
    zerodha: "Paid Sensibull sub",
    groww: "Not Available",
    iciciDirect: "Not Available",
  },
  {
    feature: "Smart SIP Auto-Dip Buyer",
    fermor: "Automated Rule Engine",
    zerodha: "Manual Only",
    groww: "Manual Only",
    iciciDirect: "Not Available",
  },
  {
    feature: "Customer Support Guarantee",
    fermor: "< 60 Sec Dedicated Desk",
    zerodha: "Ticket System (24-48h)",
    groww: "Bot First",
    iciciDirect: "Branch / Phone IVR",
  },
];
