import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "Idris Arif — Builder · Founder · Software & AI", template: "%s — Idris Arif" },
  description: "Idris Arif builds software products for real-world problems.",
  openGraph: { type: "website", siteName: "Idris Arif", images: [{ url: "/og/og.svg", width: 1200, height: 630, alt: "Idris Arif — Builder, Founder, Software & AI" }] },
  twitter: { card: "summary_large_image", images: ["/og/og.svg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html suppressHydrationWarning><body>{children}</body></html>;
}
