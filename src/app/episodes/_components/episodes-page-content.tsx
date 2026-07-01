import { notFound } from "next/navigation";
import type { FC } from "react";

import {
  EPISODES_PAGE_SIZE,
  getEpisodes,
  getEpisodesCount,
} from "@/api/episodes";
import { getDynamicFetchOptions } from "@/sanity/live";

import { parsePage } from "../_lib/parse-page";
import { EpisodesPageView } from "./episodes-page-view";

export interface EpisodesPageContentProps {
  searchParams: Promise<{ page?: string }>;
}

export const EpisodesPageContent: FC<EpisodesPageContentProps> = async ({
  searchParams,
}) => {
  const { page: pageParam } = await searchParams;
  const page = parsePage(pageParam);
  const fetchOptions = await getDynamicFetchOptions();
  const start = (page - 1) * EPISODES_PAGE_SIZE;

  const [episodes, totalCount] = await Promise.all([
    getEpisodes(start, EPISODES_PAGE_SIZE, fetchOptions),
    getEpisodesCount(fetchOptions),
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
