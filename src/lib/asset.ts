export function asset(path: string) {
  const base = process.env.NODE_ENV === "production" ? "/fiscoNex" : "";

  // rimuove eventuali "./" iniziali
  const cleaned = path.replace(/^(\.\/)+/, "");

  // forza sempre path assoluto
  const p = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;

  return `${base}${p}`;
}
