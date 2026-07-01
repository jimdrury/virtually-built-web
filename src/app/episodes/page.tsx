import type { FC } from "react";
import { Suspense } from "react";

import { EpisodesPageContent } from "./_components/episodes-page-content";
import { EpisodesPageFallback } from "./_components/episodes-page-fallback";

const Page: FC<PageProps<"/episodes">> = ({ searchParams }) => (
  <Suspense fallback={<EpisodesPageFallback />}>
    <EpisodesPageContent searchParams={searchParams} />
  </Suspense>
);

export default Page;
