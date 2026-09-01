import { getDictionary, type Locale } from "@/app/i18n/dictionary";
import { container, figure, image } from "./twins-art.css";

export default function TwinsArt({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).twinsArt;

  return (
    <div className={container}>
      <figure className={figure}>
        <img className={image} src="/LunaAndLumi.jpg" alt={t.alt} />
      </figure>
    </div>
  );
}
