"use client";

import { useEffect, useState } from "react";
import { getDictionary, type Locale } from "@/app/i18n/dictionary";
import {
  container,
  description,
  digit,
  grid,
  label,
  title,
  titleAccent,
  titleWrap,
  unit,
} from "./countdown.css";

const TARGET = new Date("2043-09-01T00:00:00+09:00");

interface Remaining {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function getRemaining(now: Date): Remaining {
  const diff = TARGET.getTime() - now.getTime();
  if (diff <= 0) {
    return { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
  let rest = totalSeconds - years * 365 * 24 * 60 * 60;
  const days = Math.floor(rest / (24 * 60 * 60));
  rest -= days * 24 * 60 * 60;
  const hours = Math.floor(rest / (60 * 60));
  rest -= hours * 60 * 60;
  const minutes = Math.floor(rest / 60);
  const seconds = rest - minutes * 60;

  return { years, days, hours, minutes, seconds, done: false };
}

export default function Countdown({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).countdown;
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(getRemaining(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={container} id="countdown">
      <div className={titleWrap}>
        <h2 className={title}>{t.title}</h2>
        <span className={titleAccent} />
      </div>
      <p className={description}>{t.description}</p>

      {remaining?.done ? (
        <p className={description}>{t.done}</p>
      ) : (
        <div className={grid}>
          <Unit value={remaining?.years} label={t.years} />
          <Unit value={remaining?.days} label={t.days} />
          <Unit value={remaining?.hours} label={t.hours} />
          <Unit value={remaining?.minutes} label={t.minutes} />
          <Unit value={remaining?.seconds} label={t.seconds} />
        </div>
      )}
    </section>
  );
}

function Unit({ value, label: unitLabel }: { value?: number; label: string }) {
  return (
    <div className={unit}>
      <span className={digit}>{value == null ? "--" : value}</span>
      <span className={label}>{unitLabel}</span>
    </div>
  );
}
