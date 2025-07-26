import { SiFacebook, SiGithub, SiLinkedin, SiNextdotjs } from "react-icons/si";

export default function Footer() {
	return (
		<footer className="w-full mt-20">
			<div className="max-w-[900px] mx-auto py-8 px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="text-textMuted/70 text-sm md:text-base flex flex-col items-center md:items-start gap-1">
						<p className="text-sm">Designed and Built by Alessandro Benig</p>
						<p className="flex text-sm items-center gap-2">
							<span>Powered by</span>
							<SiNextdotjs className="size-4 text-white/80" />
						</p>
					</div>

					<div className="flex items-center md:hidden gap-6">
						<a
							href="https://github.com/isipisii"
							target="_blank"
							className="text-white/70 hover:text-white/90 transition-colors"
							aria-label="GitHub Profile"
						>
							<SiGithub className="size-5" />
						</a>
						<a
							href="https://web.facebook.com/alessandro.benig"
							target="_blank"
							className="text-white/70 hover:text-white/90 transition-colors"
							aria-label="Facebook Profile"
						>
							<SiFacebook className="size-5" />
						</a>
						<a
							href="https://www.linkedin.com/in/alessandro-benig-3b8b7a257/"
							target="_blank"
							className="text-white/70 hover:text-white/90 transition-colors"
							aria-label="LinkedIn Profile"
						>
							<SiLinkedin className="size-5" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
