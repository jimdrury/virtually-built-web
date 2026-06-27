import clsx from "clsx";
import type { FC, ReactNode } from "react";

import styles from "./prose.module.css";

export type ProseState = "default" | "active";

export interface ProseProps {
  state?: ProseState;
  classNames?: string;
  children: ReactNode;
}

export const Prose: FC<ProseProps> = ({
  state = "default",
  classNames,
  children,
}) => (
  <div
    className={clsx(
      {
        [styles.prose]: true,
        [styles["prose--active"]]: state === "active",
      },
      classNames,
    )}
  >
    <p className={styles.prose__text}>{children}</p>
  </div>
);
