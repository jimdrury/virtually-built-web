import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { EpisodesPageFallback } from "./episodes-page-fallback";

describe("EpisodesPageFallback", () => {
  it("renders an accessible loading state with skeleton placeholders", () => {
    renderWithProviders(<EpisodesPageFallback />);

    expect(screen.getByText("Loading episodes")).toBeInTheDocument();
    expect(screen.getAllByTestId("episode-card-skeleton")).toHaveLength(6);
    expect(
      screen.getByTestId("episodes-pagination-skeleton"),
    ).toBeInTheDocument();
  });
});
