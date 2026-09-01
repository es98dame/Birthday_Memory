import { getDictionary, type Locale } from "@/app/i18n/dictionary";
import { container, invite } from "./hero.css";

export default function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).hero;

  return (
    <header className={container}>
      <h1 className={invite}>{t.invite}</h1>
    </header>
  );
}
