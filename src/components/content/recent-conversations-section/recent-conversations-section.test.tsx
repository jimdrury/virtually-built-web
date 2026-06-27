import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { sampleEpisode } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

import { RecentConversationsSection } from "./recent-conversations-section";

describe("RecentConversationsSection", () => {
  it("renders section header, episode cards, and archive links", () => {
    renderWithProviders(
      <RecentConversationsSection
        episodes={[
          sampleEpisode,
          { ...sampleEpisode, number: "041", title: "Latency budgets" },
        ]}
      />,
    );

    expect(screen.getByText("EPISODES")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Recent conversations" }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Browse archive" }),
    ).toHaveLength(2);
    expect(screen.getByText("Design systems at scale")).toBeInTheDocument();
    expect(screen.getByText("Latency budgets")).toBeInTheDocument();
  });
});
