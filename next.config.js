/** @type {import('next').NextConfig} */
const repoName = "fiscoNex";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // GitHub Pages requires static export
  output: "export",

  // Next/Image needs to be unoptimized on static hosts
  images: { unoptimized: true },

  // Apply basePath only in production (GitHub Pages), keep dev URLs clean (/it)
  ...(isProd
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

module.exports = nextConfig;
