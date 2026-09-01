"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { getDictionary, type Locale } from "@/app/i18n/dictionary";
import {
  closeButton,
  container,
  description,
  image,
  imageButton,
  imageContainer,
  lightbox,
  lightboxImage,
  navButton,
  navNext,
  navPrev,
  title,
  titleAccent,
  titleWrap,
} from "./gallery.css";
import { images } from "./gallery-data";

export { images };

export default function Gallery({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).gallery;
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index == null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowLeft") {
        setIndex((current) =>
          current == null ? current : (current - 1 + images.length) % images.length
        );
      }
      if (event.key === "ArrowRight") {
        setIndex((current) =>
          current == null ? current : (current + 1) % images.length
        );
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index]);

  const showPrev = (event: MouseEvent) => {
    event.stopPropagation();
    setIndex((current) =>
      current == null ? current : (current - 1 + images.length) % images.length
    );
  };

  const showNext = (event: MouseEvent) => {
    event.stopPropagation();
    setIndex((current) =>
      current == null ? current : (current + 1) % images.length
    );
  };

  return (
    <section className={container}>
      <div className={titleWrap}>
        <h2 className={title}>{t.title}</h2>
        <span className={titleAccent} />
      </div>

      <span className={description}>{t.description}</span>
      <div className={imageContainer}>
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            className={imageButton}
            onClick={() => setIndex(i)}
            aria-label={t.enlarge}
          >
            <img className={image} src={img} alt={t.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {index != null && (
        <div
          className={lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={t.lightbox}
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            className={closeButton}
            onClick={() => setIndex(null)}
            aria-label={t.close}
          >
            ×
          </button>
          <button
            type="button"
            className={`${navButton} ${navPrev}`}
            onClick={showPrev}
            aria-label={t.prev}
          >
            ‹
          </button>
          <img
            className={lightboxImage}
            src={images[index]}
            alt={t.alt}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className={`${navButton} ${navNext}`}
            onClick={showNext}
            aria-label={t.next}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
