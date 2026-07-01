import { cookies, draftMode } from "next/headers";
import {
  defineLive,
  type LivePerspective,
  resolvePerspectiveFromCookies,
} from "next-sanity/live";

import { client } from "@/sanity/client";
import { token } from "@/sanity/token";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  strict: true,
});

export interface DynamicFetchOptions {
  perspective: LivePerspective;
  stega: boolean;
}

export const PUBLISHED_FETCH_OPTIONS: DynamicFetchOptions = {
  perspective: "published",
  stega: false,
};

export async function getDynamicFetchOptions(): Promise<DynamicFetchOptions> {
  const { isEnabled: isDraftMode } = await draftMode();

  if (!isDraftMode) {
    return { perspective: "published", stega: false };
  }

  const jar = await cookies();
  const perspective = await resolvePerspectiveFromCookies({ cookies: jar });

  return { perspective: perspective ?? "drafts", stega: true };
}
