export function getSiteUrl() {
  // Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.fisconex.it)
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
