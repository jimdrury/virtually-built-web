import { notFound } from "next/navigation";
import type { FC } from "react";

import { getEpisode, getRelatedEpisodes } from "@/api/episodes";
import { getDynamicFetchOptions } from "@/sanity/live";

import { WatchPageView } from "./watch-page-view";

export interface WatchPageContentProps {
  params: Promise<{ slug: string }>;
}

export const WatchPageContent: FC<WatchPageContentProps> = async ({
  params,
}) => {
  const { slug } = await params;
  const fetchOptions = await getDynamicFetchOptions();
  const episode = await getEpisode(slug, fetchOptions);

  if (!episode?.title || !episode.artwork?.asset?._ref || !episode.youtubeUrl) {
    notFound();
  }

  const relatedEpisodes =
    typeof episode.episodeNumber === "number"
      ? await getRelatedEpisodes(episode.episodeNumber, slug, fetchOptions)
      : [];

  return <WatchPageView episode={episode} relatedEpisodes={relatedEpisodes} />;
};
