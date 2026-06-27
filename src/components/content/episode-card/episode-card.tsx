import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, FC } from "react";
import { useId } from "react";
import { LuPlay } from "react-icons/lu";
import { MdVideocam } from "react-icons/md";

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
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 47.9375em) 100vw, (max-width: 64em) 50vw, 25vw"
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
        <p className={styles["episode-card__guest"]}>{guestName}</p>
      </div>

      <div className={styles["episode-card__footer"]}>
        <p className={styles["episode-card__meta"]}>
          {publishedAt} · {duration}
        </p>
        <Link href={href} className={styles["episode-card__link"]}>
          <LuPlay aria-hidden className={styles["episode-card__play-icon"]} />
          <span className="sr-only">
            Episode {number}: {title}, with {guestName}, {publishedAt},{" "}
            {duration}
          </span>
        </Link>
      </div>
    </article>
  );
};
