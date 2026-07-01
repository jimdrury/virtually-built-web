import { cacheLife, cacheTag } from "next/cache";
import { defineQuery } from "next-sanity";
import { getRelatedEpisodeNumbers } from "@/lib/episodes/related-episode-numbers";
import {
  type DynamicFetchOptions,
  PUBLISHED_FETCH_OPTIONS,
  sanityFetch,
} from "@/sanity/live";
import {
  EPISODE_METADATA_QUERY,
  EPISODE_QUERY,
  EPISODES_COUNT_QUERY,
  LATEST_EPISODE_SLUG_QUERY,
  MAX_EPISODE_NUMBER_QUERY,
  RELATED_EPISODES_QUERY,
} from "@/sanity/queries/episodes";

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

const cachePerspectiveKey = (options: DynamicFetchOptions) =>
  options.perspective === "published" ? "published" : "draft";

async function episodeSanityFetch<const Q extends string>({
  cacheKeyParts,
  query,
  params,
  options = PUBLISHED_FETCH_OPTIONS,
}: {
  cacheKeyParts: string[];
  query: Q;
  params?: Record<string, unknown>;
  options?: DynamicFetchOptions;
}) {
  "use cache";
  cacheTag("episode", ...cacheKeyParts, cachePerspectiveKey(options));

  if (options.perspective === "published") {
    cacheLife("hours");
  } else {
    cacheLife("minutes");
  }

  return sanityFetch({
    query,
    params,
    perspective: options.perspective,
    stega: options.stega,
  });
}

export async function getEpisodes(
  start: number,
  limit: number,
  options: DynamicFetchOptions = PUBLISHED_FETCH_OPTIONS,
) {
  const { data } = await episodeSanityFetch({
    cacheKeyParts: ["episodes", `episodes-${start}-${limit}`],
    query: EPISODES_PAGE_QUERY,
    params: { start, end: toSliceEnd(start, limit) },
    options,
  });

  return data ?? [];
}

export async function getEpisodesCount(
  options: DynamicFetchOptions = PUBLISHED_FETCH_OPTIONS,
) {
  const { data } = await episodeSanityFetch({
    cacheKeyParts: ["episodes-count"],
    query: EPISODES_COUNT_QUERY,
    options,
  });

  return typeof data === "number" ? data : 0;
}

export async function getEpisodeMetadata(
  slug: string,
  options: DynamicFetchOptions = PUBLISHED_FETCH_OPTIONS,
) {
  const { data } = await episodeSanityFetch({
    cacheKeyParts: [`episode-${slug}`],
    query: EPISODE_METADATA_QUERY,
    params: { slug },
    options,
  });

  return data;
}

export async function getEpisode(
  slug: string,
  options: DynamicFetchOptions = PUBLISHED_FETCH_OPTIONS,
) {
  const { data } = await episodeSanityFetch({
    cacheKeyParts: [`episode-${slug}`],
    query: EPISODE_QUERY,
    params: { slug },
    options,
  });

  return data;
}

export async function getLatestEpisodeSlug(
  options: DynamicFetchOptions = PUBLISHED_FETCH_OPTIONS,
) {
  const { data } = await episodeSanityFetch({
    cacheKeyParts: ["latest-episode-slug"],
    query: LATEST_EPISODE_SLUG_QUERY,
    options,
  });

  return data;
}

export async function getMaxEpisodeNumber(
  options: DynamicFetchOptions = PUBLISHED_FETCH_OPTIONS,
) {
  const { data } = await episodeSanityFetch({
    cacheKeyParts: ["max-episode-number"],
    query: MAX_EPISODE_NUMBER_QUERY,
    options,
  });

  return typeof data === "number" ? data : undefined;
}

export async function getRelatedEpisodes(
  episodeNumber: number,
  slug: string,
  options: DynamicFetchOptions = PUBLISHED_FETCH_OPTIONS,
) {
  const maxEpisodeNumber = await getMaxEpisodeNumber(options);
  const numbers = getRelatedEpisodeNumbers(episodeNumber, 4, maxEpisodeNumber);

  if (numbers.length === 0) {
    return [];
  }

  const { data } = await episodeSanityFetch({
    cacheKeyParts: [`related-${slug}`, numbers.join("-")],
    query: RELATED_EPISODES_QUERY,
    params: { slug, numbers },
    options,
  });

  return data ?? [];
}
