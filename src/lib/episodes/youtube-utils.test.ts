import { describe, expect, it } from "vitest";

import { parseVideoId, toYoutubeEmbedUrl } from "./youtube-utils";

describe("youtube-utils", () => {
  it("parses watch URLs", () => {
    expect(parseVideoId("https://www.youtube.com/watch?v=Bgltju_XaEY")).toBe(
      "Bgltju_XaEY",
    );
  });

  it("parses youtu.be URLs", () => {
    expect(parseVideoId("https://youtu.be/Bgltju_XaEY")).toBe("Bgltju_XaEY");
  });

  it("builds embed URLs", () => {
    expect(
      toYoutubeEmbedUrl("https://www.youtube.com/watch?v=Bgltju_XaEY"),
    ).toBe("https://www.youtube.com/embed/Bgltju_XaEY");
  });
});
