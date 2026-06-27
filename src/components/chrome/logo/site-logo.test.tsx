import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { SiteLogo } from "./site-logo";

describe("SiteLogo", () => {
  it("renders the default header logo", () => {
    renderWithProviders(<SiteLogo />);

    expect(
      screen.getByRole("link", { name: /virtually built/i }),
    ).toHaveAttribute("href", "/");
  });

  it("supports footer, dark, and size variants", () => {
    renderWithProviders(
      <SiteLogo placement="footer" variant="dark" size="mobile" />,
    );

    expect(
      screen.getByRole("link", { name: /virtually built/i }),
    ).toBeInTheDocument();
  });

  it("supports header size locks", () => {
    renderWithProviders(<SiteLogo size="tablet" />);
    renderWithProviders(<SiteLogo size="desktop" />);

    expect(
      screen.getAllByRole("link", { name: /virtually built/i }),
    ).toHaveLength(2);
  });
});
