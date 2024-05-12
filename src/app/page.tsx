import HeroSection from "../components/hero-section";
import AboutMeSection from "../components/about-me-section";
import TechnologiesSection from "../components/technologies-section";
import ProjectsSection from "../components/projects-section";
import ContactSection from "../components/contact-section";
import { SiNextdotjs } from "react-icons/si";

export default async function Home() {
  return (
    <main className="w-full px-8 justify-center flex flex-col gap-12 items-center overflow-hidden">
      <HeroSection />
      <AboutMeSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="w-full">
        <div className="pt-12 pb-4 flex flex-col gap-8">
          <div className="text-textMuted/70 text-sm md:text-base grid gap-2 place-items-center">
            <p> Design and Built by Alessandro Benig</p>
            <p>Powered by</p>
            <SiNextdotjs className="size-8 text-white/80" />
          </div>
          <p className="text-sm text-textMuted/60 md:text-left text-center">
            This site is still under development
          </p>
        </div>
      </footer>
    </main>
  );
}
