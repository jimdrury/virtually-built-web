import type { ComponentProps, FC } from "react";
import { useId } from "react";

import {
  EpisodeCard,
  type EpisodeSummary,
} from "@/components/content/episode-card";
import { SectionHeader } from "@/components/content/section-header";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

import styles from "./recent-conversations-section.module.css";

export interface RecentConversationsSectionProps {
  episodes: EpisodeSummary[];
  eyebrow?: string;
  title?: string;
  archiveHref?: ComponentProps<typeof Button>["href"];
  archiveLabel?: string;
  showArchiveAction?: boolean;
  classNames?: string;
}

const DEFAULT_EYEBROW = "EPISODES";
const DEFAULT_TITLE = "Recent conversations";
const DEFAULT_ARCHIVE_HREF = "/episodes";
const DEFAULT_ARCHIVE_LABEL = "Browse archive";

export const RecentConversationsSection: FC<
  RecentConversationsSectionProps
> = ({
  episodes,
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  archiveHref = DEFAULT_ARCHIVE_HREF,
  archiveLabel = DEFAULT_ARCHIVE_LABEL,
  showArchiveAction = true,
  classNames,
}) => {
  const titleId = useId();
  const archiveAction = showArchiveAction ? (
    <Button variant="light" href={archiveHref}>
      {archiveLabel}
    </Button>
  ) : undefined;

  return (
    <Section
      background="black"
      paddingY="default"
      classNames={classNames}
      containerClassNames={styles["recent-conversations-section__inner"]}
      labelledBy={titleId}
    >
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        titleId={titleId}
        action={archiveAction}
      />
      <ul className={styles["recent-conversations-section__grid"]}>
        {episodes.map((episode) => (
          <li
            key={episode.number}
            className={styles["recent-conversations-section__item"]}
          >
            <EpisodeCard {...episode} />
          </li>
        ))}
      </ul>
      {showArchiveAction ? (
        <Button
          variant="light"
          href={archiveHref}
          classNames={styles["recent-conversations-section__mobile-cta"]}
        >
          {archiveLabel}
        </Button>
      ) : null}
    </Section>
  );
};
