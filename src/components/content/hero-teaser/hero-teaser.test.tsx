import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { sampleFeaturedEpisode } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

import { HeroTeaser } from "./hero-teaser";

describe("HeroTeaser", () => {
  it("renders featured episode content and play link", () => {
    renderWithProviders(<HeroTeaser {...sampleFeaturedEpisode} />);

    expect(
      screen.getByRole("heading", { name: "Design systems at scale" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Latest video episode")).toBeInTheDocument();
    expect(screen.getAllByText(/with Sam Rivera/)).toHaveLength(2);
    expect(screen.getByRole("link", { name: /Play episode/i })).toHaveAttribute(
      "href",
      sampleFeaturedEpisode.episodeHref,
    );
  });

  it("supports a custom label", () => {
    renderWithProviders(
      <HeroTeaser {...sampleFeaturedEpisode} label="Featured episode" />,
    );

    expect(screen.getByText("Featured episode")).toBeInTheDocument();
  });
});
