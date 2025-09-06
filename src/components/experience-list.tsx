import CardContainerMotion from "./motions/card-container-motion";
import { experiences } from "@/constants";
import ExperienceCard from "./experience-card";

export default function ExperienceList() {
	return (
		<div
			className="grid auto-cols-auto grid-flow-row place-items-center gap-6 group"
			style={{
				gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
			}}
		>
			{experiences.slice(0, 3).map((experience, index) => (
				<CardContainerMotion key={index}>
					<ExperienceCard experience={experience} />
				</CardContainerMotion>
			))}
		</div>
	);
}
