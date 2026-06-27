import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { SubscribeSection } from "./subscribe-section";

describe("SubscribeSection", () => {
  it("renders default subscribe content and platform links", () => {
    renderWithProviders(<SubscribeSection />);

    expect(
      screen.getByRole("heading", { name: "Never miss an episode" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "New episodes every two weeks. No spam — just the show notes and a link.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Apple Podcasts" }),
    ).toBeInTheDocument();
  });

  it("supports custom copy", () => {
    renderWithProviders(
      <SubscribeSection
        title="Stay in the loop"
        body="Custom subscribe copy"
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Stay in the loop" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Custom subscribe copy")).toBeInTheDocument();
  });
});
