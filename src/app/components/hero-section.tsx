"use client";

import { just_me_again_down_here } from "../fonts";
import Image from "next/image";
import HeroLogo from "../assets/hero-logo.svg";
import Underline from "../assets/underline.svg";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-between max-w-[1200px] w-full relative">
      <div className="grid gap-3">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 1 }}
          className="text-primary"
        >
          Hello, world! I am
        </motion.p>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 1.2 }}
          className="text-white text-5xl md:text-7xl font-bold"
        >
          Alessandro Benig.
        </motion.h1>

        <div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1.3 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-t from-[#acf773] to-[#68DC0E] bg-clip-text text-transparent"
          >
            Full-stack{" "}
            <span className="relative bg-gradient-to-t from-[#acf773] to-[#68DC0E] bg-clip-text text-transparent">
              developer
              <div className={just_me_again_down_here.className}>
                <p
                  className={
                    "text-white text-base md:text-[1.6rem] stuck absolute -right-[4rem] -rotate-12 -top-1"
                  }
                >
                  but sometimes, <span className="text-primary">stuck.</span>
                </p>
              </div>
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1.8 }}
          >
            <Image
              src={Underline}
              width={700}
              height={20}
              alt="logo"
              className="w-[400px] md:w-[700px]"
            />
          </motion.div>
        </div>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 1.4 }}
          className="text-textMuted text-lg max-w-[500px]"
        >
          A goal-driven and passionate student web developer based in the
          Philippines, solely focused on creating react applications.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 2.2 }}
        className="absolute translate-x-[10rem] right-0"
      >
        <Image
          src={HeroLogo}
          width={600}
          height={600}
          alt="logo"
          className="md:opacity-100 opacity-50"
        />
      </motion.div>
    </section>
  );
}
