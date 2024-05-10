import {
  SiShadcnui,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiReact,
  SiVercel,
  SiPrisma,
  SiHtml5,
  SiTailwindcss,
  SiNextui,
  SiJavascript,
  SiNextdotjs,
  SiCss3,
  SiReactquery,
  SiReacthookform,
  SiRedux,
  SiZod,
  SiNpm,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import eqph from "../assets/projects/eqph.jpg";
import spotifile from "../assets/projects/spotifle.png";
import threads from "../assets/projects/threads.jpg";
import dhb from "../assets/projects/dhb-revised.jpg";
import ab from "../assets/projects/askvot.jpg";
import deviary from "../assets/projects/deviary.png";
import { StaticImageData } from "next/image";

export const technologies = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "CSS", icon: SiCss3 },
  { name: "HTML", icon: SiHtml5 },
  { name: "ReactJS", icon: SiReact },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "ReactQuery", icon: SiReactquery },
  { name: "ReactHookForm", icon: SiReacthookform },
  { name: "Npm", icon: SiNpm },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Redux", icon: SiRedux },
  { name: "Zod", icon: SiZod },
  { name: "ExpressJS", icon: SiExpress },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Shadcnui", icon: SiShadcnui },
  { name: "NextUI", icon: SiNextui },
  { name: "NodeJS", icon: SiNodedotjs },
  { name: "Prisma", icon: SiPrisma },
  { name: "Vercel", icon: SiVercel },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Mongoose", icon: SiMongoose },
];

export type TProject = {
  name: string;
  src: StaticImageData;
  description: string;
  repoName: string;
};

export const projects = [
  {
    name: "Earthquakes PH",
    src: eqph,
    description: "An earthquake visualizer within the Philippines.",
    repoName: "philippine-eq-visualizer",
  },
  {
    name: "Deviary",
    src: deviary,
    description: `A developer's community and diary.`,
    repoName: "deviary",
  },
  {
    name: "Threads Clone",
    src: threads,
    description: "A Threads clone application.",
    repoName: "sinulid",
  },
  {
    name: "DHB Porfolio",
    src: dhb,
    description: "A graphic designer's portfolio.",
    repoName: "DHB-portfolio",
  },
  {
    name: "Spotifile",
    src: spotifile,
    description:
      "An application inspired by Britanny Chiang's Spotify Profile.",
    repoName: "spotifile",
  },
  {
    name: "Ask Bot",
    src: ab,
    description:
      "A GPT model-powered application. This was created to explore GPT's API.",
    repoName: "ask-bott",
  },
];
