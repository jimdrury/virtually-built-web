import { screen } from "@testing-library/react";
import { LuSparkles } from "react-icons/lu";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { TopicPill } from "./topic-pill";

describe("TopicPill", () => {
  it("renders a static pill", () => {
    renderWithProviders(<TopicPill>Design systems</TopicPill>);

    expect(screen.getByText("Design systems")).toBeInTheDocument();
  });

  it("renders a linked pill with icon options", () => {
    renderWithProviders(
      <TopicPill
        href="/topics/ai-tooling"
        icon={LuSparkles}
        iconVisibility="desktop"
        fullWidth
      >
        AI tooling
      </TopicPill>,
    );

    expect(screen.getByRole("link", { name: "AI tooling" })).toHaveAttribute(
      "href",
      "/topics/ai-tooling",
    );
  });
});
