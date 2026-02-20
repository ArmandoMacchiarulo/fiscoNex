import { it } from "./it";
import { en } from "./en";

export const locales = ["it", "en"] as const;
export type Locale = typeof locales[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export async function getDictionary(locale: Locale) {
  // Keeping it async makes it easy to switch to dynamic imports later
  return locale === "it" ? it : en;
}
