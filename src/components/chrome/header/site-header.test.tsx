import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("renders the light header chrome", () => {
    renderWithProviders(<SiteHeader />);

    expect(
      screen.getByRole("link", { name: /virtually built/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Subscribe" })).toHaveAttribute(
      "href",
      "/subscribe",
    );
    expect(
      screen.getByRole("button", { name: "Open menu" }),
    ).toBeInTheDocument();
  });

  it("renders the dark header chrome", () => {
    renderWithProviders(<SiteHeader variant="dark" />);

    expect(
      screen.getByRole("button", { name: "Open menu" }),
    ).toBeInTheDocument();
  });
});
