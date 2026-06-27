import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { Stat } from "./stat";

describe("Stat", () => {
  it("renders label and value", () => {
    renderWithProviders(<Stat label="Episodes" value="42" />);

    expect(screen.getByText("Episodes")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
  });

  it("renders the inverse variant", () => {
    renderWithProviders(<Stat label="Guests" value="38" variant="inverse" />);

    expect(screen.getByText("Guests")).toBeInTheDocument();
    expect(screen.getByText("38")).toBeInTheDocument();
  });
});
