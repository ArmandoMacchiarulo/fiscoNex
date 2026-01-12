export function asset(path: string) {
  const base = process.env.NODE_ENV === "production" ? "/fiscoNex" : "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
