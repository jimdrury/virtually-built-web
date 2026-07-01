import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import type { FC } from "react";
import { Suspense } from "react";

import {
  getEpisode,
  getEpisodeMetadata,
  toEpisodePerspective,
} from "@/api/episodes";
import { SanityImage } from "@/components/sanity/sanity-image";
import { formatGuestNames } from "@/sanity/format-guests";
import { urlFor } from "@/sanity/image";
import { getDynamicFetchOptions } from "@/sanity/live";

import styles from "./episode-detail.module.css";

type EpisodeDetail = NonNullable<Awaited<ReturnType<typeof getEpisode>>>;

type EpisodePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: EpisodePageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = await getEpisodeMetadata(slug, "published");

  if (!episode?.title) {
    return { title: "Episode not found" };
  }

  const guestNames = formatGuestNames(episode.guests);

  return {
    title: episode.title,
    description: guestNames ? `With ${guestNames}` : undefined,
  };
}

const EpisodeDetailView: FC<{ episode: EpisodeDetail }> = ({ episode }) => {
  if (!episode.artwork?.asset?._ref) {
    notFound();
  }

  const episodeNumber =
    typeof episode.episodeNumber === "number"
      ? String(episode.episodeNumber).padStart(3, "0")
      : null;
  const publishedAt =
    typeof episode.publishedAt === "string"
      ? new Date(episode.publishedAt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : null;
  const duration =
    typeof episode.durationMinutes === "number"
      ? `${episode.durationMinutes} min`
      : null;
  const imageUrl = urlFor(episode.artwork)
    .width(840)
    .height(840)
    .fit("crop")
    .url();
  const guestNames = formatGuestNames(episode.guests);

  return (
    <main className={styles["episode-detail"]}>
      <article className={styles["episode-detail__inner"]}>
        <div className={styles["episode-detail__artwork"]}>
          <SanityImage
            src={imageUrl}
            alt={episode.artwork?.alt ?? episode.title ?? ""}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
            className={styles["episode-detail__image"]}
          />
        </div>

        <header className={styles["episode-detail__header"]}>
          {episodeNumber ? (
            <p className={styles["episode-detail__number"]}>
              Episode {episodeNumber}
            </p>
          ) : null}
          <h1 className={styles["episode-detail__title"]}>{episode.title}</h1>
          {guestNames ? (
            <p className={styles["episode-detail__guest"]}>with {guestNames}</p>
          ) : null}
          {publishedAt || duration ? (
            <p className={styles["episode-detail__meta"]}>
              {[publishedAt, duration].filter(Boolean).join(" · ")}
            </p>
          ) : null}
        </header>

        {Array.isArray(episode.hosts) && episode.hosts.length > 0 ? (
          <section className={styles["episode-detail__hosts"]}>
            <h2 className={styles["episode-detail__hosts-title"]}>Hosts</h2>
            <ul className={styles["episode-detail__hosts-list"]}>
              {episode.hosts.map((host) => {
                if (!host?.name) {
                  return null;
                }

                return (
                  <li key={host._id} className={styles["episode-detail__host"]}>
                    {host.name}
                    {host.role ? (
                      <span className={styles["episode-detail__host-role"]}>
                        {" "}
                        · {host.role}
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {Array.isArray(episode.showNotes) && episode.showNotes.length > 0 ? (
          <section className={styles["episode-detail__show-notes"]}>
            <h2 className={styles["episode-detail__show-notes-title"]}>
              Show notes
            </h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <PortableText value={episode.showNotes} />
            </div>
          </section>
        ) : null}
      </article>
    </main>
  );
};

const EpisodePageContent: FC<{ params: Promise<{ slug: string }> }> = async ({
  params,
}) => {
  const { slug } = await params;
  const { perspective } = await getDynamicFetchOptions();
  const episode = await getEpisode(slug, toEpisodePerspective(perspective));

  if (!episode?.title || !episode.artwork?.asset?._ref) {
    notFound();
  }

  return <EpisodeDetailView episode={episode} />;
};

const EpisodePage: FC<EpisodePageProps> = ({ params }) => (
  <Suspense
    fallback={
      <main className={styles["episode-detail"]}>
        <p className={styles["episode-detail__meta"]}>Loading episode…</p>
      </main>
    }
  >
    <EpisodePageContent params={params} />
  </Suspense>
);

export default EpisodePage;
