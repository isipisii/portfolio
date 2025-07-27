import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ogImage from "../assets/ale-og.png";
import "./globals.css";
import Navbar from "@/components/layout/nav-bar";
import Socials from "@/components/layout/socials";

const poppins = Poppins({ subsets: ["latin"], style: "normal", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const TITLE = "Alessandro Benig";
const DESCRIPTION =
	"A goal-driven and passionate full-stack developer based in the Philippines, with a strong focus on creating pixel-perfect front-end applications.";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		url: "https://alessandrobenig.vercel.app", // Replace with your actual domain
		siteName: "Alessandro Benig",
		images: [
			{
				url: ogImage.src,
				width: 1200,
				height: 630,
				alt: "Alessandro Benig OG Image",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: TITLE,
		description: DESCRIPTION,
		images: [ogImage.src],
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-background">
			<body className={poppins.className}>
				{children}
				<Socials />
			</body>
		</html>
	);
}
