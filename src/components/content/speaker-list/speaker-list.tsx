import clsx from "clsx";
import type { FC } from "react";

import { HostCard } from "@/components/content/host-card";

import styles from "./speaker-list.module.css";

export interface SpeakerItem {
  name: string;
  role: string;
  avatarSrc?: string;
  avatarAlt?: string;
}

export interface SpeakerListProps {
  speakers: SpeakerItem[];
  classNames?: string;
}

export const SpeakerList: FC<SpeakerListProps> = ({ speakers, classNames }) => (
  <ul
    className={clsx(
      {
        [styles["speaker-list"]]: true,
      },
      classNames,
    )}
  >
    {speakers.map((speaker) => (
      <li key={speaker.name} className={styles["speaker-list__item"]}>
        <HostCard
          name={speaker.name}
          role={speaker.role}
          avatarSrc={speaker.avatarSrc}
          avatarAlt={speaker.avatarAlt}
        />
      </li>
    ))}
  </ul>
);
