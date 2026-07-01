"use client";

import { YouTubeEmbed } from "@next/third-parties/google";
import { type FC, useCallback, useEffect, useRef } from "react";

import { parseVideoId } from "@/lib/episodes/youtube-utils";
import { useWatchPlayerActions } from "../_lib/use-watch-player";

import styles from "./watch-video-player.module.css";

const PLAYBACK_POLL_MS = 500;
const YT_PLAYING = 1;
const PLAYER_RESOLVE_RETRY_MS = 200;
const PLAYER_RESOLVE_MAX_ATTEMPTS = 50;

type LiteYoutubeElement = HTMLElement & {
  getYTPlayer?: () => Promise<YoutubePlayer | undefined>;
};

type YoutubePlayer = {
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getPlayerState: () => number;
};

export interface WatchVideoPlayerProps {
  youtubeUrl: string;
}

export const WatchVideoPlayer: FC<WatchVideoPlayerProps> = ({ youtubeUrl }) => {
  const { updatePlayback, registerSeekHandler } = useWatchPlayerActions();
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YoutubePlayer | null>(null);
  const pollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pollingSetupRef = useRef(false);
  const videoId = parseVideoId(youtubeUrl);

  const resolvePlayer = useCallback(async (): Promise<YoutubePlayer | null> => {
    if (playerRef.current) {
      return playerRef.current;
    }

    const liteYoutube = containerRef.current?.querySelector(
      "lite-youtube",
    ) as LiteYoutubeElement | null;

    if (!liteYoutube?.getYTPlayer) {
      return null;
    }

    const player = await liteYoutube.getYTPlayer();

    if (!player) {
      return null;
    }

    playerRef.current = player;
    return player;
  }, []);

  const ensurePlaybackPolling = useCallback(async () => {
    if (pollIntervalRef.current || pollingSetupRef.current) {
      return;
    }

    pollingSetupRef.current = true;

    try {
      for (
        let attempt = 1;
        attempt <= PLAYER_RESOLVE_MAX_ATTEMPTS;
        attempt += 1
      ) {
        const player = await resolvePlayer();

        if (player) {
          pollIntervalRef.current = setInterval(() => {
            const currentPlayer = playerRef.current;

            if (!currentPlayer) {
              return;
            }

            updatePlayback({
              currentTime: currentPlayer.getCurrentTime(),
              isPlaying: currentPlayer.getPlayerState() === YT_PLAYING,
            });
          }, PLAYBACK_POLL_MS);

          return;
        }

        await new Promise((resolve) => {
          setTimeout(resolve, PLAYER_RESOLVE_RETRY_MS);
        });
      }
    } finally {
      pollingSetupRef.current = false;
    }
  }, [resolvePlayer, updatePlayback]);

  useEffect(() => {
    const handleSeek = async (seconds: number) => {
      const player = await resolvePlayer();

      if (!player) {
        return;
      }

      player.seekTo(seconds, true);
      void ensurePlaybackPolling();
    };

    return registerSeekHandler(handleSeek);
  }, [registerSeekHandler, resolvePlayer, ensurePlaybackPolling]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const onActivate = () => {
      void ensurePlaybackPolling();
    };

    container.addEventListener("click", onActivate, { once: true });

    return () => {
      container.removeEventListener("click", onActivate);

      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
      }
    };
  }, [ensurePlaybackPolling]);

  if (!videoId) {
    return null;
  }

  return (
    <div className={styles["watch-video-player"]} ref={containerRef}>
      <YouTubeEmbed
        videoid={videoId}
        params="enablejsapi=1"
        {...({ "js-api": true } as Record<string, boolean>)}
      />
    </div>
  );
};
