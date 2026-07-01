import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useId } from "react";
import { MdPlayArrow, MdVideocam } from "react-icons/md";

import styles from "./hero-teaser.module.css";

export interface HeroTeaserProps {
  label?: string;
  title: string;
  guestName: string;
  publishedAt: string;
  duration: string;
  imageSrc: string;
  imageAlt: string;
  episodeHref: string;
  priority?: boolean;
  classNames?: string;
}

export const HeroTeaser: FC<HeroTeaserProps> = ({
  label = "Latest video episode",
  title,
  guestName,
  publishedAt,
  duration,
  imageSrc,
  imageAlt,
  episodeHref,
  priority = false,
  classNames,
}) => {
  const titleId = useId();

  return (
    <article
      className={clsx(styles["hero-teaser"], classNames)}
      aria-labelledby={titleId}
    >
      <div className={styles["hero-teaser__art"]}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          loading={priority ? "eager" : undefined}
          fetchPriority={priority ? "high" : undefined}
          quality={priority ? 80 : undefined}
          sizes="(max-width: 47.9375em) 100vw, (max-width: 64em) 300px, 480px"
          className={styles["hero-teaser__image"]}
        />
        <span className={styles["hero-teaser__video-badge"]}>
          <MdVideocam
            aria-hidden
            className={styles["hero-teaser__video-badge-icon"]}
          />
          <span
            className={clsx({
              [styles["hero-teaser__video-badge-label"]]: true,
              [styles["hero-teaser__video-badge-label--short"]]: true,
            })}
          >
            VIDEO
          </span>
          <span
            className={clsx({
              [styles["hero-teaser__video-badge-label"]]: true,
              [styles["hero-teaser__video-badge-label--long"]]: true,
            })}
          >
            Video podcast
          </span>
        </span>
        <span className={styles["hero-teaser__play"]} aria-hidden>
          <MdPlayArrow
            aria-hidden
            className={styles["hero-teaser__play-icon"]}
          />
        </span>
      </div>

      <div className={styles["hero-teaser__body"]}>
        <p className={styles["hero-teaser__label"]}>{label}</p>
        <h3 className={styles["hero-teaser__title"]} id={titleId}>
          {title}
        </h3>

        <div className={styles["hero-teaser__meta-row"]}>
          {guestName ? (
            <p className={styles["hero-teaser__meta-guest"]}>
              with {guestName}
            </p>
          ) : null}
          <p className={styles["hero-teaser__meta-date"]}>
            {publishedAt} · {duration}
          </p>
        </div>

        <Link href={episodeHref} className={styles["hero-teaser__link"]}>
          <MdPlayArrow
            aria-hidden
            className={styles["hero-teaser__link-icon"]}
          />
          <span className={styles["hero-teaser__link-text"]}>Play episode</span>
          <span className="sr-only">: {title}</span>
        </Link>
      </div>
    </article>
  );
};
