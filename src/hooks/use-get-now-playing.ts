import queryString from "query-string";
import { useEffect, useState } from "react";

type TNowPlaying = {
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

const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

export function useGetNowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<TNowPlaying | null>(null);
  const [error, setError] = useState<TError>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getNowPlaying = async () => {
      setIsLoading(true);
      try {
        const { access_token } = await getAccessToken();

        const response = await fetch(NOW_PLAYING_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        //if response status > 400 means there was some error while fetching the required information
        if (response.status > 400) {
          setError("fetch-error");
          //this returns no content and that means the user is either offline/not playing
        } else if (response.status === 204) {
          setError("not-playing");
        }

        const song = await response.json();

        const albumImageUrl: string = song.item.album.images[0].url;
        const artist: string = song.item.artists
          .map((artist: any) => artist.name)
          .join(", ");
        const isPlaying: boolean = song.is_playing;
        const songUrl: string = song.item.external_urls.spotify;
        const title: string = song.item.name;
        const timePlayed: number = song.progress_ms;
        const timeTotal: number = song.item.duration_ms;
        const artistUrl: string =
          song.item.album.artists[0].external_urls.spotify;
        setNowPlaying({
          albumImageUrl,
          artist,
          isPlaying,
          songUrl,
          title,
          timePlayed,
          timeTotal,
          artistUrl,
        });
      } catch (error: any) {
        console.error("Error fetching playing song: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    getNowPlaying();
  }, []);

  return {
    nowPlaying,
    error,
    isLoading,
  };
}


const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export const getAccessToken = async () => {
  //generated a base64 code of client_id:client_secret as required by the spotify API
  const basic = Buffer.from(
    `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
  ).toString("base64");

  //request access token along with the refresh token
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