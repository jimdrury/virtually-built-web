import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, FC, ReactNode } from "react";
import type { IconType } from "react-icons";

import styles from "./topic-pill.module.css";

export type TopicPillIconVisibility = "always" | "desktop";

export interface TopicPillProps {
  children: ReactNode;
  href?: ComponentProps<typeof Link>["href"];
  icon?: IconType;
  iconVisibility?: TopicPillIconVisibility;
  fullWidth?: boolean;
  classNames?: string;
}

export const TopicPill: FC<TopicPillProps> = ({
  children,
  href,
  icon: Icon,
  iconVisibility = "always",
  fullWidth = false,
  classNames,
}) => {
  const className = clsx(
    {
      [styles["topic-pill"]]: true,
      [styles["topic-pill--with-icon"]]: Boolean(Icon),
      [styles["topic-pill--icon-desktop-only"]]:
        Boolean(Icon) && iconVisibility === "desktop",
      [styles["topic-pill--full-width"]]: fullWidth,
    },
    classNames,
  );

  const content = (
    <>
      {Icon ? (
        <span
          className={clsx({
            [styles["topic-pill__icon-badge"]]: true,
            [styles["topic-pill__icon-badge--desktop-only"]]:
              iconVisibility === "desktop",
          })}
        >
          <Icon aria-hidden className={styles["topic-pill__icon"]} />
        </span>
      ) : null}
      <span className={styles["topic-pill__label"]}>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <span className={className}>{content}</span>;
};
