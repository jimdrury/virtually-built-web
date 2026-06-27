import type { FC } from "react";
import { useId } from "react";
import type { IconType } from "react-icons";

import { SectionIntro } from "@/components/content/section-intro";
import { Section } from "@/components/layout/section";
import { TopicPill } from "@/components/ui/topic-pill";

import styles from "./topics-section.module.css";

export interface TopicItem {
  label: string;
  icon: IconType;
}

export interface TopicsSectionProps {
  topics: TopicItem[];
  eyebrow?: string;
  title?: string;
  body?: string;
  classNames?: string;
}

const DEFAULT_EYEBROW = "TOPICS WE DISCUSS";
const DEFAULT_TITLE = "Topics We Discuss";
const DEFAULT_BODY =
  "Each episode goes deep on the tools, frameworks, and ideas shaping how we build with AI.";

export const TopicsSection: FC<TopicsSectionProps> = ({
  topics,
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  body = DEFAULT_BODY,
  classNames,
}) => {
  const titleId = useId();

  return (
    <Section
      background="grey"
      paddingY="default"
      labelledBy={titleId}
      classNames={classNames}
      containerClassNames={styles["topics-section__inner"]}
    >
      <SectionIntro
        eyebrow={eyebrow}
        title={title}
        body={body}
        titleId={titleId}
      />
      <ul className={styles["topics-section__list"]}>
        {topics.map((topic) => (
          <li key={topic.label} className={styles["topics-section__item"]}>
            <TopicPill icon={topic.icon} fullWidth>
              {topic.label}
            </TopicPill>
          </li>
        ))}
      </ul>
    </Section>
  );
};
