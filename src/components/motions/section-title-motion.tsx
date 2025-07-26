"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionTitleMotion({ children, delay }: { children: ReactNode; delay?: number }) {
	return (
		<motion.div
			initial={{ y: 50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.2, delay: delay || 0.4 }}
		>
			{children}
		</motion.div>
	);
}
