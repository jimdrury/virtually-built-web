import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { Prose } from "./prose";

describe("Prose", () => {
  it("renders default prose content", () => {
    renderWithProviders(<Prose>Paragraph text</Prose>);

    expect(screen.getByText("Paragraph text")).toBeInTheDocument();
  });

  it("renders active prose content", () => {
    renderWithProviders(<Prose state="active">Active paragraph</Prose>);

    expect(screen.getByText("Active paragraph")).toBeInTheDocument();
  });
});
