import clsx from "clsx";
import type { FC, ReactNode } from "react";

import styles from "./badge.module.css";

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

export interface BadgeProps {
  variant?: BadgeVariant;
  classNames?: string;
  children: ReactNode;
}

export const Badge: FC<BadgeProps> = ({
  variant = "default",
  classNames,
  children,
}) => (
  <span
    className={clsx(
      {
        [styles.badge]: true,
        [styles["badge--default"]]: variant === "default",
        [styles["badge--secondary"]]: variant === "secondary",
        [styles["badge--destructive"]]: variant === "destructive",
        [styles["badge--outline"]]: variant === "outline",
      },
      classNames,
    )}
  >
    {children}
  </span>
);
