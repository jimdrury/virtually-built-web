import { describe, expect, it, vi } from "vitest";

import { siteNavEmitter } from "./site-nav-emitter";

describe("siteNavEmitter", () => {
  it("notifies listeners and supports unsubscribe", () => {
    const listener = vi.fn();
    const unsubscribe = siteNavEmitter.on("openMenu", listener);

    siteNavEmitter.emit("openMenu");
    expect(listener).toHaveBeenCalledTimes(1);

    unsubscribe();
    siteNavEmitter.emit("openMenu");
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("emits close menu events", () => {
    const listener = vi.fn();
    siteNavEmitter.on("closeMenu", listener);

    siteNavEmitter.emit("closeMenu");
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
