import clsx from "clsx";
import type Link from "next/link";
import type { ComponentProps, FC } from "react";

import {
  HeroTeaser,
  type HeroTeaserProps,
} from "@/components/content/hero-teaser";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stat } from "@/components/ui/stat";
import { Text } from "@/components/ui/text";

import styles from "./home-hero.module.css";

export interface HomeHeroStat {
  label: string;
  value: string;
}

export interface HomeHeroCta {
  label: string;
  href: ComponentProps<typeof Link>["href"];
}

export interface HomeHeroProps {
  badge?: string;
  headline: string;
  description: string;
  primaryCta: HomeHeroCta;
  secondaryCta: HomeHeroCta;
  stats?: HomeHeroStat[];
  featuredEpisode: HeroTeaserProps;
  classNames?: string;
}

export const HomeHero: FC<HomeHeroProps> = ({
  badge = "Season 3 · Now streaming",
  headline,
  description,
  primaryCta,
  secondaryCta,
  stats,
  featuredEpisode,
  classNames,
}) => (
  <Section
    background="white"
    paddingY="large"
    classNames={clsx(styles["home-hero"], classNames)}
  >
    <div className={styles["home-hero__grid"]}>
      <div className={styles["home-hero__copy"]}>
        <Badge classNames={styles["home-hero__badge"]}>{badge}</Badge>

        <Text
          as="h1"
          variant="display"
          balance
          classNames={styles["home-hero__headline"]}
        >
          {headline}
        </Text>

        <Text variant="lead" tone="muted">
          {description}
        </Text>

        <div className={styles["home-hero__ctas"]}>
          <Button
            variant="dark"
            href={primaryCta.href}
            classNames={styles["home-hero__cta"]}
          >
            {primaryCta.label}
          </Button>
          <Button
            variant="light"
            href={secondaryCta.href}
            classNames={styles["home-hero__cta"]}
          >
            <span className={styles["home-hero__cta-label--long"]}>
              {secondaryCta.label}
            </span>
            <span className={styles["home-hero__cta-label--short"]}>
              All episodes
            </span>
          </Button>
        </div>

        {stats && stats.length > 0 ? (
          <div className={styles["home-hero__meta"]}>
            {stats.map((stat) => (
              <Stat key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        ) : null}
      </div>

      <HeroTeaser
        {...featuredEpisode}
        classNames={styles["home-hero__featured"]}
      />
    </div>
  </Section>
);
