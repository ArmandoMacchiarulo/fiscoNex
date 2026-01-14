import BootstrapClient from "@/components/BootstrapClient";
import "@/styles/gate-backdrops.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-white text-black antialiased">
        <BootstrapClient />
        {children}

        {/* Bootstrap JS bundle (carousel, dropdown, ecc.) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
