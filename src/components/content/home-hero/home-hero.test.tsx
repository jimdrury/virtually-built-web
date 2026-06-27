import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { sampleHomeHeroProps } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

import { HomeHero } from "./home-hero";

describe("HomeHero", () => {
  it("renders hero copy, CTAs, stats, and featured episode", () => {
    renderWithProviders(<HomeHero {...sampleHomeHeroProps} />);

    expect(screen.getByText("Season 3 · Now streaming")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Conversations for builders shipping with AI",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Listen to latest" }),
    ).toHaveAttribute("href", "/episodes/latest");
    expect(screen.getByText("Episodes")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Design systems at scale" }),
    ).toBeInTheDocument();
  });

  it("omits stats when none are provided", () => {
    renderWithProviders(
      <HomeHero {...sampleHomeHeroProps} stats={undefined} />,
    );

    expect(screen.queryByText("Episodes")).not.toBeInTheDocument();
  });
});
