import { FlowerArt } from "./svgs";
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

export default function TwoLights() {
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
      <h2 className={title}>두 개의 빛</h2>
      <p className={intro}>
      하나님께서 빛을 만드시고
      <br /> 낮과 밤을 밝힐 두 광명을 두셨듯이,
      <br />  
      우리에게도 서로 다른 빛을 지닌 두 아이가 왔습니다.<br />  
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
            밤을 조용히 비추는
            <br />
            작은 달빛
          </p>
          <img
            className={portraitLuna}
            src="/Luna.jpg"
            alt="루나"
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
            세상의 첫 빛처럼
            <br />
            밝음과 기쁨을 전하는
          </p>
          <img
            className={portraitLumi}
            src="/Lumi.jpg"
            alt="루미"
            loading="lazy"
          />
        </article>
      </div>

      <p className={closing}>
      달과 빛이 함께하듯,
      <br />
      두 아이가 서로의 빛이 되어 가기를 바랍니다.
      </p>
      <div className={heartRow}>
        <LeafHeart />
      </div>
    </section>
  );
}
