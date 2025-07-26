import HeroSection from "../components/sections/hero-section";
import AboutMeSection from "../components/sections/about-me-section";
import TechnologiesSection from "../components/sections/technologies-section";
import ProjectsSection from "../components/sections/projects-section";
import ContactSection from "../components/sections/contact-section";
import { SiNextdotjs } from "react-icons/si";

export default async function Home() {

  return (
    <main className="w-full px-8 justify-center flex flex-col gap-10 items-center overflow-hidden">
      <HeroSection />
      {/* <AboutMeSection /> */}
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="w-full">
        <div className="pt-12 pb-4 flex flex-col gap-8">
          <div className="text-textMuted/70 text-sm md:text-base grid gap-2 place-items-center">
            <p> Designed and Built by Alessandro Benig</p>
            <p>Powered by</p>
            <SiNextdotjs className="size-8 text-white/80" />
          </div>
        </div>
      </footer>
    </main>
  );
}
