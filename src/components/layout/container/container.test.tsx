import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { Container } from "./container";

describe("Container", () => {
  it("renders children inside the layout container", () => {
    renderWithProviders(<Container>Inner content</Container>);

    expect(screen.getByText("Inner content")).toBeInTheDocument();
  });
});
