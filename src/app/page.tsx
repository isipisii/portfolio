import HeroSection from "./components/hero-section";
import AboutMeSection from "./components/about-me-section";
import TechnologiesSection from "./components/technologies-section";
import ProjectsSection from "./components/projects-section";

export default async function Home() {
  
  return (
    <main className="w-full px-8 justify-center flex flex-col gap-12 items-center overflow-hidden">
      <HeroSection />
      <AboutMeSection />
      <TechnologiesSection />
      <ProjectsSection />
    </main>
  );
}
