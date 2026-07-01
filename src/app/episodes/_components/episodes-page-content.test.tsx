import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { sampleEpisodeListItem } from "@/test/fixtures";

const { getEpisodes, getEpisodesCount, getDynamicFetchOptions, notFound } =
  vi.hoisted(() => ({
    getEpisodes: vi.fn(),
    getEpisodesCount: vi.fn(),
    getDynamicFetchOptions: vi.fn(),
    notFound: vi.fn(),
  }));

vi.mock("@/api/episodes", () => ({
  EPISODES_PAGE_SIZE: 12,
  getEpisodes,
  getEpisodesCount,
}));

vi.mock("@/sanity/live", () => ({
  getDynamicFetchOptions,
}));

vi.mock("next/navigation", () => ({
  notFound,
}));

vi.mock("./episodes-page-view", () => ({
  EpisodesPageView: ({
    currentPage,
    episodes,
    totalPages,
  }: {
    currentPage: number;
    episodes: unknown[];
    totalPages: number;
  }) => (
    <div
      data-testid="episodes-page-view"
      data-current-page={currentPage}
      data-episode-count={episodes.length}
      data-total-pages={totalPages}
    />
  ),
}));

import { EpisodesPageContent } from "./episodes-page-content";

describe("EpisodesPageContent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getDynamicFetchOptions.mockResolvedValue({ perspective: "published" });
    getEpisodes.mockResolvedValue([sampleEpisodeListItem]);
    getEpisodesCount.mockResolvedValue(24);
  });

  it("loads episodes for the requested page", async () => {
    const view = await EpisodesPageContent({
      searchParams: Promise.resolve({ page: "2" }),
    });

    render(view);

    expect(getEpisodes).toHaveBeenCalledWith(12, 12, {
      perspective: "published",
    });
    expect(getEpisodesCount).toHaveBeenCalledWith({ perspective: "published" });
    expect(screen.getByTestId("episodes-page-view")).toHaveAttribute(
      "data-current-page",
      "2",
    );
    expect(screen.getByTestId("episodes-page-view")).toHaveAttribute(
      "data-total-pages",
      "2",
    );
    expect(screen.getByTestId("episodes-page-view")).toHaveAttribute(
      "data-episode-count",
      "1",
    );
  });

  it("calls notFound when the page is beyond the available range", async () => {
    getEpisodesCount.mockResolvedValue(12);

    await EpisodesPageContent({
      searchParams: Promise.resolve({ page: "3" }),
    });

    expect(notFound).toHaveBeenCalledOnce();
  });

  it("does not call notFound when there are no episodes", async () => {
    getEpisodes.mockResolvedValue([]);
    getEpisodesCount.mockResolvedValue(0);

    await EpisodesPageContent({
      searchParams: Promise.resolve({ page: "2" }),
    });

    expect(notFound).not.toHaveBeenCalled();
  });
});
