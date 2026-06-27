import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithProviders } from "@/test/render";

import { HostCard } from "./host-card";

describe("HostCard", () => {
  it("renders host details with an avatar", () => {
    const hostRole = "Host";

    renderWithProviders(
      <HostCard
        name="Alex Chen"
        role={hostRole}
        avatarSrc="/images/featured-episode-art.png"
        avatarAlt="Alex Chen portrait"
      />,
    );

    expect(screen.getByText("Alex Chen")).toBeInTheDocument();
    expect(screen.getByText("Host")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Alex Chen portrait" }),
    ).toBeInTheDocument();
  });

  it("uses the host name when avatar alt text is omitted", () => {
    const hostRole = "Host";

    renderWithProviders(
      <HostCard
        name="Alex Chen"
        role={hostRole}
        avatarSrc="/images/featured-episode-art.png"
      />,
    );

    expect(screen.getByRole("img", { name: "Alex Chen" })).toBeInTheDocument();
  });

  it("renders a placeholder when no avatar is provided", () => {
    const hostRole = "Co-host";

    renderWithProviders(<HostCard name="Jordan Lee" role={hostRole} />);

    expect(screen.getByText("Jordan Lee")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
