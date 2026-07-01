import type { FC } from "react";
import { useId } from "react";

import { Section } from "@/components/layout/section";
import { Text } from "@/components/ui/text";

import styles from "./page-hero.module.css";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  classNames?: string;
}

export const PageHero: FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  classNames,
}) => {
  const titleId = useId();

  return (
    <Section
      background="white"
      paddingY="default"
      labelledBy={titleId}
      classNames={classNames}
    >
      <header className={styles["page-hero"]}>
        <p className={styles["page-hero__eyebrow"]}>{eyebrow}</p>
        <Text as="h1" variant="page-title" id={titleId}>
          {title}
        </Text>
        {subtitle ? (
          <Text
            variant="lead"
            tone="muted"
            classNames={styles["page-hero__subtitle"]}
          >
            {subtitle}
          </Text>
        ) : null}
      </header>
    </Section>
  );
};
