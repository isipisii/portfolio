import Link from "next/link";
import SectionTitleMotion from "../motions/section-title-motion";
import ProjectList from "../project-list";
import { BsArrowRight } from "react-icons/bs";

export default function ProjectsSection() {
	return (
		<section id="projects" className="py-[7rem] w-full flex justify-center">
			<div className="w-full max-w-[900px] grid gap-8">
				<SectionTitleMotion>
					<div className="flex items-center justify-between ">
						<div>
							<h2 className="text-headerText font-semibold text-2xl">Projects</h2>
							<span className="font-normal text-textMuted text-base">Projects I built that left a noticeable dent on the internet</span>
						</div>
						<Link href="/projects">
							<button className="group text-primary flex items-center gap-2">
								View All Pojects <BsArrowRight className="size-5 group-hover:translate-x-3 transition duration-300" />
							</button>
						</Link>
					</div>
				</SectionTitleMotion>
				<ProjectList />
			</div>
		</section>
	);
}
