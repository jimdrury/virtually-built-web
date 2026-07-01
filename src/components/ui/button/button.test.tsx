import { screen } from "@testing-library/react";
import { LuArrowRight, LuPlay } from "react-icons/lu";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { Button } from "./button";

describe("Button", () => {
  it("renders a link with label text and href", () => {
    renderWithProviders(
      <Button href="/watch/episode-001-example">Listen to latest</Button>,
    );

    const link = screen.getByRole("link", { name: "Listen to latest" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/watch/episode-001-example");
  });

  it("defaults href to # when omitted", () => {
    renderWithProviders(<Button>Fallback link</Button>);

    expect(screen.getByRole("link", { name: "Fallback link" })).toHaveAttribute(
      "href",
      "#",
    );
  });

  it("renders start and end icons", () => {
    renderWithProviders(
      <Button
        href="/watch/episode-001-example"
        startIcon={LuPlay}
        endIcon={LuArrowRight}
      >
        Play episode
      </Button>,
    );

    expect(
      screen.getByRole("link", { name: "Play episode" }),
    ).toBeInTheDocument();
  });

  it("renders icon-only links without visible label text", () => {
    renderWithProviders(
      <Button
        href="/watch/episode-001-example"
        iconOnly
        startIcon={LuPlay}
        aria-label="Play episode"
      />,
    );

    expect(
      screen.getByRole("link", { name: "Play episode" }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Play episode")).not.toBeInTheDocument();
  });

  it("supports asChild to render a custom element", () => {
    renderWithProviders(
      <Button asChild variant="light">
        <button type="button">Custom element</button>
      </Button>,
    );

    expect(
      screen.getByRole("button", { name: "Custom element" }),
    ).toBeInTheDocument();
  });
});
