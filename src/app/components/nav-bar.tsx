import NavLogo from "../assets/nav-logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed w-full backdrop-blur bg-[#151418]/20 z-20 flex justify-center">
      <nav className="px-8 py-4 max-w-[1400px] w-full">
        <Image src={NavLogo} width={40} height={40} alt="logo" />
      </nav>
    </header>
  );
}
