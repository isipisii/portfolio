import { TExperience } from "@/constants";
import React from "react";

export default function ExperienceCard({ experience }: { experience: TExperience }) {
	return (
		<div
			className="flex md:flex-row flex-col group/item justify-between items-start gap-4 rounded-2xl p-5
            hover:bg-[#11101080] border border-[#484848]/0 hover:border-[#484848]/20 hover:backdrop-blur-xl transition ease-in-out duration-300
            group-hover:opacity-50 hover:!opacity-100"
		>
			<p className="text-white/60 text-sm flex-1 max-w-[140px]">{experience.timeline}</p>
			<div className="space-y-3 md:w-[70%] flex-1">
				<div>
					<p className="text-white font-medium transition ease-in-out duration-300 group-hover/item:text-primary">{experience.company}</p>
					<span className="text-white/70 group-hover/item:text-white/80 transition ease-in-out duration-300">{experience.jobTitle}</span>
				</div>
				<p className="text-textMuted text-sm">{experience.summary}</p>

				<div className="flex flex-wrap gap-2 ">
					{experience.technologies.map((tech, index) => (
						<p className="border border-[#484848]/40 bg-primary/5 text-primary py-1 px-2 rounded-xl text-xs" key={index}>
							{tech}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
