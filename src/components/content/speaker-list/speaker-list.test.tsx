import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { sampleSpeakers } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

import { SpeakerList } from "./speaker-list";

describe("SpeakerList", () => {
  it("renders speaker cards", () => {
    renderWithProviders(<SpeakerList speakers={sampleSpeakers} />);

    expect(screen.getByText("Alex Chen")).toBeInTheDocument();
    expect(screen.getByText("Jordan Lee")).toBeInTheDocument();
  });
});
