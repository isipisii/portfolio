import Image from "next/image";
import { TProject } from "../constants";
import { FaRegStar } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa6";

// the api rate limit exceeded
// export async function getRepoStars(repoName: string) {
//   const res = await fetch(`https://api.github.com/repos/isipisii/${repoName}`);
//   const data = await res.json();
//   console.log(data)
//   return data.stargazers_count as number;
// }

export default async function ProjectCard({ project }: { project: TProject }) {
  // const stars = await getRepoStars(project.repoName);
  
  return (
    <div className="w-full rounded-2xl gap-6 flex md:flex-row flex-col items-start relative overflow-hidden p-4">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#484848,transparent_1px),linear-gradient(to_bottom,#484848,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_60%_0%,#000_80%,transparent_110%)]" />
      <Image
        src={project.src}
        alt="project-image"
        width={500}
        height={500}
        className="z-10 rounded-xl border-[#484848]/70 border"
      />
      <div className="z-10 md:self-end grid gap-4 w-full">
        <div className="w-full gap-4 items-start flex justify-between">
          <div>
            <h3 className="text-white/90 font-semibold text-[28px] md:text-3xl">
              {project.name}
            </h3>
            <p className="text-white/80 text-lg">{project.description}</p>
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
            <p
              className="text-textMuted border border-[#484848]/40 bg-cardBg py-1 px-2 rounded-lg text-sm"
              key={index}
            >
              {tech}
            </p>
          ))}
        </div>
        {/* <div className="flex gap-2 place-self-end">
          <FaRegStar className="h-5 w-5 text-textMuted" />
          <p className="text-textMuted font-semibold">{stars}</p>
        </div> */}
      </div>
    </div>
  );
}
