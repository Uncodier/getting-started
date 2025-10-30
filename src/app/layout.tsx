import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makinari - AI-Powered Growth Engine",
  description: "An AI-powered marketing analytics and automation platform that transforms how businesses manage leads, campaigns, and growth. Deploy and scale your marketing operations with our comprehensive suite of tools.",
  keywords: ["AI", "marketing", "analytics", "automation", "growth", "leads", "campaigns", "open source"],
  authors: [{ name: "Makinari Team" }],
  creator: "Makinari",
  publisher: "Makinari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://makinari.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Makinari - AI-Powered Growth Engine",
    description: "An AI-powered marketing analytics and automation platform that transforms how businesses manage leads, campaigns, and growth.",
    url: "https://makinari.org",
    siteName: "Makinari",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Makinari - AI-Powered Growth Engine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makinari - AI-Powered Growth Engine",
    description: "An AI-powered marketing analytics and automation platform that transforms how businesses manage leads, campaigns, and growth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
