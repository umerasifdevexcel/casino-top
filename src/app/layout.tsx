import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutContent from "@/components/LayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CasinoTop - Best Cryptocurrency Casino Reviews & Comparisons",
    template: "%s | CasinoTop"
  },
  description: "Discover the best cryptocurrency casinos with our comprehensive reviews and comparisons. Find trusted crypto casinos with the best bonuses, games, and security features.",
  keywords: ["cryptocurrency casino", "crypto casino reviews", "bitcoin casino", "crypto gambling", "casino comparison"],
  openGraph: {
    type: 'website',
    title: 'CasinoTop - Best Cryptocurrency Casino Reviews & Comparisons',
    description: 'Discover the best cryptocurrency casinos with our comprehensive reviews and comparisons.',
    siteName: 'CasinoTop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CasinoTop - Best Cryptocurrency Casino Reviews & Comparisons',
    description: 'Discover the best cryptocurrency casinos with our comprehensive reviews and comparisons.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
