import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { SectionHeader } from "./section-header";

describe("SectionHeader", () => {
  it("renders eyebrow and title", () => {
    renderWithProviders(
      <SectionHeader eyebrow="Episodes" title="Recent conversations" />,
    );

    expect(screen.getByText("Episodes")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Recent conversations" }),
    ).toBeInTheDocument();
  });

  it("renders an optional action and generated title id", () => {
    renderWithProviders(
      <SectionHeader
        eyebrow="Topics"
        title="Explore topics"
        action={<button type="button">View all</button>}
      />,
    );

    expect(
      screen.getByRole("button", { name: "View all" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Explore topics" }),
    ).toHaveAttribute("id");
  });

  it("uses a provided title id", () => {
    renderWithProviders(
      <SectionHeader
        eyebrow="Topics"
        title="Explore topics"
        titleId="topics-title"
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Explore topics" }),
    ).toHaveAttribute("id", "topics-title");
  });
});
