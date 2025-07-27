import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Socials from "@/components/layout/socials";

const poppins = Poppins({ subsets: ["latin"], style: "normal", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const TITLE = "Alessandro Benig";
const DESCRIPTION =
	"A goal-driven and passionate full-stack developer based in the Philippines, with a strong focus on creating pixel-perfect front-end applications.";
const URL = "https://alessandrobenig.vercel.app";

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	icons: {
		icon: "/logo.png",
	},

	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		url: URL,
		siteName: "Alessandro Benig",
		images: [
			{
				url: URL + "/opengraph-image.png",
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
		images: [URL + "/opengraph-image.png"],
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
