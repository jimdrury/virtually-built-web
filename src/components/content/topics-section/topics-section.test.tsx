import { screen } from "@testing-library/react";
import { LuSparkles } from "react-icons/lu";
import { describe, expect, it } from "vitest";

import { sampleTopics } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

import { TopicsSection } from "./topics-section";

describe("TopicsSection", () => {
  it("renders intro copy and topic pills", () => {
    renderWithProviders(
      <TopicsSection
        topics={[
          ...sampleTopics,
          {
            label: "Platform engineering",
            href: "/topics/platform",
            icon: LuSparkles,
          },
        ]}
      />,
    );

    expect(screen.getByText("TOPICS WE DISCUSS")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Topics We Discuss" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "AI tooling" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Design systems")).toBeInTheDocument();
  });

  it("supports custom copy", () => {
    renderWithProviders(
      <TopicsSection
        topics={sampleTopics}
        eyebrow="Custom eyebrow"
        title="Custom title"
        body="Custom body"
      />,
    );

    expect(screen.getByText("Custom eyebrow")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Custom title" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Custom body")).toBeInTheDocument();
  });
});
