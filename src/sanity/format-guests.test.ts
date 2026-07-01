import { describe, expect, it } from "vitest";

import { formatGuestCredit, formatGuestNames } from "./format-guests";

describe("formatGuestNames", () => {
  it("formats multiple guests with Oxford comma", () => {
    expect(
      formatGuestNames([
        { name: "Lisa Park" },
        { name: "David Kim" },
        { name: "Priya Sharma" },
      ]),
    ).toBe("Lisa Park, David Kim, and Priya Sharma");
  });
});

describe("formatGuestCredit", () => {
  it("prefixes guest names with With", () => {
    expect(
      formatGuestCredit([
        { name: "Lisa Park" },
        { name: "David Kim" },
        { name: "Priya Sharma" },
      ]),
    ).toBe("With Lisa Park, David Kim, and Priya Sharma");
  });

  it("returns an empty string when there are no guests", () => {
    expect(formatGuestCredit([])).toBe("");
  });
});
