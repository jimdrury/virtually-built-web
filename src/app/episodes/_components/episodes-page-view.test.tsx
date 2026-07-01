import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { sampleEpisodeListItem } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

import { EpisodesPageView } from "./episodes-page-view";

describe("EpisodesPageView", () => {
  it("renders episode cards and pagination", () => {
    renderWithProviders(
      <EpisodesPageView
        currentPage={2}
        episodes={[sampleEpisodeListItem]}
        totalPages={3}
      />,
    );

    expect(
      screen.getByRole("link", {
        name: /Episode 042: Design systems at scale/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Episodes pagination" }),
    ).toBeInTheDocument();
    expect(screen.getByText("2")).toHaveAttribute("aria-current", "page");
  });

  it("shows an empty state when there are no episodes", () => {
    renderWithProviders(
      <EpisodesPageView currentPage={1} episodes={[]} totalPages={1} />,
    );

    expect(
      screen.getByText("No episodes yet. Add one in the Studio."),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("navigation", { name: "Episodes pagination" }),
    ).not.toBeInTheDocument();
  });

  it("shows an empty state when episodes cannot be summarized", () => {
    renderWithProviders(
      <EpisodesPageView
        currentPage={1}
        episodes={[{ ...sampleEpisodeListItem, slug: null }]}
        totalPages={1}
      />,
    );

    expect(
      screen.getByText("No episodes yet. Add one in the Studio."),
    ).toBeInTheDocument();
  });
});
