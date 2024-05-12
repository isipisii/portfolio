"use client";

import NavLogo from "../assets/nav-logo.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed w-full backdrop-blur bg-[#151418]/20 z-20 flex justify-center">
      <nav className="px-8 flex justify-between items-center py-4 max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <Image src={NavLogo} width={50} height={50} alt="ale-logo" />
        </motion.div>

        <div className="flex gap-12">
          <motion.a
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.4 }}
            href="#about"
            className="text-textMuted hover:text-primary/80"
          >
            About
          </motion.a>
          <motion.a
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.6 }}
            href="#projects"
            className="text-textMuted hover:text-primary/80"
          >
            Projects
          </motion.a>
          <motion.a
            className="text-textMuted hover:text-primary/80"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.8 }}
            href="#contact"
          >
            Contact
          </motion.a>
        </div>
      </nav>
    </header>
  );
}
