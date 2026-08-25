"use client";

import { useEffect, useState, type MouseEvent } from "react";
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

export default function Gallery() {
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
        <h2 className={title}>사진첩</h2>
        <span className={titleAccent} />
      </div>

      <span className={description}>
        루나 & 루미의 소중한 순간들을 함께 나눠보세요.
      </span>
      <div className={imageContainer}>
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            className={imageButton}
            onClick={() => setIndex(i)}
            aria-label="사진 크게 보기"
          >
            <img
              className={image}
              src={img}
              alt="루나 & 루미"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {index != null && (
        <div
          className={lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="확대된 사진"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            className={closeButton}
            onClick={() => setIndex(null)}
            aria-label="닫기"
          >
            ×
          </button>
          <button
            type="button"
            className={`${navButton} ${navPrev}`}
            onClick={showPrev}
            aria-label="이전 사진"
          >
            ‹
          </button>
          <img
            className={lightboxImage}
            src={images[index]}
            alt="루나 & 루미"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className={`${navButton} ${navNext}`}
            onClick={showNext}
            aria-label="다음 사진"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
