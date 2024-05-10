"use client"

import { Glow, GlowCapture } from "@codaworks/react-glow";
export default function AboutMeSection() {
  return (
    <section className="w-full grid place-content-center py-14 relative">
      <GlowCapture>
        <Glow>
          <div className="bg-cardBg/80 w-full max-w-[1200px] relative rounded-2xl overflow-hidden border border-[#484848]/40  glow:bg-white/10">
            <div className="p-8 grid gap-2 md:max-w-[70%]">
              <h2 className="text-headerText font-bold text-[32px] ">
                About Me
              </h2>
              <div className="grid gap-4 z-10">
                <p className="text-textMuted">
                  Hello, again. I am Alessandro Benig, 21 years old. Currently,
                  I&apos;m in my third year of taking a Bachelor of Science in
                  Information Technology. I started creating things on the web
                  during vacation before my sophomore year. During that time, I
                  enjoyed styling web pages, which led me to learn more, and
                  with that, it fueled my motivation and passion to pursue this
                  career.
                </p>
                <p className="text-textMuted">
                  Up to this day, I&apos;ve been constantly learning
                  technologies and creating projects to enhance my problem-solving skills and keep myself relevant.
                </p>
              </div>
            </div>

            {/* nested circles */}
            <div className="rounded-full w-[400px] h-[400px] absolute -right-[7rem] -bottom-[7rem] bg-[#413f3f13] grid place-content-center">
              <div className="rounded-full w-[300px] h-[300px] bg-[#413f3f33] grid place-content-center">
                <div className="rounded-full w-[200px] h-[200px] bg-[#413f3f89]" />
              </div>
            </div>
          </div>
        </Glow>
      </GlowCapture>
    </section>
  );
}
