"use client";

import { type FC, type ReactNode, useRef } from "react";

import type { TranscriptEntry } from "../_lib/transcript-utils";
import { WatchPlayerProvider } from "../_lib/use-watch-player";
import { useWatchStageStickiness } from "../_lib/use-watch-stage-stickiness";
import { WatchPageStage } from "./watch-page-stage";
import styles from "./watch-page-view.module.css";
import { WatchTranscriptPanel } from "./watch-transcript-panel";

export interface WatchPlayerShellProps {
  youtubeUrl: string;
  transcript: TranscriptEntry[];
  children: ReactNode;
}

export const WatchPlayerShell: FC<WatchPlayerShellProps> = ({
  youtubeUrl,
  transcript,
  children,
}) => {
  const regionRef = useRef<HTMLDivElement>(null);
  const stageSlotRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const transcriptEndRef = useRef<HTMLButtonElement>(null);
  const stickiness = useWatchStageStickiness(
    stageSlotRef,
    stageRef,
    transcriptEndRef,
  );

  return (
    <WatchPlayerProvider>
      <div ref={regionRef} className={styles["watch-page__player-region"]}>
        <WatchPageStage
          youtubeUrl={youtubeUrl}
          stickiness={stickiness}
          stageSlotRef={stageSlotRef}
          stageRef={stageRef}
        />
        {children}
        {transcript.length > 0 ? (
          <WatchTranscriptPanel
            lastItemRef={transcriptEndRef}
            transcript={transcript}
          />
        ) : null}
      </div>
    </WatchPlayerProvider>
  );
};
