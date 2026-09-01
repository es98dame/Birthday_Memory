import { getDictionary, type Locale } from "@/app/i18n/dictionary";
import { container, date, dateRule, invite } from "./hero.css";

export default function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero;

  return (
    <header className={container}>
      <h1 className={invite}>{t.invite}</h1>
      <hr className={dateRule} />
      <time className={date} dateTime="2026-09-02">
        {t.date}
      </time>
    </header>
  );
}
