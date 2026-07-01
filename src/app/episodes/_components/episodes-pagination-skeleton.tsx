import type { FC } from "react";

import styles from "./episodes-pagination-skeleton.module.css";

const PAGE_SKELETON_KEYS = [
  "page-skeleton-1",
  "page-skeleton-2",
  "page-skeleton-3",
  "page-skeleton-4",
  "page-skeleton-5",
] as const;

export const EpisodesPaginationSkeleton: FC = () => (
  <ol
    aria-hidden
    className={styles["episodes-pagination-skeleton"]}
    data-testid="episodes-pagination-skeleton"
  >
    {PAGE_SKELETON_KEYS.map((key, index) => (
      <li
        key={key}
        className={`${styles["episodes-pagination-skeleton__item"]}${index === 0 ? ` ${styles["episodes-pagination-skeleton__item--active"]}` : ""}`}
      />
    ))}
  </ol>
);
