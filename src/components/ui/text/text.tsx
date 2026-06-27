import clsx from "clsx";
import type { ElementType, FC, ReactNode } from "react";

import styles from "./text.module.css";

export type TextVariant =
  | "display"
  | "page-title"
  | "theatre-title"
  | "section-title"
  | "intro-title"
  | "promo-title"
  | "lead"
  | "body"
  | "ui";

export type TextTone = "default" | "muted" | "inverse";

export type TextAs =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "dt"
  | "dd"
  | "time"
  | "cite"
  | "a";

export interface TextProps {
  as?: TextAs;
  variant?: TextVariant;
  tone?: TextTone;
  family?: "sans" | "mono";
  align?: "start" | "center";
  truncate?: boolean;
  balance?: boolean;
  classNames?: string;
  children: ReactNode;
  id?: string;
}

const defaultElementForVariant: Record<TextVariant, TextAs> = {
  display: "h1",
  "page-title": "h1",
  "theatre-title": "h2",
  "section-title": "h2",
  "intro-title": "h2",
  "promo-title": "h2",
  lead: "p",
  body: "p",
  ui: "span",
};

const variantClassMap: Record<TextVariant, string> = {
  display: styles["text--display"],
  "page-title": styles["text--page-title"],
  "theatre-title": styles["text--theatre-title"],
  "section-title": styles["text--section-title"],
  "intro-title": styles["text--intro-title"],
  "promo-title": styles["text--promo-title"],
  lead: styles["text--lead"],
  body: styles["text--body"],
  ui: styles["text--ui"],
};

export interface TextClassOptions {
  variant?: TextVariant;
  tone?: TextTone;
  family?: "sans" | "mono";
  align?: "start" | "center";
  truncate?: boolean;
  balance?: boolean;
  classNames?: string;
}

export const getTextClassNames = ({
  variant = "body",
  tone = "default",
  family,
  align,
  truncate = false,
  balance = false,
  classNames,
}: TextClassOptions = {}) =>
  clsx(
    {
      [styles.text]: true,
      [variantClassMap[variant]]: true,
      [styles["text--tone-muted"]]: tone === "muted",
      [styles["text--tone-inverse"]]: tone === "inverse",
      [styles["text--family-sans"]]: family === "sans",
      [styles["text--family-mono"]]: family === "mono",
      [styles["text--align-start"]]: align === "start",
      [styles["text--align-center"]]: align === "center",
      [styles["text--truncate"]]: truncate,
      [styles["text--balance"]]: balance,
    },
    classNames,
  );

export const Text: FC<TextProps> = ({
  as,
  variant = "body",
  tone = "default",
  family,
  align,
  truncate = false,
  balance = false,
  classNames,
  children,
  id,
}) => {
  const Component = (as ?? defaultElementForVariant[variant]) as ElementType;

  return (
    <Component
      id={id}
      className={getTextClassNames({
        variant,
        tone,
        family,
        align,
        truncate,
        balance,
        classNames,
      })}
    >
      {children}
    </Component>
  );
};
