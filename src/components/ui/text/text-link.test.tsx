import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { TextLink } from "./text-link";

describe("TextLink", () => {
  it("renders a link with children", () => {
    renderWithProviders(<TextLink href="/contact">Contact</TextLink>);

    const link = screen.getByRole("link", { name: "Contact" });

    expect(link).toHaveAttribute("href", "/contact");
  });

  it("defaults href to # when omitted", () => {
    renderWithProviders(<TextLink>Fallback</TextLink>);

    expect(screen.getByRole("link", { name: "Fallback" })).toHaveAttribute(
      "href",
      "#",
    );
  });
});
