import clsx from "clsx";
import type { FC } from "react";
import { SiteLogo } from "@/components/chrome/logo";
import { SiteNavMenuButton } from "@/components/chrome/nav";
import { Container } from "@/components/layout/container";
import styles from "./site-header.module.css";
import { SiteHeaderSubscribeButton } from "./site-header-subscribe-button";

export type ChromeVariant = "light" | "dark";

export interface SiteHeaderProps {
  variant?: ChromeVariant;
  classNames?: string;
}

export const SiteHeader: FC<SiteHeaderProps> = ({
  variant = "light",
  classNames,
}) => (
  <header
    className={clsx(
      {
        [styles["site-header"]]: true,
        [styles["site-header--dark"]]: variant === "dark",
      },
      classNames,
    )}
  >
    <Container classNames={styles["site-header__container"]}>
      <div className={styles["site-header__brand"]}>
        <SiteLogo variant={variant} />
      </div>
      <div className={styles["site-header__actions"]}>
        <SiteHeaderSubscribeButton variant={variant} />
        <SiteNavMenuButton action="open" />
      </div>
    </Container>
  </header>
);
