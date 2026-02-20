import "./globals.css";
import type { Metadata } from "next";
import { Kantumruy_Pro, Space_Grotesk } from "next/font/google";

const heading = Kantumruy_Pro({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FiscoNex",
  description: "FiscoNex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen font-[var(--font-body)]">{children}</body>
    </html>
  );
}
