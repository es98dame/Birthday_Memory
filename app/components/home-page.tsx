import Countdown from "./countdown";
import Footer from "./footer";
import Gallery from "./gallery";
import Hero from "./hero";
import LangSwitcher from "./lang-switcher";
import Message from "./message";
import TwinsArt from "./twins-art";
import TwoLights from "./two-lights";
import type { Locale } from "@/app/i18n/dictionary";
import { container } from "../page.css";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <main className={container} id="top">
      <LangSwitcher locale={locale} />
      <Hero locale={locale} />
      <TwinsArt locale={locale} />
      <TwoLights locale={locale} />
      <Message locale={locale} />
      <Gallery locale={locale} />
      <Countdown locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
