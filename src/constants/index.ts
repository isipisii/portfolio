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
	SiReactrouter,
	SiFigma,
	SiSvelte,
	SiPostgresql,
	SiTauri,
	SiSupabase,
	SiExpo,
	SiHono,
	SiBun,
	SiDrizzle,
} from "react-icons/si";

import evently from "../assets/projects/evently.jpg";
import heda from "../assets/projects/heda.png";
import pmbacs from "../assets/projects/PMBACS.png";
import eqph from "../assets/projects/eqph.jpg";
import spotifile from "../assets/projects/spotifle.png";
import threads from "../assets/projects/threads.jpg";
import dhb from "../assets/projects/dhb-revised.jpg";
import ab from "../assets/projects/askvot.jpg";
import deviary from "../assets/projects/deviary.png";
import { StaticImageData } from "next/image";

export const navItems = ["About", "Projects", "Contact"];

export const technologies = [
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "CSS", icon: SiCss3 },
	{ name: "HTML", icon: SiHtml5 },
	{ name: "ReactJS", icon: SiReact },
	{ name: "NextJS", icon: SiNextdotjs },
	{ name: "ReactQuery", icon: SiReactquery },
	{ name: "ReactRouter", icon: SiReactrouter },
	{ name: "ReactHookForm", icon: SiReacthookform },
	{ name: "Npm", icon: SiNpm },
	{ name: "Git", icon: SiGit },
	{ name: "Figma", icon: SiFigma },
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
	{ name: "DrizzleORM", icon: SiDrizzle },
	{ name: "SvelteKit", icon: SiSvelte },
	{ name: "PostgeSQL", icon: SiPostgresql },
	{ name: "Tauri", icon: SiTauri },
	{ name: "Supabase", icon: SiSupabase },
	{ name: "Expo", icon: SiExpo },
	{ name: "HonoJS", icon: SiHono },
	{ name: "Bun", icon: SiBun },
];

export type TProject = {
	name: string;
	src: StaticImageData;
	description: string;
	isContributor?: boolean;
	technologies: string[];
	repoUrl?: string;
	siteUrl?: string;
};

export const projects: TProject[] = [
	{
		name: "Procurement Management and Bids and Awards Control System (PMBACS)",
		src: pmbacs,
		description:
			"Our capstone project developed as an internal procurement and bidding management tool for the Schools Division Office of DepEd.",
		technologies: ["TypeScript", "NextJS", "Prisma", "PostgreSQL", "ShadcnUI", "Tailwind"],
		repoUrl: "https://github.com/isipisii/pmbacs",
		// siteUrl: "https://philippine-eq-visualizer.vercel.app/",
	},
	{
		name: "Evently",
		src: evently,
		isContributor: true,
		description: "An offline desktop application for tracking event attendance, developed collaboratively during our internship.",
		technologies: ["TypeScript", "SvelteKit", "Tauri", "SignalDB", "ShadcnUI", "Tailwind", "Plunk", "QR Code"],
		repoUrl: "https://github.com/pitzzahh/evently",
	},
	{
		name: "Hierarchal Electrical Design Analyzer (HEDA)",
		src: heda,
		isContributor: true,
		description:
			"A desktop application developed to create load scheduling and analyze hierarchical electrical layouts, built as the thesis project of Electrical Engineering students from Bicol University.",
		technologies: ["TypeScript", "SvelteKit", "Tauri", "RxDB", "ShadcnUI", "Tailwind"],
		repoUrl: "https://github.com/pitzzahh/heda",
	},
	{
		name: "Earthquakes PH",
		src: eqph,
		description: "An earthquake visualizer within the Philippines.",
		technologies: ["JavaScript", "ReactJS", "USGS API", "TailwindCSS"],
		repoUrl: "https://github.com/isipisii/philippine-eq-visualizer",
		siteUrl: "https://philippine-eq-visualizer.vercel.app/",
	},
	{
		name: "Deviary",
		src: deviary,
		description: `A developer's community and diary.`,
		technologies: [
			"TypeScript",
			"NextJS",
			"Prisma",
			"MongoDB",
			"NextUI",
			"Markdown",
			"Zustand",
			"Zod",
			"REST API",
			"Tailwind",
			"PusherJS",
			"AuthJS",
			"Uploadthing",
		],
		repoUrl: "https://github.com/isipisii/deviary",
		siteUrl: "https://deviary.vercel.app/",
	},
	{
		name: "Threads Clone",
		src: threads,
		description: "A Threads clone application.",
		technologies: ["TypeScript", "ReactJS", "Mongoose", "MongoDB", "ExpressJS", "NodeJS", "TailwindCSS", "JWT", "Redux Toolkit", "Cloudinary"],
		repoUrl: "https://github.com/isipisii/sinulid",
		siteUrl: "https://threads-clonee.vercel.app/",
	},
	{
		name: "DHB Portfolio",
		src: dhb,
		description: "A graphic designer's portfolio.",
		technologies: ["HTML", "CSS", "JavaScript"],
		repoUrl: "https://github.com/isipisii/DHB-portfolio",
		siteUrl: "https://danhenlybenig.vercel.app/",
	},
	{
		name: "Spotifile",
		src: spotifile,
		description: "An application inspired by Britanny Chiang's Spotify Profile.",
		technologies: ["NextJS", "AuthJS", "TailwindCSS", "Redux Toolkit", "JavaScript", "Spotify API"],
		repoUrl: "https://github.com/isipisii/spotifile",
		siteUrl: "https://spotifile.vercel.app/",
	},
	{
		name: "Ask Bot",
		src: ab,
		description: "A GPT model-powered application. This was created to explore GPT's API.",
		technologies: ["ReactJS", "JavaScript", "TailwindCSS", "GPT API"],
		repoUrl: "https://github.com/isipisii/ask-bott",
	},
];
