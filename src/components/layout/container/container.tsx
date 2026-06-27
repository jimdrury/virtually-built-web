import clsx from "clsx";
import type { FC, ReactNode } from "react";

import styles from "./container.module.css";

export interface ContainerProps {
  children: ReactNode;
  classNames?: string;
}

export const Container: FC<ContainerProps> = ({ children, classNames }) => (
  <div
    className={clsx(
      {
        [styles.container]: true,
      },
      classNames,
    )}
  >
    {children}
  </div>
);
