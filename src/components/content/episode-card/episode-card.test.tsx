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
    expect(screen.getByText("With Sam Rivera")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Sam joins us to explore token architecture, component governance, and keeping design systems useful as products grow.",
      ),
    ).toBeInTheDocument();
  });

  it("omits show notes when not provided", () => {
    renderWithProviders(
      <EpisodeCard {...sampleEpisode} showNotes={undefined} />,
    );

    expect(
      screen.queryByText(/token architecture, component governance/),
    ).not.toBeInTheDocument();
  });

  it("renders the video badge when enabled", () => {
    renderWithProviders(<EpisodeCard {...sampleEpisode} showVideoBadge />);

    expect(screen.getByText("VIDEO")).toBeInTheDocument();
  });
});
