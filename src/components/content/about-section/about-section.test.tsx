import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { sampleSpeakers } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

import { AboutSection } from "./about-section";

describe("AboutSection", () => {
  it("renders intro copy and speakers", () => {
    renderWithProviders(<AboutSection speakers={sampleSpeakers} />);

    expect(screen.getByText("ABOUT THE SHOW")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Built in the open, discussed in depth.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Alex Chen")).toBeInTheDocument();
    expect(screen.getByText("Jordan Lee")).toBeInTheDocument();
  });

  it("supports custom copy", () => {
    renderWithProviders(
      <AboutSection
        speakers={sampleSpeakers}
        eyebrow="Custom eyebrow"
        title="Custom title"
        body="Custom body"
      />,
    );

    expect(screen.getByText("Custom eyebrow")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Custom title" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Custom body")).toBeInTheDocument();
  });
});
