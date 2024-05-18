import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/nav-bar";

const jost = Jost({ subsets: ["latin"] });
const TITLE = "Alessandro Benig"
const DESCRIPTION = "A goal-driven and passionate student web developer based in the Philippines, solely focused on creating react applications."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: TITLE,
    title: {
      default: TITLE,
      template: "Alessandro Benig's portfolio",
    },
    description: DESCRIPTION,
  },
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
