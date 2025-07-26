"use client";

import Image from "next/image";
import { useGetNowPlaying } from "@/hooks/use-get-now-playing";
import SoundWave from "./sound-wave";
import { GoCloudOffline } from "react-icons/go";
import { IoIosMusicalNote } from "react-icons/io";

export default function NowPlayingWidget() {
	const { nowPlaying, error } = useGetNowPlaying();
	const timePlayed = new Date(nowPlaying?.timePlayed as number);
	const totalTime = new Date(nowPlaying?.timeTotal as number);
	const timePercentage = Math.round((Number(nowPlaying?.timePlayed) / Number(nowPlaying?.timeTotal)) * 100);

	const formattedTimePlayed = `${timePlayed.getMinutes().toString().padStart(2, "0")}:${timePlayed.getSeconds().toString().padStart(2, "0")}`;

	const formattedTotalTime = `${totalTime.getMinutes().toString().padStart(2, "0")}:${totalTime.getSeconds().toString().padStart(2, "0")}`;

	if (error === "not-playing" || nowPlaying) {
		return (
			<div className="flex flex-col gap-3 w-full max-w-[450px]">
				{nowPlaying && <p className="text-textMuted text-center text-sm md:text-base">I&apos;m currently listening to:</p>}
				{/* widget card */}
				<a
					href={error === "not-playing" ? "https://open.spotify.com/user/22wcdi46uy5zxbmv5joaaumaa" : nowPlaying?.songUrl}
					target="_blank"
					className="p-4 grid gap-4 rounded-2xl border border-[#484848]/40 bg-[#11101088] backdrop-blur-lg"
				>
					<div className="flex gap-4 justify-between">
						<div className="flex gap-3 items-start">
							{error === "not-playing" || !nowPlaying?.albumImageUrl ? (
								<div className="border-[#484848]/40 border grid place-content-center size-[45px] rounded-md">
									<IoIosMusicalNote className=" size-7 text-white/60" />
								</div>
							) : (
								<Image
									src={nowPlaying?.albumImageUrl}
									width={45}
									height={45}
									alt="album-url"
									className="rounded-md border border-[#484848]/40"
								/>
							)}

							{/* song details */}
						
								<div className="grid gap-1">
									{nowPlaying?.title && nowPlaying?.title.length > 15 && error !== "not-playing" ? (
										<SongTitleMarquee songTitle={nowPlaying?.title} />
									) : (
										<p className="text-white text-sm font-medium">
											{error === "not-playing" || !nowPlaying ? "Alessandro is" : nowPlaying?.title}
										</p>
									)}
									<p className="text-textMuted text-xs  leading-tight">
										{error === "not-playing" || !nowPlaying ? "currently not playing on spotify" : nowPlaying?.artist}
									</p>
								</div>
						
						</div>
						{error === "not-playing" || !nowPlaying ? <GoCloudOffline className=" size-5 text-white/60" /> : <SoundWave />}
					</div>

					{/* song progress */}
					{error !== "not-playing" && nowPlaying && (
						<div className="w-full grid gap-2">
							<div className="w-full bg-white/10 h-1 rounded-full">
								<div style={{ width: `${timePercentage}%` }} className="h-1 bg-[#1FE064] rounded-full" />
							</div>
							<div className="flex items-center justify-between">
								<p className="text-textMuted text-xs">{formattedTimePlayed}</p>
								<p className="text-textMuted text-xs">{formattedTotalTime}</p>
							</div>
						</div>
					)}
				</a>
			</div>
		);
	}
	return <Spinner />;
}

function Spinner() {
	return (
		<div className="rounded-lg border border-[#484848]/40 bg-cardBg/80 p-4">
			<svg
				aria-hidden="true"
				className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#1FE064]"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor"
				/>
				<path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="currentFill"
				/>
			</svg>
		</div>
	);
}

function SongTitleMarquee({ songTitle }: { songTitle: string }) {
	return (
		<article className="overflow-hidden w-[200px] md:w-[250px] whitespace-nowrap flex">
			<div className="wrapper">
				<ul className="marquee">
					{[...Array(5)].map((_, index) => (
						<li className="text-white text-sm md:text-base font-medium whitespace-nowrap" key={index}>
							{songTitle}
						</li>
					))}
				</ul>
				<ul className="marquee2">
					{[...Array(5)].map((_, index) => (
						<li className="text-white text-sm md:text-base font-medium whitespace-nowrap" key={index}>
							{songTitle}
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}
