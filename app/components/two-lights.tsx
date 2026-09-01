import { FlowerArt } from "./svgs";
import { getDictionary, type Locale } from "@/app/i18n/dictionary";
import {
  child,
  childDesc,
  closing,
  container,
  decoAccent,
  decoLeft,
  decoRight,
  divider,
  duo,
  heartRow,
  iconLumi,
  iconLuna,
  intro,
  koreanName,
  moonMark,
  portraitLumi,
  portraitLuna,
  scriptName,
  title,
} from "./two-lights.css";

function MoonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a9.5 9.5 0 0 0 0 19c4.4 0 8.1-3 9.2-7.1A8 8 0 0 1 12 2z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="12" cy="12" r="4.5" />
      <path
        d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CrescentMark() {
  return (
    <svg className={moonMark} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14.5 3.2A8.5 8.5 0 1 0 20.8 14 7 7 0 0 1 14.5 3.2z" />
    </svg>
  );
}

function LeafHeart() {
  return (
    <svg width="72" height="18" viewBox="0 0 72 18" fill="none" aria-hidden>
      <path
        d="M2 10c6-6 14-6 20 0-6 6-14 6-20 0z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M36 14c-2.2-2.2-2.2-5.2 0-6.6 2.2 1.4 2.2 4.4 0 6.6z"
        fill="currentColor"
      />
      <path
        d="M50 10c6-6 14-6 20 0-6 6-14 6-20 0z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

export default function TwoLights({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).twoLights;

  return (
    <section className={container}>
      <div className={decoLeft}>
        <FlowerArt />
      </div>
      <div className={decoRight}>
        <FlowerArt />
      </div>
      <div className={decoAccent}>
        <FlowerArt />
      </div>

      <CrescentMark />
      <h2 className={title}>{t.title}</h2>
      <p className={intro}>
        {t.intro[0]}
        <br /> {t.intro[1]}
        <br />
        {t.intro[2]}
        <br />
      </p>

      <div className={duo}>
        <div className={divider} />

        <article className={child}>
          <div className={iconLuna}>
            <MoonIcon />
          </div>
          <p className={scriptName}>Luna</p>
          <p className={koreanName}>루나</p>
          <p className={childDesc}>
            {t.lunaDesc[0]}
            <br />
            {t.lunaDesc[1]}
          </p>
          <img
            className={portraitLuna}
            src="/Luna.jpg"
            alt={t.lunaAlt}
            loading="lazy"
          />
        </article>

        <article className={child}>
          <div className={iconLumi}>
            <SunIcon />
          </div>
          <p className={scriptName}>Lumi</p>
          <p className={koreanName}>루미</p>
          <p className={childDesc}>
            {t.lumiDesc[0]}
            <br />
            {t.lumiDesc[1]}
          </p>
          <img
            className={portraitLumi}
            src="/Lumi.jpg"
            alt={t.lumiAlt}
            loading="lazy"
          />
        </article>
      </div>

      <p className={closing}>
        {t.closing[0]}
        <br />
        {t.closing[1]}
      </p>
      <div className={heartRow}>
        <LeafHeart />
      </div>
    </section>
  );
}
