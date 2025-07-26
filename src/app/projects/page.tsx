import SectionTitleMotion from "@/components/motions/section-title-motion";
import ProjectList from "@/components/project-list";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function ProjectsPage() {
	return (
		<div className="w-full flex justify-center py-8">
			<div className="w-full max-w-[900px] grid gap-8 px-4">
				<SectionTitleMotion>
					<div className="grid gap-2">
						<Link href="/">
							<button className="group text-primary flex items-center gap-2">
								<BsArrowLeft className="size-5 group-hover:-translate-x-3 transition duration-300" /> Alessandro Benig
							</button>
						</Link>
						<div>
							<h2 className="text-headerText font-semibold text-2xl">All Projects</h2>
							<span className="font-normal text-textMuted text-base">All projects I built that left a noticeable dent on the internet</span>
						</div>
					</div>
				</SectionTitleMotion>
				<ProjectList renderAllProjects />
			</div>
		</div>
	);
}
