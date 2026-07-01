import { describe, expect, it } from "vitest";

import { parsePage } from "./parse-page";

describe("parsePage", () => {
  it("defaults to page 1 when the param is missing", () => {
    expect(parsePage()).toBe(1);
    expect(parsePage(undefined)).toBe(1);
  });

  it("parses valid positive integers", () => {
    expect(parsePage("1")).toBe(1);
    expect(parsePage("3")).toBe(3);
    expect(parsePage("42")).toBe(42);
  });

  it("falls back to page 1 for invalid values", () => {
    expect(parsePage("0")).toBe(1);
    expect(parsePage("-2")).toBe(1);
    expect(parsePage("1.5")).toBe(1);
    expect(parsePage("abc")).toBe(1);
    expect(parsePage("")).toBe(1);
  });
});
