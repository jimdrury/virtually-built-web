import { describe, expect, it } from "vitest";

import {
  findActiveParagraphIndex,
  formatTimestamp,
  type TranscriptEntry,
} from "./transcript-utils";

const sampleTranscript: TranscriptEntry[] = [
  { start: 0, speaker: "Host", text: "Intro" },
  { start: 120, speaker: "Guest", text: "Middle" },
  { start: 300, speaker: "Host", text: "Outro" },
];

describe("transcript-utils", () => {
  it("formats timestamps", () => {
    expect(formatTimestamp(125)).toBe("02:05");
  });

  it("finds the active paragraph index", () => {
    expect(findActiveParagraphIndex(sampleTranscript, 150)).toBe(1);
    expect(findActiveParagraphIndex(sampleTranscript, 0)).toBe(0);
    expect(findActiveParagraphIndex([], 10)).toBe(-1);
  });
});
