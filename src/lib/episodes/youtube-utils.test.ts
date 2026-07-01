import { describe, expect, it } from "vitest";

import { parseVideoId, toYoutubeEmbedUrl } from "./youtube-utils";

describe("youtube-utils", () => {
  it("parses watch URLs", () => {
    expect(parseVideoId("https://www.youtube.com/watch?v=Bp2ai2MD4Mk")).toBe(
      "Bp2ai2MD4Mk",
    );
  });

  it("parses youtu.be URLs", () => {
    expect(parseVideoId("https://youtu.be/Bp2ai2MD4Mk")).toBe("Bp2ai2MD4Mk");
  });

  it("builds embed URLs", () => {
    expect(
      toYoutubeEmbedUrl("https://www.youtube.com/watch?v=Bp2ai2MD4Mk"),
    ).toBe("https://www.youtube.com/embed/Bp2ai2MD4Mk");
  });
});
