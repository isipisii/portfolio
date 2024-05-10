import { projects } from "../constants";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  return (
    <section className=" w-full flex justify-center">
      <div className="w-full max-w-[1200px] grid gap-8">
        <h2 className="text-headerText leading-8 font-bold text-[32px]">
          Projects <br />{" "}
          <span className="font-normal text-textMuted text-[25px]">
            These are the projects I&apos;ve built
          </span>
        </h2>
        <div
          className="grid auto-cols-auto grid-flow-row place-items-center gap-12"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
