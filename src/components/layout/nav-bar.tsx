"use client";

import NavLogo from "@/assets/nav-logo.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileMenu from "./mobile-menu";
import { navItems } from "@/constants";

export default function Navbar() {

  function handleScrollToTop() {
    window.scrollTo({ top: 0 });
  }

  return (
    <header className="fixed w-full backdrop-blur bg-[#151418]/70 z-20 flex justify-center">
      <nav className="px-8 flex justify-between items-center py-4 max-w-[1400px] w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.3 }}
          onClick={handleScrollToTop}
          className="cursor-pointer active:scale-90 transition ease-in-out duration-100"
        >
          <Image src={NavLogo} width={60} height={60} alt="ale-logo" />
        </motion.div>

        {/* for large viewports */}
        <div className=" gap-12 md:flex hidden">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.4 + idx * 0.2 }}
              href={"#" + item.toLowerCase()}
              className="text-textMuted hover:text-primary/80"
            >
              {item}
            </motion.a>
          ))}
        </div>

        
        {/* for small viewports */}
        <MobileMenu />
      </nav>
    </header>
  );
}
