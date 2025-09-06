"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function CardContainerMotion({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3, delay: 0.1 }}
			className="w-full rounded-2xl gap-6 flex md:flex-row flex-col items-start relative"
		>
			{children}
		</motion.div>
	);
}
