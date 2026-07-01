import { describe, expect, it } from "vitest";

import { getRelatedEpisodeNumbers } from "./related-episode-numbers";

describe("getRelatedEpisodeNumbers", () => {
  it("returns two lower and two higher episode numbers", () => {
    expect(getRelatedEpisodeNumbers(10)).toEqual([8, 9, 11, 12]);
  });

  it("pads from higher side near the start", () => {
    expect(getRelatedEpisodeNumbers(1)).toEqual([2, 3, 4, 5]);
  });

  it("pads from lower side near the end when max episode number is known", () => {
    expect(getRelatedEpisodeNumbers(36, 4, 36)).toEqual([32, 33, 34, 35]);
  });

  it("includes the latest episode when one below the max", () => {
    expect(getRelatedEpisodeNumbers(35, 4, 36)).toEqual([32, 33, 34, 36]);
  });
});
