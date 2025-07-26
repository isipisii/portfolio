"use client";

import { Glow, GlowCapture } from "@codaworks/react-glow";
import { motion } from "framer-motion";
import SectionTitleMotion from "../motions/section-title-motion";

export default function AboutMeSection() {
	const birthday = new Date("2002-10-01");
	const today = new Date();
	const age =
		today.getMonth() > birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate())
			? today.getFullYear() - birthday.getFullYear()
			: today.getFullYear() - birthday.getFullYear() - 1;

	return (
		<section id="about" className="w-full grid place-content-center py-[7rem] relative">
			<GlowCapture>
				<Glow>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.2, delay: 0.2 }}
						className="bg-cardBg/80 w-full max-w-[900px] relative rounded-2xl overflow-hidden border border-[#484848]/40  glow:bg-white/10"
					>
						<div className="p-8 grid gap-4 md:max-w-[70%]">
							<motion.div
								initial={{ y: 50, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.2, delay: 0.6 }}
								className="grid gap-4 z-10"
							>
								<p className="text-textMuted text-sm md:text-base leading-relaxed">
									Hello! I’m Alessandro Benig, {age} years old, and I recently earned my Bachelor’s degree in Information
									Technology. My journey into web development began during the summer before my sophomore year, when I started
									exploring how to build and style websites just for fun. That creative curiosity quickly turned into a passion that
									has fueled my growth ever since.
									<br />
									<br />
									Today, I continue to learn new technologies and build projects to sharpen my skills and stay ahead in the
									ever-evolving tech industry.
								</p>
							</motion.div>
						</div>
						{/* nested circles */}
						<div className="rounded-full w-[400px] h-[400px] absolute -right-[7rem] -bottom-[7rem] bg-[#413f3f13] grid place-content-center">
							<div className="rounded-full w-[300px] h-[300px] bg-[#413f3f33] grid place-content-center">
								<div className="rounded-full w-[200px] h-[200px] bg-[#413f3f89]" />
							</div>
						</div>
					</motion.div>
				</Glow>
			</GlowCapture>
		</section>
	);
}
