import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PodcastsAppIcon } from "./material-symbols-podcasts-app";

describe("PodcastsAppIcon", () => {
  it("renders an accessible decorative svg", () => {
    const { container } = render(<PodcastsAppIcon />);

    const svg = container.querySelector("svg");

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("width", "24");
  });

  it("supports custom size and color", () => {
    const { container } = render(
      <PodcastsAppIcon size={32} color="#000" className="custom-icon" />,
    );

    const svg = container.querySelector("svg");

    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("fill", "#000");
    expect(svg).toHaveClass("custom-icon");
  });
});
