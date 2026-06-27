import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { Badge } from "./badge";

describe("Badge", () => {
  it.each([
    ["default", "Default badge"],
    ["secondary", "Secondary badge"],
    ["destructive", "Destructive badge"],
    ["outline", "Outline badge"],
  ] as const)("renders the %s variant", (variant, label) => {
    renderWithProviders(<Badge variant={variant}>{label}</Badge>);

    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
