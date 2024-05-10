"use client";

import { useEffect, useRef, useState } from "react";
import { technologies } from "../constants";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { IconType } from "react-icons";

export default function TechnologiesSection() {
  const divEl = useRef<HTMLDivElement | null>(null);
  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [currentTech, setCurrentTech] = useState<{
    name: string;
    icon: IconType;
  } | null>(null);

  return (
    <section className="w-full flex justify-center py-12">
      <div className=" w-full max-w-[1200px] grid gap-8 relative">
        <h2 className="text-headerText leading-8 font-bold text-[32px]">
          Technologies <br />{" "}
          <span className="font-normal text-textMuted text-[25px]">
            I&apos;ve worked on
          </span>
        </h2>
        <GlowCapture>
          <Glow>
            <div
              className="flex gap-2 flex-wrap items-center"
              ref={divEl}
              onMouseEnter={() => setIsContainerHovered(true)}
              onMouseLeave={() => {
                setIsContainerHovered(false);
                setCurrentTech(null);
              }}
            >
              {technologies.map((technology, index) => (
                <div
                  key={index}
                  className="bg-cardBg/80 hover:border-white rounded-xl glow:bg-primary/20  p-4 flex flex-col justify-center items-center gap-2 border border-[#484848]/40"
                  onMouseEnter={() => {
                    if (isContainerHovered) {
                      setCurrentTech(technology);
                    } else return
                  }}
                >
                  <technology.icon className="text-white/80 size-[35px]" />
                </div>
              ))}
            </div>
          </Glow>
        </GlowCapture>

        {currentTech && (
          <div className="absolute right-0 -top-[3rem] md:bottom-0 -z-10 grid gap-4">
            <p className="text-white/10 font-semibold text-2xl text-center">
              {currentTech.name}
            </p>
            <currentTech.icon className="text-white/10 md:size-[300px] size-[200px]" />
          </div>
        )}
      </div>
    </section>
  );
}
