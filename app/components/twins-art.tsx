import { container, figure, image } from "./twins-art.css";

export default function TwinsArt() {
  return (
    <div className={container}>
      <figure className={figure}>
        <img
          className={image}
          src="/LunaAndLumi.jpg"
          alt="루나와 루미"
        />
      </figure>
    </div>
  );
}
