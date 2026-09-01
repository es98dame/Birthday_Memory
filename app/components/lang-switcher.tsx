import Link from "next/link";
import type { Locale } from "@/app/i18n/dictionary";
import { getDictionary } from "@/app/i18n/dictionary";
import { active, bar, link, sep } from "./lang-switcher.css";

export default function LangSwitcher({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).lang;

  return (
    <nav className={bar} aria-label={t.label}>
      <Link
        href="/"
        className={`${link} ${locale === "ko" ? active : ""}`}
        hrefLang="ko"
        aria-current={locale === "ko" ? "page" : undefined}
      >
        {t.ko}
      </Link>
      <span className={sep} aria-hidden>
        /
      </span>
      <Link
        href="/en"
        className={`${link} ${locale === "en" ? active : ""}`}
        hrefLang="en"
        aria-current={locale === "en" ? "page" : undefined}
      >
        {t.en}
      </Link>
    </nav>
  );
}
