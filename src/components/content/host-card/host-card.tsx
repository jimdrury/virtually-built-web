import clsx from "clsx";
import Image from "next/image";
import type { FC } from "react";
import { useId } from "react";

import styles from "./host-card.module.css";

export interface HostCardProps {
  name: string;
  role: string;
  avatarSrc?: string;
  avatarAlt?: string;
  classNames?: string;
}

export const HostCard: FC<HostCardProps> = ({
  name,
  role,
  avatarSrc,
  avatarAlt,
  classNames,
}) => {
  const nameId = useId();

  return (
    <article
      className={clsx(styles["host-card"], classNames)}
      aria-labelledby={nameId}
    >
      <div className={styles["host-card__avatar"]}>
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={avatarAlt ?? name}
            width={48}
            height={48}
            className={styles["host-card__avatar-image"]}
          />
        ) : (
          <span
            className={styles["host-card__avatar-placeholder"]}
            aria-hidden
          />
        )}
      </div>

      <p className={styles["host-card__name"]} id={nameId}>
        {name}
      </p>
      <p className={styles["host-card__role"]}>{role}</p>
    </article>
  );
};
