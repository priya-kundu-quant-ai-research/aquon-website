import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Aquon — A fund and a platform, built on the same engine",
    template: "%s · Aquon",
  },
  description:
    "Aquon is a deep-tech quant firm and NYU research spin-off building both sides of the systematic-investing stack: AQTF, our own systematic fund, and Zeton, the investment operating system — powered by Aqua, our proprietary computation engine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}