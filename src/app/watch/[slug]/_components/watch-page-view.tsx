import clsx from "clsx";
import type { FC } from "react";

import type { getEpisode, getRelatedEpisodes } from "@/api/episodes";
import type { EpisodeSummary } from "@/components/content/episode-card";
import { RecentConversationsSection } from "@/components/content/recent-conversations-section";
import { getShowNotesExcerpt } from "@/lib/episodes/show-notes-excerpt";
import { toYoutubeEmbedUrl } from "@/lib/episodes/youtube-utils";
import {
  formatDuration,
  formatEpisodeNumber,
  formatPublishedAt,
  toEpisodeSummary,
} from "@/sanity/format-episode";
import { formatGuestNames } from "@/sanity/format-guests";
import { urlFor } from "@/sanity/image";
import type { TranscriptEntry } from "../_lib/transcript-utils";
import styles from "./watch-page-view.module.css";
import { WatchPlayerShell } from "./watch-player-shell";

export type WatchPageEpisode = NonNullable<
  Awaited<ReturnType<typeof getEpisode>>
>;

export type WatchPageRelatedEpisode = Awaited<
  ReturnType<typeof getRelatedEpisodes>
>[number];

export interface WatchPageViewProps {
  episode: WatchPageEpisode;
  relatedEpisodes: WatchPageRelatedEpisode[];
}

const toTranscriptEntries = (
  transcript: WatchPageEpisode["transcript"],
): TranscriptEntry[] => {
  if (!Array.isArray(transcript)) {
    return [];
  }

  return transcript.flatMap((entry) => {
    if (
      typeof entry?.start !== "number" ||
      typeof entry.speaker !== "string" ||
      typeof entry.text !== "string"
    ) {
      return [];
    }

    return [
      {
        start: entry.start,
        speaker: entry.speaker,
        text: entry.text,
      },
    ];
  });
};

const toRelatedSummaries = (
  relatedEpisodes: WatchPageRelatedEpisode[],
): EpisodeSummary[] =>
  relatedEpisodes.flatMap((episode) => {
    const summary = toEpisodeSummary(episode);

    if (!summary) {
      return [];
    }

    return [{ ...summary, showVideoBadge: true }];
  });

export const WatchPageView: FC<WatchPageViewProps> = ({
  episode,
  relatedEpisodes,
}) => {
  const episodeNumber =
    typeof episode.episodeNumber === "number"
      ? formatEpisodeNumber(episode.episodeNumber)
      : null;
  const publishedAt = formatPublishedAt(episode.publishedAt);
  const duration = formatDuration(episode.durationMinutes);
  const guestNames = formatGuestNames(episode.guests);
  const aboutExcerpt = getShowNotesExcerpt(episode.showNotesExcerpt);
  const artworkUrl = episode.artwork?.asset?._ref
    ? urlFor(episode.artwork).width(1280).height(720).fit("crop").url()
    : undefined;
  const transcript = toTranscriptEntries(episode.transcript);
  const relatedSummaries = toRelatedSummaries(relatedEpisodes);
  const embedUrl = episode.youtubeUrl
    ? toYoutubeEmbedUrl(episode.youtubeUrl)
    : null;
  const videoJsonLd =
    episode.title && embedUrl
      ? {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: episode.title,
          description: aboutExcerpt || undefined,
          thumbnailUrl: artworkUrl,
          uploadDate: episode.publishedAt ?? undefined,
          duration:
            typeof episode.durationMinutes === "number"
              ? `PT${episode.durationMinutes}M`
              : undefined,
          embedUrl,
          contentUrl: episode.youtubeUrl ?? undefined,
        }
      : null;

  return (
    <>
      {videoJsonLd ? (
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: schema.org VideoObject payload is JSON-stringified from trusted server data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
      ) : null}
      <div className={styles["watch-page"]}>
        {episode.youtubeUrl ? (
          <WatchPlayerShell
            youtubeUrl={episode.youtubeUrl}
            transcript={transcript}
          >
            <section className={styles["watch-page__info"]}>
              <div className={styles["watch-page__info-content"]}>
                <header className={styles["watch-page__meta"]}>
                  {episodeNumber ? (
                    <p className={styles["watch-page__eyebrow"]}>
                      Episode {episodeNumber}
                    </p>
                  ) : null}
                  <h1 className={styles["watch-page__title"]}>
                    {episode.title}
                  </h1>
                </header>

                <div className={styles["watch-page__info-inner"]}>
                  <dl
                    className={clsx(
                      styles["watch-page__stats"],
                      guestNames && styles["watch-page__stats--with-guest"],
                    )}
                  >
                    <div className={styles["watch-page__stat"]}>
                      <dt className={styles["watch-page__stat-label"]}>
                        Published
                      </dt>
                      <dd className={styles["watch-page__stat-value"]}>
                        {publishedAt || "—"}
                      </dd>
                    </div>
                    <div className={styles["watch-page__stat"]}>
                      <dt className={styles["watch-page__stat-label"]}>
                        Running time
                      </dt>
                      <dd className={styles["watch-page__stat-value"]}>
                        {duration || "—"}
                      </dd>
                    </div>
                    {guestNames ? (
                      <div className={styles["watch-page__stat"]}>
                        <dt className={styles["watch-page__stat-label"]}>
                          Guest
                        </dt>
                        <dd className={styles["watch-page__stat-value"]}>
                          {guestNames}
                        </dd>
                      </div>
                    ) : null}
                  </dl>

                  {aboutExcerpt ? (
                    <div className={styles["watch-page__about"]}>
                      <p className={styles["watch-page__about-label"]}>
                        About this episode
                      </p>
                      <p className={styles["watch-page__about-text"]}>
                        {aboutExcerpt}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          </WatchPlayerShell>
        ) : null}

        {relatedSummaries.length > 0 ? (
          <RecentConversationsSection
            episodes={relatedSummaries}
            eyebrow="UP NEXT"
            title="More episodes"
            showArchiveAction={false}
          />
        ) : null}
      </div>
    </>
  );
};
