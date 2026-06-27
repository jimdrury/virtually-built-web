import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { getTextClassNames, Text } from "./text";

describe("Text", () => {
  it("renders with the default body element", () => {
    renderWithProviders(<Text>Body copy</Text>);

    expect(screen.getByText("Body copy").tagName).toBe("P");
  });

  it("renders display text as a heading", () => {
    renderWithProviders(
      <Text as="h1" variant="display">
        Headline
      </Text>,
    );

    expect(
      screen.getByRole("heading", { name: "Headline" }),
    ).toBeInTheDocument();
  });

  it("supports tone, alignment, and typography options", () => {
    renderWithProviders(
      <Text
        variant="ui"
        tone="muted"
        family="mono"
        align="center"
        truncate
        balance
        id="meta"
      >
        Metadata
      </Text>,
    );

    const text = screen.getByText("Metadata");

    expect(text).toHaveAttribute("id", "meta");
    expect(text.tagName).toBe("SPAN");
  });

  it("builds class names for exported helpers", () => {
    expect(getTextClassNames({ variant: "lead", tone: "inverse" })).toContain(
      "text",
    );
  });
});
