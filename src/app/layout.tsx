import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/nav-bar";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alessandro Benig",
  description: "Minimalist portfolio",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={jost.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
