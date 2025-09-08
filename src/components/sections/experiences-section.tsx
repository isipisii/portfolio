import ExperienceList from "../experience-list";
import SectionTitleMotion from "../motions/section-title-motion";
import RoundedGradient from "../rounded-gradient";

export default function ExperiencesSection() {
	return (
		<section id="experiences" className="py-[5rem] w-full flex justify-center">
			<div className="w-full max-w-[900px] grid gap-8 relative">
				<SectionTitleMotion>
					<div className="flex-1">
						<h2 className="text-headerText font-semibold text-2xl">Experiences</h2>
						<span className="font-normal text-textMuted text-sm md:text-base">The battlegrounds that amplified my skills</span>
					</div>
				</SectionTitleMotion>
				<ExperienceList />
				<RoundedGradient className="absolute left-0 bottom-64 -z-10 opacity-80" />
				<RoundedGradient className="absolute right-0 -bottom-[200px] -z-10 opacity-80" />
			</div>
		</section>
	);
}
