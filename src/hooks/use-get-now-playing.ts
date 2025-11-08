import { useEffect, useState } from "react";
import queryString from "query-string";

export type TTrack = {
	songUrl: string;
	albumImageUrl: string;
	artist: string;
	isPlaying: boolean;
	title: string;
	timePlayed: number;
	timeTotal: number;
	artistUrl: string;
};
type TError = "not-playing" | "fetch-error" | null;

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENT_PLAYED_TRACKS = "https://api.spotify.com/v1/me/player/recently-played";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export function useGetNowPlaying() {
	const [nowPlaying, setNowPlaying] = useState<TTrack | null>(null);
	const [latestPlayed, setLatestPlayed] = useState<TTrack | null>(null);
	const [error, setError] = useState<TError>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getAccessToken();
				const accessToken = result.access_token;

				// fetch currently playing track
				const response = await fetch(NOW_PLAYING_ENDPOINT, {
					headers: { Authorization: `Bearer ${accessToken}` },
				});

				if (response.status > 400) {
					setError("fetch-error");
					setNowPlaying(null);
					return;
				}

				console.log(response.status);

				if (response.status === 204) {
					setNowPlaying(null);

					const recent = await getRecentlyPlayed(accessToken);
					if (recent.items && recent.items.length > 0) {
						const latest = recent.items[0].track;
						const track: TTrack = {
							albumImageUrl: latest.album.images[0].url,
							artist: latest.artists.map((a: any) => a.name).join(", "),
							songUrl: latest.external_urls.spotify,
							title: latest.name,
							timePlayed: 0,
							timeTotal: latest.duration_ms,
							isPlaying: false,
							artistUrl: latest.artists[0].external_urls.spotify,
						};
						setLatestPlayed(track);
					} else {
						setLatestPlayed(null);
					}

					setError("not-playing");
					return;
				}

				const song = await response.json();
				const current: TTrack = {
					albumImageUrl: song.item.album.images[0].url,
					artist: song.item.artists.map((a: any) => a.name).join(", "),
					isPlaying: song.is_playing,
					songUrl: song.item.external_urls.spotify,
					title: song.item.name,
					timePlayed: song.progress_ms,
					timeTotal: song.item.duration_ms,
					artistUrl: song.item.artists[0].external_urls.spotify,
				};

				setNowPlaying(current);
				setError(null);
			} catch (err) {
				console.error("Error fetching playing song: ", err);
				setError("fetch-error");
				setNowPlaying(null);
			} 
		};

		const intervalId = setInterval(fetchData, 1000); // poll every 1s
		fetchData(); // fetch immediately on mount

		return () => clearInterval(intervalId);
	}, []);

	return { nowPlaying, latestPlayed, error };
}

export const getAccessToken = async () => {
	const basic = Buffer.from(`${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`).toString("base64");

	const response = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${basic}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: queryString.stringify({
			grant_type: "refresh_token",
			refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
		}),
	});

	return await response.json();
};

async function getRecentlyPlayed(access_token: string) {
	const response = await fetch(RECENT_PLAYED_TRACKS, {
		headers: { Authorization: `Bearer ${access_token}` },
	});

	return await response.json();
}
