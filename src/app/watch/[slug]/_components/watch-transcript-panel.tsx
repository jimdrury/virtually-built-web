"use client";

import clsx from "clsx";
import {
  forwardRef,
  type RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { FaPlay } from "react-icons/fa";
import { LuPause } from "react-icons/lu";

import { SectionIntro } from "@/components/content/section-intro";

import {
  findActiveParagraphIndex,
  formatTimestamp,
  type TranscriptEntry,
} from "../_lib/transcript-utils";
import {
  useWatchPlayerActions,
  useWatchPlayerPlayback,
} from "../_lib/use-watch-player";

import styles from "./watch-transcript-panel.module.css";

export interface WatchTranscriptPanelProps {
  transcript: TranscriptEntry[];
  lastItemRef?: RefObject<HTMLButtonElement | null>;
}

export const WatchTranscriptPanel = forwardRef<
  HTMLElement,
  WatchTranscriptPanelProps
>(({ transcript, lastItemRef }, ref) => {
  const lastIndex = transcript.length - 1;
  const { currentTime, isPlaying, hasPlayback } = useWatchPlayerPlayback();
  const { seek } = useWatchPlayerActions();
  const [syncFollow, setSyncFollow] = useState(false);
  const activeIndex = findActiveParagraphIndex(transcript, currentTime);
  const itemRefs = useRef(new Map<number, HTMLButtonElement>());
  const lastScrolledIndexRef = useRef(-1);

  const registerItemRef = useCallback(
    (index: number) => (node: HTMLButtonElement | null) => {
      if (node) {
        itemRefs.current.set(index, node);
      } else {
        itemRefs.current.delete(index);
      }

      if (index === lastIndex && lastItemRef) {
        lastItemRef.current = node;
      }
    },
    [lastIndex, lastItemRef],
  );

  const isInSync = hasPlayback && syncFollow && isPlaying;

  useLayoutEffect(() => {
    if (!syncFollow) {
      lastScrolledIndexRef.current = -1;
      return;
    }

    if (activeIndex < 0 || lastScrolledIndexRef.current === activeIndex) {
      return;
    }

    lastScrolledIndexRef.current = activeIndex;

    const element = itemRefs.current.get(activeIndex);

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scrollToActive = () => {
      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "center",
        inline: "nearest",
      });
    };

    requestAnimationFrame(scrollToActive);
  }, [activeIndex, syncFollow]);

  const handleParagraphClick = (start: number) => {
    seek(start);
  };

  const syncTitle = isInSync ? "Following playback" : "Follow playback";

  const syncHint = isInSync
    ? "Transcript scrolls with the video"
    : syncFollow
      ? "Tap play to resume auto-scroll"
      : "Turn on follow to scroll with the video";

  return (
    <section
      ref={ref}
      className={styles["watch-transcript-panel"]}
      aria-labelledby="watch-transcript-title"
    >
      <div className={styles["watch-transcript-panel__inner"]}>
        <SectionIntro
          eyebrow="TRANSCRIPT"
          title="Follow along with the conversation"
          body="Click any paragraph to jump to that moment. Pause follow if you want to read ahead without losing your place."
          titleId="watch-transcript-title"
          classNames={styles["watch-transcript-panel__intro"]}
        />

        <div
          className={clsx(styles["watch-transcript-panel__sync"], {
            [styles["watch-transcript-panel__sync--playing"]]: isInSync,
          })}
        >
          <div className={styles["watch-transcript-panel__sync-left"]}>
            <button
              type="button"
              className={clsx(styles["watch-transcript-panel__sync-button"], {
                [styles["watch-transcript-panel__sync-button--synced"]]:
                  isInSync,
              })}
              onClick={() => setSyncFollow((value) => !value)}
              aria-pressed={syncFollow}
              aria-describedby="watch-transcript-sync-hint"
              aria-label={
                syncFollow
                  ? "Pause transcript follow"
                  : "Follow transcript playback"
              }
            >
              {isInSync ? (
                <LuPause
                  aria-hidden
                  className={styles["watch-transcript-panel__sync-icon"]}
                />
              ) : (
                <FaPlay
                  aria-hidden
                  className={styles["watch-transcript-panel__sync-icon"]}
                />
              )}
            </button>
            <div className={styles["watch-transcript-panel__sync-copy"]}>
              <p className={styles["watch-transcript-panel__sync-title"]}>
                {syncTitle}
              </p>
              <p
                className={styles["watch-transcript-panel__sync-hint"]}
                id="watch-transcript-sync-hint"
              >
                {syncHint}
              </p>
            </div>
          </div>
          <div
            className={clsx(styles["watch-transcript-panel__status"], {
              [styles["watch-transcript-panel__status--live"]]: isInSync,
            })}
            aria-live="polite"
            aria-atomic="true"
          >
            {isInSync ? (
              <>
                <span
                  aria-hidden
                  className={styles["watch-transcript-panel__status-dot"]}
                />
                In sync
              </>
            ) : (
              "Paused"
            )}
          </div>
        </div>

        <ol className={styles["watch-transcript-panel__list"]}>
          {transcript.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <li
                key={`${entry.start}-${entry.speaker}-${index}`}
                className={styles["watch-transcript-panel__item"]}
              >
                <button
                  type="button"
                  ref={registerItemRef(index)}
                  aria-current={isActive ? "true" : undefined}
                  className={clsx(styles["watch-transcript-panel__paragraph"], {
                    [styles["watch-transcript-panel__paragraph--active"]]:
                      isActive,
                  })}
                  onClick={() => handleParagraphClick(entry.start)}
                >
                  <span className={styles["watch-transcript-panel__timestamp"]}>
                    {formatTimestamp(entry.start)}
                  </span>
                  <span className={styles["watch-transcript-panel__speaker"]}>
                    {entry.speaker}
                  </span>
                  <span className={styles["watch-transcript-panel__text"]}>
                    {entry.text}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
});

WatchTranscriptPanel.displayName = "WatchTranscriptPanel";
