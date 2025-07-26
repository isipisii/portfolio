"use client";

import NavLogo from "@/assets/nav-logo.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileMenu from "./mobile-menu";
import { navItems } from "@/constants";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [showBg, setShowBg] = useState(false);

  function handleScrollToTop() {
    window.scrollTo({ top: 0 });
  }

  useEffect(() => {
    function handleScrollY() {
      if (window.scrollY > 100) {
        setShowBg(true);
      } else setShowBg(false);
    }

    document.addEventListener("scroll", handleScrollY);

    return () => {
      document.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  return (
    <header
      className={twMerge(
        "fixed w-full  z-20 flex justify-center transition duration-100 ease-in-out",
        showBg ? "bg-[#0F0F0F]/70 backdrop-blur" : null
      )}
    >
      <nav className="px-8 md:px-0 flex justify-between items-center py-3 max-w-[900px] w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <Image
            src={NavLogo}
            width={50}
            height={50}
            alt="ale-logo"
            onClick={handleScrollToTop}
            className="cursor-pointer active:scale-90 transition ease-in-out duration-100"
          />
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
              className="text-textMuted text-sm hover:text-primary/80"
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
