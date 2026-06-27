import type { FC } from "react";
import { useId } from "react";

import { SectionIntro } from "@/components/content/section-intro";
import {
  type SpeakerItem,
  SpeakerList,
} from "@/components/content/speaker-list";
import { Section } from "@/components/layout/section";

import styles from "./about-section.module.css";

export interface AboutSectionProps {
  speakers: SpeakerItem[];
  eyebrow?: string;
  title?: string;
  body?: string;
  classNames?: string;
}

const DEFAULT_EYEBROW = "ABOUT THE SHOW";
const DEFAULT_TITLE = "Built in the open, discussed in depth.";
const DEFAULT_BODY =
  "Virtually Built sits at the intersection of engineering judgment and product craft. Each episode unpacks how teams make hard tradeoffs — latency vs. simplicity, speed vs. durability — with practitioners who've shipped at scale.";

export const AboutSection: FC<AboutSectionProps> = ({
  speakers,
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  body = DEFAULT_BODY,
  classNames,
}) => {
  const titleId = useId();

  return (
    <Section
      paddingY="large"
      background="white"
      labelledBy={titleId}
      classNames={classNames}
      containerClassNames={styles["about-section__container"]}
    >
      <div className={styles["about-section__inner"]}>
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          body={body}
          titleId={titleId}
          classNames={styles["about-section__copy"]}
        />
        <SpeakerList
          speakers={speakers}
          classNames={styles["about-section__speakers"]}
        />
      </div>
    </Section>
  );
};
