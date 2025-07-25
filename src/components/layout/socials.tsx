"use client";

import { motion } from "framer-motion";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

export default function Socials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 1 }}
      className="hidden fixed bottom-0 right-12 lg:grid gap-8 place-items-center"
    >
      <div className="grid gap-8">
        <a href="https://github.com/isipisii" target="_blank">
          <SiGithub className="text-headerText size-6" />
        </a>
        <a href="https://web.facebook.com/alessandro.benig" target="_blank">
          <SiFacebook className="text-headerText size-6" />
        </a>
          <a href="https://www.linkedin.com/in/alessandro-benig-3b8b7a257/" target="_blank">
          <SiLinkedin className="text-headerText size-6" />
        </a>
      </div>
      <span className="w-[1px] bg-headerText h-[100px]"></span>
    </motion.div>
  );
}
