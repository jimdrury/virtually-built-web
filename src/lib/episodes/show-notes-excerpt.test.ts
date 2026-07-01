import { describe, expect, it } from "vitest";

import { getShowNotesExcerpt } from "./show-notes-excerpt";

describe("getShowNotesExcerpt", () => {
  it("returns the first paragraph", () => {
    expect(getShowNotesExcerpt("First paragraph.\n\nSecond paragraph.")).toBe(
      "First paragraph.",
    );
  });

  it("returns empty string for missing input", () => {
    expect(getShowNotesExcerpt(null)).toBe("");
  });
});
