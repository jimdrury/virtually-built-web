"use client";

import type { FC } from "react";
import { LuMenu, LuX } from "react-icons/lu";

import { Button } from "@/components/ui/button";

import { siteNavEmitter } from "./site-nav-emitter";

export interface SiteNavMenuButtonProps {
  action: "open" | "close";
  classNames?: string;
}

export const SiteNavMenuButton: FC<SiteNavMenuButtonProps> = ({
  action,
  classNames,
}) => {
  const handleClick = () => {
    siteNavEmitter.emit(action === "open" ? "openMenu" : "closeMenu");
  };

  return (
    <Button asChild variant="ghost" iconOnly classNames={classNames}>
      <button
        type="button"
        aria-label={action === "open" ? "Open menu" : "Close menu"}
        onClick={handleClick}
      >
        {action === "open" ? (
          <LuMenu size={20} aria-hidden />
        ) : (
          <LuX size={20} aria-hidden />
        )}
      </button>
    </Button>
  );
};
