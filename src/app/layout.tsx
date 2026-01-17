import AnchorScrollClient from "@/components/scroll/AnchorScrollClient";

import "./globals.css";
import "@/styles/fn.tokens.css";
import "@/styles/fn.variants.css";
import "@/styles/fn.layout.css";
import "@/styles/fn.motion.css";
import "@/styles/gate-backdrops.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-white text-black antialiased">
        <AnchorScrollClient />
        {children}
      </body>
    </html>
  );
}
