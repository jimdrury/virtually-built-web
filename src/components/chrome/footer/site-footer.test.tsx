import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { SiteFooter } from "./site-footer";

describe("SiteFooter", () => {
  it("renders brand, navigation links, and copyright", () => {
    renderWithProviders(<SiteFooter />);

    expect(
      screen.getByRole("link", { name: /virtually built/i }),
    ).toHaveAttribute("href", "/");
    expect(
      screen.getByRole("navigation", { name: "Footer" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(screen.getByRole("link", { name: "Privacy" })).toHaveAttribute(
      "href",
      "/privacy",
    );
    expect(
      screen.getByText(
        new RegExp(`${new Date().getFullYear()} Virtually Built`),
      ),
    ).toBeInTheDocument();
  });
});
