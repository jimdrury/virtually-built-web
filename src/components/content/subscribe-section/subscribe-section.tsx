import clsx from "clsx";
import type { FC } from "react";
import { useId } from "react";

import {
  type PlatformLinkItem,
  PlatformLinks,
} from "@/components/content/platform-links";
import { Container } from "@/components/layout/container";
import { Text } from "@/components/ui/text";

import styles from "./subscribe-section.module.css";

export interface SubscribeSectionProps {
  links: PlatformLinkItem[];
  title?: string;
  body?: string;
  classNames?: string;
}

const DEFAULT_TITLE = "Never miss an episode";
const DEFAULT_BODY =
  "New episodes every two weeks. No spam — just the show notes and a link.";

export const SubscribeSection: FC<SubscribeSectionProps> = ({
  links,
  title = DEFAULT_TITLE,
  body = DEFAULT_BODY,
  classNames,
}) => {
  const titleId = useId();

  return (
    <section
      className={clsx(
        {
          [styles["subscribe-section"]]: true,
        },
        classNames,
      )}
      aria-labelledby={titleId}
    >
      <Container classNames={styles["subscribe-section__inner"]}>
        <Text as="h2" variant="promo-title" align="center" id={titleId}>
          {title}
        </Text>
        <Text variant="body" tone="muted" align="center" balance>
          {body}
        </Text>
        <PlatformLinks links={links} />
      </Container>
    </section>
  );
};
