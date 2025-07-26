import Image from "next/image";
import { TProject } from "../constants";
import { SiGithub } from "react-icons/si";
import { FaCodeBranch, FaLink } from "react-icons/fa6";

export default async function ProjectCard({ project }: { project: TProject }) {
	return (
		<div className="w-full gap-6 flex md:flex-row flex-col items-start relative overflow-hidden py-4">
			<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#02c39a,transparent_1px),linear-gradient(to_bottom,#02c39a,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_60%_0%,#000_80%,transparent_110%)] opacity-15" />
			<Image
				src={project.src}
				alt="project-image"
				width={350}
				height={350}
				className="z-10 rounded-3xl object-cover border-[#484848]/70 border"
			/>
			<div className="z-10 md:self-end grid gap-4 w-full">
				<div className="w-full gap-4 items-start flex justify-between">
					<div className="flex flex-col items-start gap-2">
						{project.isContributor && (
							<div className="flex items-center  gap-2 bg-[#1e1e1e]/80 py-1 px-3 rounded-full border border-[#484848]/40">
								<FaCodeBranch className="text-emerald-400 size-3" />
								<span className="text-emerald-400 text-xs font-medium">Contributor</span>
							</div>
						)}
						<h3 className="text-white/90 font-semibold text-xl ">{project.name}</h3>
						<p className="text-white/50 font-light text-sm">{project.description}</p>
					</div>
					<div className="flex items-center gap-3">
						<a href={project.repoUrl} target="_blank">
							<SiGithub className="size-[20px] md:size-[24px] text-white/75 " />
						</a>
						{project.siteUrl && (
							<a href={project.siteUrl} target="_blank">
								<FaLink className="size-[20px] md:size-[24px] text-white/75 " />
							</a>
						)}
					</div>
				</div>

				<div className="flex flex-wrap gap-2 max-w-[400px]">
					{project.technologies.map((tech, index) => (
						<p className="text-textMuted border border-[#484848]/40 bg-cardBg py-1 px-2 rounded-xl text-xs" key={index}>
							{tech}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
