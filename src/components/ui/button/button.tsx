import clsx from "clsx";
import Link from "next/link";
import { Slot } from "radix-ui";
import type { ComponentProps, FC, ReactNode } from "react";
import type { IconType } from "react-icons";

import styles from "./button.module.css";

export type ButtonVariant = "light" | "dark" | "ghost";
export type ButtonSize = "default" | "large";

export interface ButtonProps
  extends Omit<ComponentProps<typeof Link>, "className" | "href"> {
  asChild?: boolean;
  href?: ComponentProps<typeof Link>["href"];
  variant?: ButtonVariant;
  size?: ButtonSize;
  startIcon?: IconType;
  endIcon?: IconType;
  iconOnly?: boolean;
  classNames?: string;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  asChild = false,
  variant = "dark",
  size = "default",
  startIcon: StartIcon,
  endIcon: EndIcon,
  iconOnly = false,
  classNames,
  children,
  href,
  ...linkProps
}) => {
  const className = clsx(
    {
      [styles.button]: true,
      [styles["button--light"]]: variant === "light",
      [styles["button--dark"]]: variant === "dark",
      [styles["button--ghost"]]: variant === "ghost",
      [styles["button--large"]]: size === "large",
      [styles["button--icon-only"]]: iconOnly,
    },
    classNames,
  );

  if (asChild) {
    return (
      <Slot.Root className={className} {...linkProps}>
        {children}
      </Slot.Root>
    );
  }

  return (
    <Link {...linkProps} href={href ?? "#"} className={className}>
      {StartIcon ? (
        <StartIcon aria-hidden className={styles.button__icon} />
      ) : null}
      {!iconOnly && children ? (
        <span className={styles.button__label}>{children}</span>
      ) : null}
      {EndIcon && !iconOnly ? (
        <EndIcon aria-hidden className={styles.button__icon} />
      ) : null}
    </Link>
  );
};
