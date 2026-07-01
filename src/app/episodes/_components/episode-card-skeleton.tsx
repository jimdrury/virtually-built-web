import type { FC } from "react";

import styles from "./episode-card-skeleton.module.css";

export const EpisodeCardSkeleton: FC = () => (
  <div
    aria-hidden
    className={styles["episode-card-skeleton"]}
    data-testid="episode-card-skeleton"
  >
    <div className={styles["episode-card-skeleton__thumbnail"]} />

    <div className={styles["episode-card-skeleton__body"]}>
      <div
        className={`${styles["episode-card-skeleton__bar"]} ${styles["episode-card-skeleton__bar--number"]}`}
      />
      <div
        className={`${styles["episode-card-skeleton__bar"]} ${styles["episode-card-skeleton__bar--title"]}`}
      />
      <div
        className={`${styles["episode-card-skeleton__bar"]} ${styles["episode-card-skeleton__bar--title-short"]}`}
      />
      <div
        className={`${styles["episode-card-skeleton__bar"]} ${styles["episode-card-skeleton__bar--muted"]} ${styles["episode-card-skeleton__bar--notes"]}`}
      />
      <div
        className={`${styles["episode-card-skeleton__bar"]} ${styles["episode-card-skeleton__bar--muted"]} ${styles["episode-card-skeleton__bar--notes"]}`}
      />
      <div
        className={`${styles["episode-card-skeleton__bar"]} ${styles["episode-card-skeleton__bar--muted"]} ${styles["episode-card-skeleton__bar--guest"]}`}
      />
    </div>

    <div className={styles["episode-card-skeleton__footer"]}>
      <div
        className={`${styles["episode-card-skeleton__bar"]} ${styles["episode-card-skeleton__bar--duration"]}`}
      />
      <div className={styles["episode-card-skeleton__play"]} />
    </div>
  </div>
);
