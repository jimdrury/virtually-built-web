import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { Section } from "./section";

describe("Section", () => {
  it("renders children with default styling", () => {
    renderWithProviders(<Section>Section content</Section>);

    expect(screen.getByText("Section content")).toBeInTheDocument();
  });

  it("supports background, padding, and labelling options", () => {
    renderWithProviders(
      <Section
        background="black"
        paddingY="large"
        labelledBy="section-title"
        containerClassNames="custom-container"
      >
        Dark section
      </Section>,
    );

    expect(screen.getByText("Dark section")).toBeInTheDocument();
    expect(screen.getByRole("region")).toHaveAttribute(
      "aria-labelledby",
      "section-title",
    );
  });

  it("supports compact and grey variants", () => {
    renderWithProviders(
      <Section background="grey" paddingY="compact">
        Compact section
      </Section>,
    );

    expect(screen.getByText("Compact section")).toBeInTheDocument();
  });

  it("supports no vertical padding", () => {
    renderWithProviders(
      <Section background="white" paddingY="none">
        Unpadded section
      </Section>,
    );

    expect(screen.getByText("Unpadded section")).toBeInTheDocument();
  });
});
