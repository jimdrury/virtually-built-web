import clsx from "clsx";
import type { FC } from "react";

import styles from "./watch-page-skeleton.module.css";

export const WatchPageSkeleton: FC = () => (
  <div
    aria-hidden
    className={styles["watch-page-skeleton"]}
    data-testid="watch-page-skeleton"
  >
    <div className={styles["watch-page-skeleton__stage"]}>
      <div className={styles["watch-page-skeleton__stage-trim"]} />
      <div className={styles["watch-page-skeleton__player"]} />
    </div>

    <div className={styles["watch-page-skeleton__info"]}>
      <div className={styles["watch-page-skeleton__info-content"]}>
        <div className={styles["watch-page-skeleton__header"]}>
          <div
            className={clsx([
              styles["watch-page-skeleton__bar"],
              styles["watch-page-skeleton__bar--eyebrow"],
            ])}
          />
          <div
            className={clsx([
              styles["watch-page-skeleton__bar"],
              styles["watch-page-skeleton__bar--title"],
            ])}
          />
        </div>
        <div className={styles["watch-page-skeleton__stats"]}>
          <div className={styles["watch-page-skeleton__stat"]} />
          <div className={styles["watch-page-skeleton__stat"]} />
        </div>
        <div
          className={clsx([
            styles["watch-page-skeleton__bar"],
            styles["watch-page-skeleton__bar--about-label"],
          ])}
        />
        <div
          className={clsx([
            styles["watch-page-skeleton__bar"],
            styles["watch-page-skeleton__bar--about"],
          ])}
        />
      </div>
    </div>

    <div className={styles["watch-page-skeleton__transcript"]}>
      <div className={styles["watch-page-skeleton__transcript-inner"]}>
        <div
          className={clsx([
            styles["watch-page-skeleton__bar"],
            styles["watch-page-skeleton__bar--section-title"],
          ])}
        />
        <div className={styles["watch-page-skeleton__transcript-block"]} />
      </div>
    </div>
  </div>
);
