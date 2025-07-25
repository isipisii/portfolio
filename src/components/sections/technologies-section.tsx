"use client";

import { useState } from "react";
import { technologies } from "../../constants";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { IconType } from "react-icons";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitleMotion from "../motions/section-title-motion";

export default function TechnologiesSection() {
	const [isContainerHovered, setIsContainerHovered] = useState(false);
	const [currentTech, setCurrentTech] = useState<{
		name: string;
		icon: IconType;
	} | null>(null);

	return (
		<section className="w-full flex justify-center py-[4rem]">
			<div className=" w-full max-w-[1200px] flex flex-col items-start gap-8 relative">
				<SectionTitleMotion>
					Technologies <br /> <span className="font-normal text-textMuted text-[25px]">I&apos;ve worked with</span>
				</SectionTitleMotion>
				<GlowCapture>
					<Glow>
						<div
							className="flex gap-2 flex-wrap justify-center md:justify-start items-center"
							onMouseEnter={() => setIsContainerHovered(true)}
							onMouseLeave={() => {
								setIsContainerHovered(false);
								setCurrentTech(null);
							}}
						>
							{technologies.map((technology, index) => (
								<motion.div
									initial={{ y: 50, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.1, delay: 0.2 + index * 0.04 }}
									key={index}
									className="bg-cardBg/80 hover:border-white rounded-xl glow:bg-primary/20  p-4 flex flex-col justify-center items-center gap-2 border border-[#484848]/40"
									onMouseEnter={() => {
										if (isContainerHovered) {
											setCurrentTech(technology);
										}
									}}
								>
									<technology.icon className="text-white/80 size-[35px]" />
								</motion.div>
							))}
						</div>
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
							className="absolute right-0 -top-[3rem] md:bottom-0 -z-10 grid gap-4"
						>
							<p className="text-white/10 font-semibold text-2xl text-center">{currentTech.name}</p>
							<currentTech.icon className="text-white/10 md:size-[300px] size-[200px]" />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
