import { projects } from "../constants";
import SectionTitleMotion from "./motions/section-title-motion";
import ProjectCard from "./project-card";
import ProjectContainerMotion from "./motions/project-container-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className=" py-[7rem] w-full flex justify-center">
      <div className="w-full max-w-[1200px] grid gap-8">
        <SectionTitleMotion>
          Projects <br />{" "}
          <span className="font-normal text-textMuted text-[25px]">
            These are the projects I&apos;ve built
          </span>
        </SectionTitleMotion>
        <div
          className="grid auto-cols-auto grid-flow-row place-items-center gap-12"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
          }}
        >
          {projects.map((project, index) => (
            <ProjectContainerMotion key={index}>
              <ProjectCard project={project} />
            </ProjectContainerMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
