import type { FC } from "react";

import { Section } from "@/components/layout/section";

import { EpisodeCardSkeleton } from "./episode-card-skeleton";
import styles from "./episodes-page-view.module.css";
import { EpisodesPaginationSkeleton } from "./episodes-pagination-skeleton";

const SKELETON_CARD_KEYS = [
  "skeleton-card-1",
  "skeleton-card-2",
  "skeleton-card-3",
  "skeleton-card-4",
  "skeleton-card-5",
  "skeleton-card-6",
] as const;

export const EpisodesPageFallback: FC = () => (
  <Section
    background="black"
    containerClassNames={styles["episodes-page__inner"]}
    paddingY="default"
  >
    <p className="sr-only">Loading episodes</p>

    <ul className={styles["episodes-page__grid"]}>
      {SKELETON_CARD_KEYS.map((key) => (
        <li key={key} className={styles["episodes-page__item"]}>
          <EpisodeCardSkeleton />
        </li>
      ))}
    </ul>

    <EpisodesPaginationSkeleton />
  </Section>
);
