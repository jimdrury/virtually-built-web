import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { WatchPageFallback } from "./watch-page-fallback";

describe("WatchPageFallback", () => {
  it("renders an accessible loading state with skeleton placeholders", () => {
    renderWithProviders(<WatchPageFallback />);

    expect(screen.getByText("Loading episode")).toBeInTheDocument();
    expect(screen.getByTestId("watch-page-skeleton")).toBeInTheDocument();
  });
});
