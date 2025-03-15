import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InsigthX - Multi-Vendor Marketplace",
  description:
    "InsigthX is a powerful multi-vendor e-commerce platform that connects buyers and sellers seamlessly.",
  keywords: "ecommerce, multi-vendor, marketplace, InsigthX, buy and sell",
  authors: [{ name: "Santhoshraj", url: "https://yourportfolio.com" }],
  openGraph: {
    title: "InsigthX - Multi-Vendor Marketplace",
    description:
      "Join InsigthX, the next-gen marketplace connecting buyers and sellers with ease.",
    url: "https://insigthx.com",
    siteName: "InsigthX",
    images: [
      {
        url: "https://insigthx.com/banner.png",
        width: 1200,
        height: 630,
        alt: "InsigthX Marketplace",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
