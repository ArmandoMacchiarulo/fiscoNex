import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // GitHub Pages = hosting statico
  output: "export",
  trailingSlash: true,

  // Necessario su Pages (niente image optimizer server-side)
  images: { unoptimized: true },

  // Repo name: fiscoNex  -> il sito verrà servito sotto /fiscoNex
  basePath: isProd ? "/fiscoNex" : undefined,
  assetPrefix: isProd ? "/fiscoNex/" : undefined,
};

export default nextConfig;
