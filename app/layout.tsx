import type { Metadata } from "next";
import { Marcellus, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// Marcellus for headings - elegant serif
const marcellus = Marcellus({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

// Inter for body text - clean sans-serif that complements Marcellus
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aquon AI - The Future of Trading",
  description:
    "Introducing Zeton, your AI-powered wealth management co-pilot. Democratizing access to institutional-grade AI for trading and portfolio management.",
  keywords: [
    "AI trading",
    "wealth management",
    "portfolio optimization",
    "algorithmic trading",
    "ZWAP",
    "fintech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${marcellus.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}