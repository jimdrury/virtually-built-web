"use client";

import { useState } from "react";

import { SiteNavMenuButton } from "./site-nav-menu-button";
import { useSiteNavEmitter } from "./use-site-nav-emitter";

export function SiteNavInteractionDemo() {
  const [isOpen, setIsOpen] = useState(false);

  useSiteNavEmitter("openMenu", () => setIsOpen(true));
  useSiteNavEmitter("closeMenu", () => setIsOpen(false));

  return (
    <div className="flex items-center gap-4">
      <SiteNavMenuButton action="open" />
      <SiteNavMenuButton action="close" />
      <p>{isOpen ? "Menu open" : "Menu closed"}</p>
    </div>
  );
}
