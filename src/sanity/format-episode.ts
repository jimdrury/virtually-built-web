import type { EpisodeSummary } from "@/components/content/episode-card";
import { formatGuestCredit } from "@/sanity/format-guests";
import { urlFor } from "@/sanity/image";
import type { EPISODES_PAGE_QUERY_RESULT } from "../../sanity.types";

export type EpisodeListItem = EPISODES_PAGE_QUERY_RESULT[number];

const formatEpisodeNumber = (episodeNumber?: number | null) => {
  if (typeof episodeNumber !== "number") {
    return "000";
  }

  return String(episodeNumber).padStart(3, "0");
};

const formatPublishedAt = (publishedAt?: string | null) => {
  if (typeof publishedAt !== "string") {
    return "";
  }

  return new Date(publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const formatDuration = (durationMinutes?: number | null) => {
  if (typeof durationMinutes !== "number") {
    return "";
  }

  return `${durationMinutes} min`;
};

export const toEpisodeSummary = (
  episode: EpisodeListItem,
): EpisodeSummary | null => {
  const slug = episode.slug?.current;
  const title = episode.title;

  if (!slug || !title || !episode.artwork?.asset?._ref) {
    return null;
  }

  return {
    number: formatEpisodeNumber(episode.episodeNumber),
    title,
    guestName: formatGuestCredit(episode.guests),
    publishedAt: formatPublishedAt(episode.publishedAt),
    duration: formatDuration(episode.durationMinutes),
    imageSrc: urlFor(episode.artwork).width(800).height(800).fit("crop").url(),
    imageAlt: episode.artwork.alt ?? title,
    href: `/watch/${slug}`,
    showNotes: typeof episode.showNotes === "string" ? episode.showNotes : "",
  };
};
