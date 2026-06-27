import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { siteNavEmitter } from "./site-nav-emitter";
import { useSiteNavEmitter } from "./use-site-nav-emitter";

describe("useSiteNavEmitter", () => {
  it("subscribes to navigation events", () => {
    const handler = vi.fn();

    renderHook(() => useSiteNavEmitter("openMenu", handler));

    siteNavEmitter.emit("openMenu");
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
