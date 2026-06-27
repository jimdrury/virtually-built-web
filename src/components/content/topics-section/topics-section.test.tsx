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
            icon: LuSparkles,
          },
        ]}
      />,
    );

    expect(screen.getByText("TOPICS WE DISCUSS")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Topics We Discuss" }),
    ).toBeInTheDocument();
    expect(screen.getByText("AI tooling")).toBeInTheDocument();
    expect(screen.getByText("Design systems")).toBeInTheDocument();
    expect(screen.getByText("Platform engineering")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
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
