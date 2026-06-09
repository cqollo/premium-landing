import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // 1. Core Search Engine Indexing
  title: "North & Knot | Elite Digital Systems & Architectural Interfaces",
  description: "Engineering high-performance, ultra-low latency digital platforms and premium spatial configuration systems for luxury portfolios. Based in Nairobi.",
  keywords: ["Digital Architecture", "Next.js Developer Nairobi", "Premium Web Design", "Custom Systems", "North and Knot"],
  authors: [{ name: "North & Knot" }],
  metadataBase: new URL("https://your-domain.com"), // We will update this value once live on Vercel

  // 2. OpenGraph Identity (WhatsApp, LinkedIn, Facebook Previews)
  openGraph: {
    title: "North & Knot | Elite Digital Systems",
    description: "Engineering high-performance digital platforms and premium configuration systems for elite portfolios.",
    url: "https://your-domain.com",
    siteName: "North & Knot",
    images: [
      {
        url: "/projects/mivuli-atelier.webp", // Leverages your newly optimized showcase image as the link preview card image
        width: 1200,
        height: 630,
        alt: "North & Knot Portfolio Preview Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // 3. Twitter / X Analytics Previews
  twitter: {
    card: "summary_large_image",
    title: "North & Knot | Elite Digital Systems",
    description: "High-performance digital platforms and premium configuration engines.",
    images: ["/projects/mivuli-atelier.webp"],
  },

  // 4. Global Browser Elements
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}