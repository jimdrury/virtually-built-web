import clsx from "clsx";
import type { FC, ReactNode } from "react";

import { Container } from "@/components/layout/container";

import styles from "./section.module.css";

export type SectionBackground = "white" | "black" | "grey";
export type SectionPadding = "none" | "default" | "large" | "compact";

export interface SectionProps {
  children: ReactNode;
  background?: SectionBackground;
  paddingY?: SectionPadding;
  labelledBy?: string;
  classNames?: string;
  containerClassNames?: string;
}

export const Section: FC<SectionProps> = ({
  children,
  background = "white",
  paddingY = "default",
  labelledBy,
  classNames,
  containerClassNames,
}) => (
  <section
    aria-labelledby={labelledBy}
    className={clsx(
      {
        [styles.section]: true,
        [styles["section--white"]]: background === "white",
        [styles["section--black"]]: background === "black",
        [styles["section--grey"]]: background === "grey",
        [styles["section--padding-none"]]: paddingY === "none",
        [styles["section--padding-default"]]: paddingY === "default",
        [styles["section--padding-large"]]: paddingY === "large",
        [styles["section--padding-compact"]]: paddingY === "compact",
      },
      classNames,
    )}
  >
    <Container classNames={containerClassNames}>{children}</Container>
  </section>
);
