"use client";

import { useEffect, useState } from "react";
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

export default function Countdown() {
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
        <h2 className={title}>성년까지</h2>
        <span className={titleAccent} />
      </div>
      <p className={description}>
        루나와 루미가 18살이 되는 날까지
      </p>

      {remaining?.done ? (
        <p className={description}>드디어 성년이 되었어요 🎉</p>
      ) : (
        <div className={grid}>
          <Unit value={remaining?.years} label="년" />
          <Unit value={remaining?.days} label="일" />
          <Unit value={remaining?.hours} label="시간" />
          <Unit value={remaining?.minutes} label="분" />
          <Unit value={remaining?.seconds} label="초" />
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
