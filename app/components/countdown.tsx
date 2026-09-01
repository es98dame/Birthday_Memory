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

function localTarget() {
  return new Date(TARGET.year, TARGET.month - 1, TARGET.day, 0, 0, 0, 0);
}

function getRemaining(now: Date): Remaining {
  const target = localTarget();
  if (target.getTime() - now.getTime() <= 0) {
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

  let years = target.getFullYear() - now.getFullYear();
  let months = target.getMonth() - now.getMonth();
  let days = target.getDate() - now.getDate();
  let hours = target.getHours() - now.getHours();
  let minutes = target.getMinutes() - now.getMinutes();
  let seconds = target.getSeconds() - now.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    months -= 1;
    // Days in the month before the target month
    days += new Date(target.getFullYear(), target.getMonth(), 0).getDate();
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

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
