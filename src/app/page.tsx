import AboutSection from "./section/home/aboutSection/AboutSection";
import HeroSection from "./section/home/heroSection/HeroSection";

export default function Home() {
  return (
    <main id="page_home" className={"home"}>
      <HeroSection />
      <AboutSection />
    </main>
  );
}
