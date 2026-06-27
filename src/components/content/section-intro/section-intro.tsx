import clsx from "clsx";
import type { FC } from "react";
import { useId } from "react";

import styles from "./section-intro.module.css";

export interface SectionIntroProps {
  eyebrow: string;
  title: string;
  body: string;
  titleId?: string;
  classNames?: string;
}

export const SectionIntro: FC<SectionIntroProps> = ({
  eyebrow,
  title,
  body,
  titleId,
  classNames,
}) => {
  const generatedTitleId = useId();
  const resolvedTitleId = titleId ?? generatedTitleId;

  return (
    <header
      className={clsx(
        {
          [styles["section-intro"]]: true,
        },
        classNames,
      )}
    >
      <p className={styles["section-intro__eyebrow"]}>{eyebrow}</p>
      <h2 className={styles["section-intro__title"]} id={resolvedTitleId}>
        {title}
      </h2>
      <p className={styles["section-intro__body"]}>{body}</p>
    </header>
  );
};
