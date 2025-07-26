import HeroSection from "../components/sections/hero-section";
import AboutMeSection from "../components/sections/about-me-section";
import TechnologiesSection from "../components/sections/technologies-section";
import ProjectsSection from "../components/sections/projects-section";
import ContactSection from "../components/sections/contact-section";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/layout/nav-bar";

export default async function Home() {
	return (
		<>
			<Navbar />
			<main className="w-full px-8 justify-center flex flex-col gap-10 items-center overflow-hidden">
				<HeroSection />
				{/* <AboutMeSection /> */}
				<TechnologiesSection />
				<ProjectsSection />
				<ContactSection />
				<Footer />
			</main>
		</>
	);
}
