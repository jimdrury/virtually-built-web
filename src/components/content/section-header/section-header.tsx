import clsx from "clsx";
import type { FC, ReactNode } from "react";
import { useId } from "react";

import { Text } from "@/components/ui/text";

import styles from "./section-header.module.css";

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleId?: string;
  action?: ReactNode;
  classNames?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  titleId,
  action,
  classNames,
}) => {
  const generatedTitleId = useId();
  const resolvedTitleId = titleId ?? generatedTitleId;

  return (
    <header
      className={clsx(
        {
          [styles["section-header"]]: true,
        },
        classNames,
      )}
    >
      <div className={styles["section-header__intro"]}>
        <p className={styles["section-header__eyebrow"]}>{eyebrow}</p>
        <Text
          as="h2"
          variant="section-title"
          tone="inverse"
          id={resolvedTitleId}
        >
          {title}
        </Text>
      </div>
      {action ? (
        <div className={styles["section-header__action"]}>{action}</div>
      ) : null}
    </header>
  );
};
