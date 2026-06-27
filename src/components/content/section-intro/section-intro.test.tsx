import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { SectionIntro } from "./section-intro";

describe("SectionIntro", () => {
  it("renders eyebrow, title, and body copy", () => {
    renderWithProviders(
      <SectionIntro
        eyebrow="About"
        title="Built in the open"
        body="Show description"
      />,
    );

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Built in the open" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Show description")).toBeInTheDocument();
  });

  it("uses a provided title id", () => {
    renderWithProviders(
      <SectionIntro
        eyebrow="About"
        title="Built in the open"
        body="Show description"
        titleId="intro-title"
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Built in the open" }),
    ).toHaveAttribute("id", "intro-title");
  });
});
