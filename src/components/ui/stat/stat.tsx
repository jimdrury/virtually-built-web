import clsx from "clsx";
import type { FC } from "react";

import styles from "./stat.module.css";

export type StatVariant = "default" | "inverse";

export interface StatProps {
  label: string;
  value: string;
  variant?: StatVariant;
  classNames?: string;
}

export const Stat: FC<StatProps> = ({
  label,
  value,
  variant = "default",
  classNames,
}) => (
  <dl
    className={clsx(
      {
        [styles.stat]: true,
        [styles["stat--inverse"]]: variant === "inverse",
      },
      classNames,
    )}
  >
    <dt
      className={clsx({
        [styles.stat__label]: true,
        [styles["stat__label--inverse"]]: variant === "inverse",
      })}
    >
      {label}
    </dt>
    <dd
      className={clsx({
        [styles.stat__value]: true,
        [styles["stat__value--inverse"]]: variant === "inverse",
      })}
    >
      {value}
    </dd>
  </dl>
);
