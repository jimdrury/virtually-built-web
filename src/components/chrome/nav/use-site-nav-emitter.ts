"use client";

import { useEffect } from "react";

import type { SiteNavEvent } from "./site-nav-emitter";
import { siteNavEmitter } from "./site-nav-emitter";

export function useSiteNavEmitter(
  event: SiteNavEvent,
  handler: () => void,
): void {
  useEffect(() => siteNavEmitter.on(event, handler), [event, handler]);
}
