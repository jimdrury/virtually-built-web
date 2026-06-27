import clsx from "clsx";
import Link from "next/link";
import type { FC } from "react";
import type { ChromeVariant } from "@/components/chrome/header";
import { PodcastsAppIcon } from "@/components/icons/material-symbols-podcasts-app";
import styles from "./site-logo.module.css";

export type SiteLogoSize = "desktop" | "tablet" | "mobile";
export type SiteLogoPlacement = "header" | "footer";

export interface SiteLogoProps {
  variant?: ChromeVariant;
  placement?: SiteLogoPlacement;
  /** Locks size for Storybook; omit for responsive sizing. */
  size?: SiteLogoSize;
  classNames?: string;
}

export const SiteLogo: FC<SiteLogoProps> = ({
  variant = "light",
  placement = "header",
  size,
  classNames,
}) => (
  <Link
    href="/"
    className={clsx(
      {
        [styles["site-logo"]]: true,
        [styles["site-logo--dark"]]: variant === "dark",
        [styles["site-logo--footer"]]: placement === "footer",
        [styles["site-logo--tablet"]]:
          placement === "header" && size === "tablet",
        [styles["site-logo--mobile"]]:
          placement === "header" && size === "mobile",
        [styles["site-logo--desktop"]]:
          placement === "header" && size === "desktop",
      },
      classNames,
    )}
  >
    <PodcastsAppIcon
      className={clsx({
        [styles["site-logo__mark"]]: true,
        [styles["site-logo__mark--footer"]]:
          placement === "footer" && size !== "mobile",
        [styles["site-logo__mark--footer-mobile"]]:
          placement === "footer" && size === "mobile",
        [styles["site-logo__mark--tablet"]]:
          placement === "header" && size === "tablet",
        [styles["site-logo__mark--mobile"]]:
          placement === "header" && size === "mobile",
        [styles["site-logo__mark--desktop"]]:
          placement === "header" && size === "desktop",
      })}
    />

    <span
      className={clsx({
        [styles["site-logo__text"]]: true,
        [styles["site-logo__text--footer"]]:
          placement === "footer" && size !== "mobile",
        [styles["site-logo__text--footer-mobile"]]:
          placement === "footer" && size === "mobile",
        [styles["site-logo__text--tablet"]]:
          placement === "header" && size === "tablet",
        [styles["site-logo__text--mobile"]]:
          placement === "header" && size === "mobile",
        [styles["site-logo__text--desktop"]]:
          placement === "header" && size === "desktop",
      })}
    >
      Virtually Built
    </span>
  </Link>
);
