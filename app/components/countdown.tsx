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

/** Calendar target: Sep 2, 2043 — midnight in the visitor's local timezone */
const TARGET = { year: 2043, month: 9, day: 2 };

interface Remaining {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function localTargetMs() {
  return new Date(
    TARGET.year,
    TARGET.month - 1,
    TARGET.day,
    0,
    0,
    0,
    0
  ).getTime();
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

function getRemaining(now: Date): Remaining {
  const targetMs = localTargetMs();
  const diff = targetMs - now.getTime();
  if (diff <= 0) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      done: true,
    };
  }

  // Y/M/D from the visitor's local calendar date
  let years = TARGET.year - now.getFullYear();
  let months = TARGET.month - (now.getMonth() + 1);
  let days = TARGET.day - now.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = TARGET.month === 1 ? 12 : TARGET.month - 1;
    const prevYear = TARGET.month === 1 ? TARGET.year - 1 : TARGET.year;
    days += daysInMonth(prevYear, prevMonth);
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;

  return { years, months, days, hours, minutes, seconds, done: false };
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
      <p className={description}>{t.basis}</p>

      {remaining?.done ? (
        <p className={description}>{t.done}</p>
      ) : (
        <div className={grid}>
          <Unit value={remaining?.years} label={t.years} />
          <Unit value={remaining?.months} label={t.months} />
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
