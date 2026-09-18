import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const arabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600"],
  subsets: ["arabic"],
  variable: "--font-ar",
  display: "swap",
});

const latin = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "Idris Arif — Builder · Founder · Software & AI", template: "%s — Idris Arif" },
  description: "Idris Arif builds software products for real-world problems.",
  openGraph: {
    type: "website",
    siteName: "Idris Arif",
    title: "Idris Arif — Builder · Founder · Software & AI",
    description: "I build software products for real-world problems.",
    images: [{ url: "/og/og.svg", width: 1200, height: 630, alt: "Idris Arif — Builder, Founder, Software & AI" }],
  },
  twitter: { card: "summary_large_image", images: ["/og/og.svg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${arabic.variable} ${latin.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
