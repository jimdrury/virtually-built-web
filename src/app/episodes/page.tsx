import { notFound } from "next/navigation";
import type { FC } from "react";
import { Suspense } from "react";

import {
  EPISODES_PAGE_SIZE,
  getEpisodes,
  getEpisodesCount,
  toEpisodePerspective,
} from "@/api/episodes";
import { EpisodeCard } from "@/components/content/episode-card";
import { PageHero } from "@/components/content/page-hero";
import { Section } from "@/components/layout/section";
import {
  type EpisodeListItem,
  toEpisodeSummary,
} from "@/sanity/format-episode";
import { getDynamicFetchOptions } from "@/sanity/live";
import styles from "./episodes-page.module.css";
import { EpisodesPagination } from "./episodes-pagination";

type EpisodesPageViewProps = {
  episodes: EpisodeListItem[];
  currentPage: number;
  totalPages: number;
};

const EpisodesPageView: FC<EpisodesPageViewProps> = ({
  episodes,
  currentPage,
  totalPages,
}) => {
  const summaries = episodes
    .map((episode) => toEpisodeSummary(episode))
    .filter((episode) => episode !== null);

  return (
    <main>
      <PageHero
        eyebrow="Episode archive"
        title="All episodes"
        subtitle="Conversations on software, systems, and the people building the digital world."
      />

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
    </main>
  );
};

const parsePage = (value?: string) => {
  const parsed = Number(value ?? "1");

  if (!Number.isInteger(parsed) || parsed < 1) {
    return 1;
  }

  return parsed;
};

const EpisodesPageInner: FC<{ page: number }> = async ({ page }) => {
  const { perspective } = await getDynamicFetchOptions();
  const episodePerspective = toEpisodePerspective(perspective);
  const start = (page - 1) * EPISODES_PAGE_SIZE;

  const [episodes, totalCount] = await Promise.all([
    getEpisodes(start, EPISODES_PAGE_SIZE, episodePerspective),
    getEpisodesCount(episodePerspective),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalCount / EPISODES_PAGE_SIZE));

  if (page > totalPages && totalCount > 0) {
    notFound();
  }

  return (
    <EpisodesPageView
      episodes={episodes}
      currentPage={page}
      totalPages={totalPages}
    />
  );
};

type EpisodesPageProps = {
  searchParams: Promise<{ page?: string }>;
};

const EpisodesPageContent: FC<EpisodesPageProps> = async ({ searchParams }) => {
  const { page: pageParam } = await searchParams;
  const page = parsePage(pageParam);

  return <EpisodesPageInner page={page} />;
};

const EpisodesPage: FC<EpisodesPageProps> = ({ searchParams }) => (
  <Suspense
    fallback={
      <Section background="black" paddingY="default">
        <p className={styles["episodes-page__empty"]}>Loading episodes…</p>
      </Section>
    }
  >
    <EpisodesPageContent searchParams={searchParams} />
  </Suspense>
);

export default EpisodesPage;
