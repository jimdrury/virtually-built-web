import type { FC } from "react";

import { EpisodeCard } from "@/components/content/episode-card";
import { Section } from "@/components/layout/section";
import {
  type EpisodeListItem,
  toEpisodeSummary,
} from "@/sanity/format-episode";
import styles from "./episodes-page-view.module.css";
import { EpisodesPagination } from "./episodes-pagination";

export interface EpisodesPageViewProps {
  episodes: EpisodeListItem[];
  currentPage: number;
  totalPages: number;
}

export const EpisodesPageView: FC<EpisodesPageViewProps> = ({
  episodes,
  currentPage,
  totalPages,
}) => {
  const summaries = episodes
    .map((episode) => toEpisodeSummary(episode))
    .filter((episode) => episode !== null);

  return (
    <Section
      background="black"
      paddingY="default"
      containerClassNames={styles["episodes-page__inner"]}
    >
      {summaries.length === 0 ? (
        <p className={styles["episodes-page__empty"]}>
          No episodes yet. Add one in the Studio.
        </p>
      ) : (
        <>
          <ul className={styles["episodes-page__grid"]}>
            {summaries.map((episode) => (
              <li
                key={String(episode.href)}
                className={styles["episodes-page__item"]}
              >
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>

          <EpisodesPagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </Section>
  );
};
