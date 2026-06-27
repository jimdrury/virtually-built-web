import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { renderWithProviders } from "@/test/render";

import { siteNavEmitter } from "./site-nav-emitter";
import { SiteNavMenuButton } from "./site-nav-menu-button";

describe("SiteNavMenuButton", () => {
  it("renders open and close menu buttons", () => {
    renderWithProviders(<SiteNavMenuButton action="open" />);
    expect(
      screen.getByRole("button", { name: "Open menu" }),
    ).toBeInTheDocument();

    renderWithProviders(<SiteNavMenuButton action="close" />);
    expect(
      screen.getByRole("button", { name: "Close menu" }),
    ).toBeInTheDocument();
  });

  it("emits navigation events when clicked", async () => {
    const user = userEvent.setup();
    const openHandler = vi.fn();
    const closeHandler = vi.fn();

    siteNavEmitter.on("openMenu", openHandler);
    siteNavEmitter.on("closeMenu", closeHandler);

    renderWithProviders(<SiteNavMenuButton action="open" />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    expect(openHandler).toHaveBeenCalledTimes(1);

    renderWithProviders(<SiteNavMenuButton action="close" />);
    await user.click(screen.getByRole("button", { name: "Close menu" }));
    expect(closeHandler).toHaveBeenCalledTimes(1);
  });
});
