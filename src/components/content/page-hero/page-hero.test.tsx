import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { PageHero } from "./page-hero";

describe("PageHero", () => {
  it("renders eyebrow, title, and subtitle", () => {
    renderWithProviders(
      <PageHero
        eyebrow="Episode archive"
        title="All episodes"
        subtitle="Conversations on software, systems, and the people building the digital world."
      />,
    );

    expect(screen.getByText("Episode archive")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "All episodes" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Conversations on software, systems, and the people building the digital world.",
      ),
    ).toBeInTheDocument();
  });

  it("omits subtitle when not provided", () => {
    renderWithProviders(
      <PageHero eyebrow="Episode archive" title="All episodes" />,
    );

    expect(
      screen.queryByText(/Conversations on software/),
    ).not.toBeInTheDocument();
  });
});
