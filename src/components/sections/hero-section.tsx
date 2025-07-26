"use client";

import { just_me_again_down_here } from "@/app/fonts";
import Image from "next/image";
import HeroLogo from "@/assets/hero-logo.svg";
import Underline from "@/assets/underline.svg";
import { motion } from "framer-motion";

export default function HeroSection() {
	const birthday = new Date("2002-10-01");
	const today = new Date();
	const age =
		today.getMonth() > birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate())
			? today.getFullYear() - birthday.getFullYear()
			: today.getFullYear() - birthday.getFullYear() - 1;

	return (
		<section className="mt-[150px] flex items-center justify-between max-w-[900px] w-full relative">
			<div className="grid gap-2">
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.2, delay: 0.4 }}
				>
					<h1 className="text-white/90 text-3xl md:text-5xl font-bold">Alessandro Benig.</h1>
				</motion.div>

				<div>
					<motion.h1
						initial={{ y: 50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: 0.4 }}
						className="text-3xl md:text-5xl font-bold bg-gradient-to-t  from-[#d1f7b5] to-[#02c39a] bg-clip-text text-transparent"
					>
						Full-stack{" "}
						<span className="relative bg-gradient-to-t from-[#d1f7b5] to-[#02c39a] bg-clip-text text-transparent">
							developer
							<div className={just_me_again_down_here.className}>
								<p className={"text-white/90 text-base md:text-[1.6rem] stuck absolute -right-[6rem] -rotate-12 -top-6"}>
									but sometimes, <span className="text-primary">stuck.</span>
								</p>
							</div>
						</span>
					</motion.h1>
				</div>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.2, delay: 0.4 }}
					className="text-textMuted/80 text-sm mb-8 md:text-base"
				>
					{"/ˌæləˈsɑːndroʊ/ — no meaning, just a fancy way to say my name"}
				</motion.p>

				<motion.div
					id="about"
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.2, delay: 0.4 }}
					className="grid gap-4 z-10"
				>
					<p className="text-textMuted text-sm md:text-base leading-relaxed">
						Hello! I’m Alessandro Benig, {age} years old, and I recently earned my Bachelor’s degree in Information Technology. My journey
						into software development began during the summer before my sophomore year, when I started exploring how to build and style
						websites just for fun. That creative curiosity quickly turned into a passion that has fueled my growth ever since.
						<br />
						<br />
						Although I have experience with full-stack development, I’m currently focused on crafting pixel-perfect frontend applications
						— building responsive, accessible, and user-friendly interfaces using modern frameworks and tools. I’ve gained hands-on
						experience through an internship, personal projects, and freelance work, which helped me apply what I’ve learned in real-world
						scenarios and collaborate effectively with others.
						<br />
						<br />
						Today, I continue to learn new technologies and build projects to sharpen my skills and stay ahead in the ever-evolving tech
						industry. I’m also actively looking for frontend development opportunities where I can contribute, grow, and work with
						passionate teams on meaningful projects.
					</p>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.3, delay: 0.8 }}
				className="absolute translate-x-[10rem] right-0"
			>
				<Image src={HeroLogo} width={400} height={400} alt="logo" className="opacity-10" />
			</motion.div>
		</section>
	);
}
