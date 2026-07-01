"use client";

import clsx from "clsx";
import type { FC, RefObject } from "react";

import type { WatchStageStickiness } from "../_lib/use-watch-stage-stickiness";
import styles from "./watch-page-view.module.css";
import { WatchVideoPlayer } from "./watch-video-player";

export interface WatchPageStageProps {
  youtubeUrl: string;
  stickiness: WatchStageStickiness;
  stageSlotRef: RefObject<HTMLDivElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
}

export const WatchPageStage: FC<WatchPageStageProps> = ({
  youtubeUrl,
  stickiness,
  stageSlotRef,
  stageRef,
}) => (
  <div className={styles["watch-page__stage-anchor"]}>
    <div ref={stageSlotRef} className={styles["watch-page__stage-slot"]}>
      <div className={styles["watch-page__stage-reserve"]} aria-hidden>
        <div className={styles["watch-page__stage-media"]} />
      </div>
      <div
        ref={stageRef}
        className={clsx(styles["watch-page__stage"], {
          [styles["watch-page__stage--stuck"]]: stickiness.mode === "stuck",
          [styles["watch-page__stage--anchored-bottom"]]:
            stickiness.mode === "anchored-bottom",
        })}
      >
        <div className={styles["watch-page__stage-media"]}>
          <WatchVideoPlayer youtubeUrl={youtubeUrl} />
        </div>
      </div>
    </div>
  </div>
);
