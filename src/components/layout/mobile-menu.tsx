"use client";

import { useState, useRef, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { navItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (divRef.current) {
        if (
          e.target !== divRef.current &&
          !divRef.current.contains(e.target as Node)
        ) {
          handleToggleMenu();
          enableScroll();
        }
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.overflow = "auto";
  }

  function handleToggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <motion.button
        onClick={() => {
          handleToggleMenu();
          disableScroll();
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="block md:hidden "
      >
        <HiOutlineMenuAlt3 className="text-white/60 hover:text-white size-8 transition ease-in-out duration-100" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            exit={{  opacity: 0 }}
            className="h-screen w-screen bg-[#8583831a] fixed md:hidden right-0 top-0 flex justify-end z-30"
          >
            <motion.aside
              ref={divRef}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              exit={{ x: 100,  opacity: 0 }}
              className="w-[70%] bg-background h-full p-8 flex flex-col gap-[7rem]"
            >
              <button
                onClick={() => {
                  handleToggleMenu();
                  enableScroll();
                }}
                className="self-end"
              >
                <IoClose className="text-white/60 hover:text-white size-8 transition ease-in-out duration-100" />
              </button>
              <div className="gap-8 flex flex-col items-center w-full ">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={idx}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.2 + idx * 0.08 }}
                    href={"#" + item.toLowerCase()}
                    className="text-textMuted hover:text-primary/80 text-xl w-full p-4"
                    onClick={() => {
                      handleToggleMenu();
                      enableScroll();
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
