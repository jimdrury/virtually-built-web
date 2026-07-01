import type { FC } from "react";

import { WatchPageSkeleton } from "./watch-page-skeleton";

export const WatchPageFallback: FC = () => (
  <>
    <p className="sr-only">Loading episode</p>
    <WatchPageSkeleton />
  </>
);
