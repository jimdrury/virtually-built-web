import type { Metadata } from "next";
import type { FC } from "react";
import { Suspense } from "react";

import { getEpisodeMetadata } from "@/api/episodes";
import { getShowNotesExcerpt } from "@/lib/episodes/show-notes-excerpt";
import { toYoutubeEmbedUrl } from "@/lib/episodes/youtube-utils";
import { formatGuestNames } from "@/sanity/format-guests";
import { urlFor } from "@/sanity/image";
import { getDynamicFetchOptions } from "@/sanity/live";
import { WatchPageContent } from "./_components/watch-page-content";
import { WatchPageFallback } from "./_components/watch-page-fallback";

export async function generateMetadata({
  params,
}: PageProps<"/watch/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const fetchOptions = await getDynamicFetchOptions();
  const episode = await getEpisodeMetadata(slug, fetchOptions);

  if (!episode?.title) {
    return { title: "Episode not found" };
  }

  const guestNames = formatGuestNames(episode.guests);
  const description =
    getShowNotesExcerpt(episode.showNotesExcerpt) ||
    (guestNames ? `With ${guestNames}` : undefined);
  const imageUrl = episode.artwork?.asset?._ref
    ? urlFor(episode.artwork).width(1200).height(630).fit("crop").url()
    : undefined;
  const embedUrl = episode.youtubeUrl
    ? toYoutubeEmbedUrl(episode.youtubeUrl)
    : null;

  return {
    title: episode.title,
    description,
    openGraph: {
      title: episode.title,
      description,
      type: "video.other",
      images: imageUrl ? [{ url: imageUrl }] : undefined,
      ...(embedUrl
        ? {
            videos: [
              {
                url: embedUrl,
                width: 1280,
                height: 720,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: episode.title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

const Page: FC<PageProps<"/watch/[slug]">> = ({ params }) => (
  <Suspense fallback={<WatchPageFallback />}>
    <WatchPageContent params={params} />
  </Suspense>
);

export default Page;
