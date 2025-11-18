import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://retractability.com"),
  title: {
    default: "Retractability Bicycles | Full-Size Folding Bikes",
    template: "%s | Retractability",
  },
  description:
    "Retractability builds full-size folding bicycles that fold into a compact package without sacrificing ride quality. Designed in Arizona for students, commuters, and travelers.",
  keywords: [
    "retractable bike",
    "retractability",
    "retractability bicycles",
    "folding bike",
    "folding bicycle",
    "compact bike",
    "portable bike",
    "portable bicycle",
    "small bike",
    "full sized bike",
    "backpack bike",
    "commuter bike",
    "Arizona bikes",
  ],
  alternates: { canonical: "/" },
  // layout.tsx -> inside export const metadata = { ... }
  robots: {
    index: true,
    follow: true,

    // apply to all crawlers:
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,

    // apply specifically to Googlebot:
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Retractability",
    locale: "en_US",
    title: "Retractability Bicycles — Full-Size Folding Bikes",
    description:
      "A full-size folding bicycle that collapses to a compact package. Strong, portable, and built for everyday life.",
    images: [
      {
        url: "/og/retractability-og.png",
        width: 1200,
        height: 630,
        alt: "Retractability Bike Concept",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Retractability", // set your real handle or remove
    creator: "@Retractability", // set your real handle or remove
    title: "Retractability Bicycles — Full-Size Folding Bike",
    description:
      "A full-size folding bicycle that collapses to a compact package. Strong, portable, and built for everyday life.",
    images: ["/og/retractability-og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: "", // paste Search Console token when you have it
    other: { "msvalidate.01": "" }, // Bing token (optional)
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
