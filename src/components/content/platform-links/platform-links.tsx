import clsx from "clsx";
import type Link from "next/link";
import type { ComponentProps, FC } from "react";

import { Button, type ButtonVariant } from "@/components/ui/button";

import styles from "./platform-links.module.css";

export type PlatformLinkVariant = "primary" | "secondary";

export interface PlatformLinkItem {
  label: string;
  href: ComponentProps<typeof Link>["href"];
  variant?: PlatformLinkVariant;
}

export interface PlatformLinksProps {
  links: PlatformLinkItem[];
  classNames?: string;
}

const buttonVariantForLink: Record<PlatformLinkVariant, ButtonVariant> = {
  primary: "dark",
  secondary: "light",
};

export const PlatformLinks: FC<PlatformLinksProps> = ({
  links,
  classNames,
}) => (
  <ul
    className={clsx(
      {
        [styles["platform-links"]]: true,
      },
      classNames,
    )}
  >
    {links.map((link) => (
      <li key={link.label} className={styles["platform-links__item"]}>
        <Button
          href={link.href}
          variant={buttonVariantForLink[link.variant ?? "secondary"]}
          classNames={styles["platform-links__button"]}
        >
          {link.label}
        </Button>
      </li>
    ))}
  </ul>
);
