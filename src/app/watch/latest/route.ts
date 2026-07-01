import { NextResponse } from "next/server";

import { getLatestEpisodeSlug } from "@/api/episodes";
import { getDynamicFetchOptions } from "@/sanity/live";

export async function GET(request: Request) {
  const fetchOptions = await getDynamicFetchOptions();
  const slug = await getLatestEpisodeSlug(fetchOptions);

  if (typeof slug !== "string") {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.redirect(new URL(`/watch/${slug}`, request.url), 307);
}
