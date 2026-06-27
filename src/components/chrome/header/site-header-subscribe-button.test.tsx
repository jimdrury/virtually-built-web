import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { SiteHeaderSubscribeButton } from "./site-header-subscribe-button";

describe("SiteHeaderSubscribeButton", () => {
  it("renders the light header subscribe button", () => {
    renderWithProviders(<SiteHeaderSubscribeButton />);

    expect(screen.getByRole("link", { name: "Subscribe" })).toHaveAttribute(
      "href",
      "/subscribe",
    );
  });

  it("renders the dark header subscribe button", () => {
    renderWithProviders(<SiteHeaderSubscribeButton variant="dark" />);

    expect(screen.getByRole("link", { name: "Subscribe" })).toBeInTheDocument();
  });
});
