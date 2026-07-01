import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { sampleEpisodeDetail } from "@/test/fixtures";

const { getEpisode, getRelatedEpisodes, getDynamicFetchOptions, notFound } =
  vi.hoisted(() => ({
    getEpisode: vi.fn(),
    getRelatedEpisodes: vi.fn(),
    getDynamicFetchOptions: vi.fn(),
    notFound: vi.fn(),
  }));

vi.mock("@/api/episodes", () => ({
  getEpisode,
  getRelatedEpisodes,
}));

vi.mock("@/sanity/live", () => ({
  getDynamicFetchOptions,
}));

vi.mock("next/navigation", () => ({
  notFound,
}));

vi.mock("./watch-page-view", () => ({
  WatchPageView: ({
    episode,
    relatedEpisodes,
  }: {
    episode: { title: string | null };
    relatedEpisodes: unknown[];
  }) => (
    <div
      data-testid="watch-page-view"
      data-title={episode.title ?? ""}
      data-related-count={relatedEpisodes.length}
    />
  ),
}));

import { WatchPageContent } from "./watch-page-content";

describe("WatchPageContent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getDynamicFetchOptions.mockResolvedValue({ perspective: "published" });
    getEpisode.mockResolvedValue(sampleEpisodeDetail);
    getRelatedEpisodes.mockResolvedValue([]);
  });

  it("loads the requested episode and related episodes", async () => {
    getRelatedEpisodes.mockResolvedValue([{ _id: "related-1" }]);

    const view = await WatchPageContent({
      params: Promise.resolve({ slug: "episode-011-design-systems-at-scale" }),
    });

    render(view);

    expect(getEpisode).toHaveBeenCalledWith(
      "episode-011-design-systems-at-scale",
      { perspective: "published" },
    );
    expect(getRelatedEpisodes).toHaveBeenCalledWith(
      42,
      "episode-011-design-systems-at-scale",
      { perspective: "published" },
    );
    expect(screen.getByTestId("watch-page-view")).toHaveAttribute(
      "data-title",
      "Design systems at scale",
    );
    expect(screen.getByTestId("watch-page-view")).toHaveAttribute(
      "data-related-count",
      "1",
    );
  });

  it("calls notFound when the episode is missing required fields", async () => {
    getEpisode.mockResolvedValue({ ...sampleEpisodeDetail, title: null });

    await WatchPageContent({
      params: Promise.resolve({ slug: "missing-episode" }),
    });

    expect(notFound).toHaveBeenCalledOnce();
  });

  it("calls notFound when youtubeUrl is missing", async () => {
    getEpisode.mockResolvedValue({ ...sampleEpisodeDetail, youtubeUrl: null });

    await WatchPageContent({
      params: Promise.resolve({ slug: "missing-youtube" }),
    });

    expect(notFound).toHaveBeenCalledOnce();
  });
});
