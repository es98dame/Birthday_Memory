import { block, container, gift, meta } from "./footer.css";

export default function Footer() {
  return (
    <footer className={container}>
      <div className={block}>
        <span>루나 & 루미 첫번째 생일</span>
        <time className={meta} dateTime="2026-09-02">
          2026.09.02
        </time>
      </div>
      <a href="#top" className={gift}>
        맨 위로 ↑
      </a>
    </footer>
  );
}
