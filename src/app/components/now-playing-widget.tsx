/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetNowPlaying } from "../services/use-get-now-playing";
import SoundWave from "./sound-wave";
import { GoCloudOffline } from "react-icons/go";
import { IoIosMusicalNote } from "react-icons/io";

export default function NowPlayingWidget() {
  const { nowPlaying, error, isLoading } = useGetNowPlaying();

  return (
    <div className="p-3 flex justify-between gap-12 rounded-lg border border-[#484848]/40 bg-cardBg/80 max-w-[400px] w-full">
      <div className="flex gap-4">
        {error === "not-playing" ? (
          <div className="border-[#484848]/40 border grid place-content-center size-[45px] rounded-md">
            <IoIosMusicalNote className=" size-7 text-white/60" />
          </div>
        ) : (
          <img
            src={nowPlaying?.albumImageUrl}
            alt="album-url"
            className="size-[45px] rounded-md border-[#484848]/40"
          />
        )}

        <div>
          {/* <p className="text-sm text-primary tex">I&apos;m currently listening to</p> */}
          <p className="text-white text-sm md:text-base font-medium">
            {error === "not-playing" ? "Alessandro is" : nowPlaying?.title}
          </p>
          <p className="text-textMuted text-xs md:text-sm">
            {error === "not-playing" ? "currently offline" : nowPlaying?.artist}
          </p>
        </div>
      </div>

      {error === "not-playing" ? (
        <GoCloudOffline className=" size-5 text-white/60" />
      ) : (
        <SoundWave />
      )}
    </div>
  );
}
