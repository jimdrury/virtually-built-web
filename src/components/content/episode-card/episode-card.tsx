import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, FC } from "react";
import { useId } from "react";
import { LuPlay } from "react-icons/lu";
import { MdVideocam } from "react-icons/md";

import { SanityImage } from "@/components/sanity/sanity-image";

import styles from "./episode-card.module.css";

export interface EpisodeSummary {
  number: string;
  title: string;
  guestName: string;
  publishedAt: string;
  duration: string;
  imageSrc: string;
  imageAlt: string;
  href: ComponentProps<typeof Link>["href"];
  showNotes?: string;
  showVideoBadge?: boolean;
}

export interface EpisodeCardProps extends EpisodeSummary {
  classNames?: string;
}

export const EpisodeCard: FC<EpisodeCardProps> = ({
  number,
  title,
  guestName,
  publishedAt,
  duration,
  imageSrc,
  imageAlt,
  href,
  showNotes,
  showVideoBadge = false,
  classNames,
}) => {
  const titleId = useId();

  return (
    <article
      className={clsx(styles["episode-card"], classNames)}
      aria-labelledby={titleId}
    >
      <div className={styles["episode-card__thumbnail"]}>
        <SanityImage
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 47.9375em) 50vw, (max-width: 64em) 50vw, 33vw"
          className={styles["episode-card__image"]}
        />
        {showVideoBadge ? (
          <span className={styles["episode-card__video-badge"]}>
            <MdVideocam
              aria-hidden
              className={styles["episode-card__video-badge-icon"]}
            />
            <span className={styles["episode-card__video-badge-label"]}>
              VIDEO
            </span>
          </span>
        ) : null}
      </div>

      <div className={styles["episode-card__body"]}>
        <p className={styles["episode-card__number"]}>{number}</p>
        <h3 className={styles["episode-card__title"]} id={titleId}>
          {title}
        </h3>
        {showNotes ? (
          <p className={styles["episode-card__notes"]}>{showNotes}</p>
        ) : null}
        {guestName ? (
          <p className={styles["episode-card__guest"]}>{guestName}</p>
        ) : null}
      </div>

      <div className={styles["episode-card__footer"]}>
        <p className={styles["episode-card__meta"]}>
          {publishedAt} · {duration}
        </p>
        <Link href={href} className={styles["episode-card__link"]}>
          <LuPlay aria-hidden className={styles["episode-card__play-icon"]} />
          <span className="sr-only">
            Episode {number}: {title}
            {guestName ? `, ${guestName}` : ""}
            {showNotes ? `. ${showNotes}` : ""}, {publishedAt}, {duration}
          </span>
        </Link>
      </div>
    </article>
  );
};
