import { just_me_again_down_here } from "../fonts";
import Image from "next/image";
import HeroLogo from "../assets/hero-logo.svg";
import Underline from "../assets/underline.svg";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-between max-w-[1200px] w-full relative">
      <div className="grid gap-3">
        <p className="text-primary">Hello, world! I am</p>
        <h1 className="text-white text-5xl md:text-7xl font-bold">
          Alessandro Benig.
        </h1>

        <div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-t from-[#acf773] to-[#68DC0E] bg-clip-text text-transparent">
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
          </h1>
          <Image
            src={Underline}
            width={700}
            height={20}
            alt="logo"
            className="w-[400px] md:w-[700px]"
          />
        </div>
        <p className="text-textMuted text-lg max-w-[500px]">
          A goal-driven and passionate student web developer based in the
          Philippines, solely focused on creating react applications.
        </p>
      </div>

      <Image
        src={HeroLogo}
        width={600}
        height={600}
        alt="logo"
        className="tras absolute translate-x-[10rem] right-0 md:opacity-100 opacity-50"
      />
    </section>
  );
}
