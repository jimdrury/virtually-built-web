import { cacheLife, cacheTag } from "next/cache";
import { defineQuery } from "next-sanity";
import type { LivePerspective } from "next-sanity/live";

import { sanityFetch } from "@/sanity/live";
import {
  EPISODE_METADATA_QUERY,
  EPISODE_QUERY,
  EPISODES_COUNT_QUERY,
} from "@/sanity/queries/episodes";

export type EpisodePerspective = "published" | "draft";

export const EPISODES_PAGE_SIZE = 12;

export const EPISODES_PAGE_QUERY = defineQuery(
  `*[_type == "episode" && defined(slug.current)] | order(publishedAt desc) [$start...$end] {
    _id,
    episodeNumber,
    title,
    slug,
    guests[]->{
      _id,
      name,
      role
    },
    publishedAt,
    durationMinutes,
    artwork {
      asset,
      alt,
      hotspot,
      crop
    },
    "showNotes": pt::text(showNotes)
  }`,
);

const toSliceEnd = (start: number, limit: number) => start + limit;

export const toEpisodePerspective = (
  perspective: LivePerspective,
): EpisodePerspective => (perspective === "drafts" ? "draft" : "published");

const toLivePerspective = (
  perspective: EpisodePerspective,
): LivePerspective => {
  switch (perspective) {
    case "published":
      return "published";
    case "draft":
      return "drafts";
    default: {
      const exhaustive: never = perspective;
      return exhaustive;
    }
  }
};

const stegaForPerspective = (perspective: EpisodePerspective) =>
  perspective === "draft";

export async function getEpisodes(
  start: number,
  limit: number,
  perspective: EpisodePerspective = "published",
) {
  "use cache";
  cacheTag("episode", "episodes", `episodes-${start}-${limit}`, perspective);

  if (perspective === "published") {
    cacheLife("hours");
  } else {
    cacheLife("minutes");
  }

  const { data } = await sanityFetch({
    query: EPISODES_PAGE_QUERY,
    params: { start, end: toSliceEnd(start, limit) },
    perspective: toLivePerspective(perspective),
    stega: stegaForPerspective(perspective),
  });

  return data ?? [];
}

export async function getEpisodesCount(
  perspective: EpisodePerspective = "published",
) {
  "use cache";
  cacheTag("episode", "episodes-count", perspective);

  if (perspective === "published") {
    cacheLife("hours");
  } else {
    cacheLife("minutes");
  }

  const { data } = await sanityFetch({
    query: EPISODES_COUNT_QUERY,
    perspective: toLivePerspective(perspective),
    stega: stegaForPerspective(perspective),
  });

  return typeof data === "number" ? data : 0;
}

export async function getEpisodeMetadata(
  slug: string,
  perspective: EpisodePerspective = "published",
) {
  "use cache";
  cacheTag("episode", `episode-${slug}`, perspective);

  if (perspective === "published") {
    cacheLife("hours");
  } else {
    cacheLife("minutes");
  }

  const { data } = await sanityFetch({
    query: EPISODE_METADATA_QUERY,
    params: { slug },
    perspective: toLivePerspective(perspective),
    stega: stegaForPerspective(perspective),
  });

  return data;
}

export async function getEpisode(
  slug: string,
  perspective: EpisodePerspective = "published",
) {
  "use cache";
  cacheTag("episode", `episode-${slug}`, perspective);

  if (perspective === "published") {
    cacheLife("hours");
  } else {
    cacheLife("minutes");
  }

  const { data } = await sanityFetch({
    query: EPISODE_QUERY,
    params: { slug },
    perspective: toLivePerspective(perspective),
    stega: stegaForPerspective(perspective),
  });

  return data;
}
