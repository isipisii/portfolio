"use client";

import { useState } from "react";
import { technologies } from "../../constants";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { IconType } from "react-icons";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitleMotion from "../motions/section-title-motion";

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.05,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 50 },
	show: { opacity: 1, y: 0 },
};

export default function TechnologiesSection() {
	const [isContainerHovered, setIsContainerHovered] = useState(false);
	const [currentTech, setCurrentTech] = useState<{
		name: string;
		icon: IconType;
	} | null>(null);

	return (
		<section className="w-full flex justify-center py-[4rem]">
			<div className="w-full max-w-[900px] flex flex-col items-start gap-8 relative">
				<SectionTitleMotion>
					<h2 className="text-headerText font-semibold text-2xl">Technologies</h2>
					<span className="font-normal text-textMuted text-sm md:text-base">
						Tools I&apos;ve tinkered with, built stuff, and probably broke a few things too
					</span>
				</SectionTitleMotion>

				<GlowCapture>
					<Glow>
						<motion.div
							variants={containerVariants}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
							className="flex gap-2 flex-wrap justify-center items-center"
						>
							{technologies.map((technology, index) => (
								<motion.div
									key={index}
									variants={itemVariants}
									className="bg-cardBg/80 hover:border-primary rounded-3xl glow:bg-primary/20 p-4 flex flex-col justify-center items-center gap-2 border border-[#484848]/40"
									onMouseEnter={() => setCurrentTech(technology)}
									onMouseLeave={() => setCurrentTech(null)}
								>
									<technology.icon className="text-white/80 size-[20px] md:size-[24px]" />
								</motion.div>
							))}
						</motion.div>
					</Glow>
				</GlowCapture>

				<AnimatePresence mode="wait">
					{currentTech && (
						<motion.div
							key={currentTech.name}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.1 }}
							className="absolute right-0 -top-[1rem] md:bottom-0 -z-10"
						>
							<p className="text-white/10 font-semibold text-xl text-center">{currentTech.name}</p>
							<currentTech.icon className="text-white/10 md:size-[200px] size-[100px]" />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
