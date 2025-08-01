"use client";

import React from "react";
import NowPlayingWidget from "../now-playing-widget";
import { motion } from "framer-motion";
import RoundedGradient from "../rounded-gradient";

export default function ContactSection() {
	return (
		<section id="contact" className="flex justify-center w-full py-[7rem]">
			<div className="grid gap-[10rem] place-items-center relative w-full max-w-[900px]">
				<RoundedGradient className="absolute right-0 top-0 -z-10" />
				<RoundedGradient className="absolute left-0 bottom-0 -z-10" />
				<div className="grid gap-8 place-items-center">
					<div className="grid gap-4">
						<motion.p
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.2, delay: 0.2 }}
							className="text-primary text-center"
						>
							Got an idea?
						</motion.p>
						<motion.h2
							initial={{ y: 50, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.2, delay: 0.4 }}
							className="text-headerText font-bold text-5xl  text-center"
						>
							Get in touch
						</motion.h2>
					</div>
					<motion.button
						initial={{ y: 50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.2, delay: 0.5 }}
						className="rounded-2xl p-3 bg-primary/80 text-white w-52 text-lg "
					>
						<a href="mailto:alessandrobenig@gmail.com">Send an email</a>
					</motion.button>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.3, delay: 0.6 }}
					className="gap-4 flex items-center flex-col z-10 w-full"
				>
					<h4 className="text-white/70 font-medium text-sm md:text-base text-center">
						Did scrolling make you exhausted?
						<br className="md:hidden block" /> Jam with me instead.
					</h4>
					<NowPlayingWidget />
				</motion.div>
			</div>
		</section>
	);
}
