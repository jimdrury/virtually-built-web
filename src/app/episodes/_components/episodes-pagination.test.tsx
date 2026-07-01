import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { EpisodesPagination } from "./episodes-pagination";

describe("EpisodesPagination", () => {
  it("renders nothing when there is only one page", () => {
    renderWithProviders(<EpisodesPagination currentPage={1} totalPages={1} />);

    expect(
      screen.queryByRole("navigation", { name: "Episodes pagination" }),
    ).not.toBeInTheDocument();
  });

  it("renders all page links when there are five or fewer pages", () => {
    renderWithProviders(<EpisodesPagination currentPage={2} totalPages={4} />);

    const nav = screen.getByRole("navigation", { name: "Episodes pagination" });

    expect(nav).toBeInTheDocument();
    expect(screen.getByText("2")).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "1" })).toHaveAttribute(
      "href",
      "/episodes",
    );
    expect(screen.getByRole("link", { name: "3" })).toHaveAttribute(
      "href",
      "/episodes?page=3",
    );
    expect(screen.getByRole("link", { name: "4" })).toHaveAttribute(
      "href",
      "/episodes?page=4",
    );
  });

  it("adds prev and next rel attributes for adjacent pages", () => {
    renderWithProviders(<EpisodesPagination currentPage={3} totalPages={5} />);

    expect(screen.getByRole("link", { name: "2" })).toHaveAttribute(
      "rel",
      "prev",
    );
    expect(screen.getByRole("link", { name: "4" })).toHaveAttribute(
      "rel",
      "next",
    );
  });

  it("collapses distant pages with ellipses", () => {
    renderWithProviders(<EpisodesPagination currentPage={5} totalPages={10} />);

    expect(screen.getAllByText("…")).toHaveLength(2);
    expect(screen.getByRole("link", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "4" })).toBeInTheDocument();
    expect(screen.getByText("5")).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "6" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "10" })).toBeInTheDocument();
  });
});
