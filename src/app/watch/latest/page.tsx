import { notFound, redirect } from "next/navigation";
import type { FC } from "react";
import { Suspense } from "react";

import { getDynamicFetchOptions, sanityFetch } from "@/sanity/live";
import { LATEST_EPISODE_SLUG_QUERY } from "@/sanity/queries/episodes";

const LatestEpisodeRedirect: FC = async () => {
  const { perspective, stega } = await getDynamicFetchOptions();
  const { data: slug } = await sanityFetch({
    query: LATEST_EPISODE_SLUG_QUERY,
    perspective,
    stega,
  });

  if (typeof slug !== "string") {
    notFound();
  }

  redirect(`/watch/${slug}`);
};

const LatestEpisodePage: FC = () => (
  <Suspense fallback={null}>
    <LatestEpisodeRedirect />
  </Suspense>
);

export default LatestEpisodePage;
