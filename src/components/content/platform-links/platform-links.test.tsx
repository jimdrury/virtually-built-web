import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { samplePlatformLinks } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

import { PlatformLinks } from "./platform-links";

describe("PlatformLinks", () => {
  it("renders platform buttons with variants", () => {
    renderWithProviders(<PlatformLinks links={samplePlatformLinks} />);

    expect(
      screen.getByRole("link", { name: "Apple Podcasts" }),
    ).toHaveAttribute("href", "https://podcasts.apple.com");
    expect(screen.getByRole("link", { name: "Spotify" })).toHaveAttribute(
      "href",
      "https://open.spotify.com",
    );
  });
});
