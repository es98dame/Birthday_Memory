import { container, figure, image } from "./twins-art.css";

export default function TwinsArt() {
  return (
    <div className={container}>
      <figure className={figure}>
        <img
          className={image}
          src="/twins_drawing_withoutbg.png"
          alt="루나와 루미"
        />
      </figure>
    </div>
  );
}
