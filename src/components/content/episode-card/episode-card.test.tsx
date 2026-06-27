import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { sampleEpisode } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

import { EpisodeCard } from "./episode-card";

describe("EpisodeCard", () => {
  it("renders episode details and accessible summary", () => {
    renderWithProviders(<EpisodeCard {...sampleEpisode} />);

    expect(
      screen.getByRole("link", {
        name: /Episode 042: Design systems at scale/i,
      }),
    ).toHaveAttribute("href", sampleEpisode.href);
    expect(screen.getByText("042")).toBeInTheDocument();
    expect(screen.getByText("Design systems at scale")).toBeInTheDocument();
    expect(screen.getByText("Sam Rivera")).toBeInTheDocument();
  });

  it("renders the video badge when enabled", () => {
    renderWithProviders(<EpisodeCard {...sampleEpisode} showVideoBadge />);

    expect(screen.getByText("VIDEO")).toBeInTheDocument();
  });
});
