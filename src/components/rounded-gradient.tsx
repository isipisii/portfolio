import React from "react";
import { twMerge } from "tailwind-merge";

export default function RoundedGradient({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        `size-[200px] md:size-[300px] rounded-full bg-gradient-to-l -z-10
        from-primary/20 to-primary/10 blur-[60px] filter`,
        className
      )}
    />
  );
}
