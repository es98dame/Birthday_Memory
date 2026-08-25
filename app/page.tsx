import Countdown from "./components/countdown";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Hero from "./components/hero";
import Message from "./components/message";
import TwinsArt from "./components/twins-art";
import TwoLights from "./components/two-lights";
import { container } from "./page.css";

export default function Home() {
  return (
    <main className={container} id="top">
      <Hero />
      <TwinsArt />
      <TwoLights />
      <Message />
      <Gallery />
      <Countdown />
      <Footer />
    </main>
  );
}
