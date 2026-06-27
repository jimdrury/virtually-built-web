import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, FC, ReactNode } from "react";

import styles from "./text-link.module.css";

export interface TextLinkProps
  extends Omit<ComponentProps<typeof Link>, "className"> {
  classNames?: string;
  children: ReactNode;
}

export const TextLink: FC<TextLinkProps> = ({
  classNames,
  children,
  href,
  ...linkProps
}) => (
  <Link
    href={href ?? "#"}
    className={clsx(styles["text-link"], classNames)}
    {...linkProps}
  >
    {children}
  </Link>
);
