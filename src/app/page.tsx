import HeroSection from "./components/hero-section";
import AboutMeSection from "./components/about-me-section";
import TechnologiesSection from "./components/technologies-section";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/contact-section";
import { SiNextdotjs } from "react-icons/si";

export default async function Home() {
  return (
    <main className="w-full px-8 justify-center flex flex-col gap-12 items-center overflow-hidden">
      <HeroSection />
      <AboutMeSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-12 w-full">
        <div className="text-textMuted text-sm md:text-base grid gap-2 place-items-center">
          <p> Design and Built by Alessandro Benig</p>
          <p>Powered by</p>
          <SiNextdotjs className="size-8 text-white/90" />
        </div>
      </footer>
    </main>
  );
}
