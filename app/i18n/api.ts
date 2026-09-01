import {
  getDictionary,
  isLocale,
  type Dictionary,
  type Locale,
  defaultLocale,
} from "@/app/i18n/dictionary";

export function resolveLocale(value: unknown): Locale {
  const locale = typeof value === "string" ? value : defaultLocale;
  return isLocale(locale) ? locale : defaultLocale;
}

export function apiError(key: keyof Dictionary["api"], locale: Locale) {
  return getDictionary(locale).api[key];
}
