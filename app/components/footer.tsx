import { getDictionary, type Locale } from "@/app/i18n/dictionary";
import { block, container, gift, meta } from "./footer.css";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).footer;

  return (
    <footer className={container}>
      <div className={block}>
        <span>{t.title}</span>
        <time className={meta} dateTime="2026-09-02">
          2026.09.02
        </time>
      </div>
      <a href="#top" className={gift}>
        {t.top}
      </a>
    </footer>
  );
}
