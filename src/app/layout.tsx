import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/nav-bar";
import Socials from "@/components/layout/socials";

const poppins = Poppins({ subsets: ["latin"], style: "normal", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const TITLE = "Alessandro Benig";
const DESCRIPTION = "A goal-driven and passionate full-stack developer based in the Philippines, solely focused on creating react applications.";

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
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-background">
			<body className={poppins.className}>
				{modal}
				<Navbar />
				{children}
				<Socials />
			</body>
		</html>
	);
}
