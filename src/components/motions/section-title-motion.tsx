"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionTitleMotion({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.h2
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.4 }}
      className="text-headerText font-bold text-[32px] md:text-4xl"
    >
      {children}
    </motion.h2>
  );
}
