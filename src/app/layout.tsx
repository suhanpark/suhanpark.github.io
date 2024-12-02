import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Enhanced metadata for SEO
export const metadata: Metadata = {
  title: "Suhan's Website",
  description: "Explore Suhan's portfolio.",
  keywords: [
    "Suhan",
    "portfolio",
    "software engineering",
    "research",
    "deep learning",
    "computer vision",
    "machine learning",
    "autonomous vehicles",
    "robotics",
    "artificial intelligence",
    "perception",
    "foundation model"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Suhan&apos;s Website",
    description:
      "Discover Suhan&apos;s projects in software engineering, specializing in Deep Learning and Computer Vision.",
    url: "https://suhanpark.github.io",
    siteName: "Suhan&apos;s Website",

    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
