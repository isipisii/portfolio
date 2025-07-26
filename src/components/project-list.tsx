import React from "react";
import ProjectContainerMotion from "./motions/project-container-motion";
import ProjectCard from "./project-card";
import { projects } from "@/constants";

export default function ProjectList({ renderAllProjects }: { renderAllProjects?: boolean }) {
	return (
		<div
			className="grid auto-cols-auto grid-flow-row place-items-center gap-12"
			style={{
				gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
			}}
		>
			{(renderAllProjects ? projects : projects.slice(0, 3)).map((project, index) => (
				<ProjectContainerMotion key={index}>
					<ProjectCard project={project} />
				</ProjectContainerMotion>
			))}
		</div>
	);
}
