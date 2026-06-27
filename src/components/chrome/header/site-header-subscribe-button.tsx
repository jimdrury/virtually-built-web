import clsx from "clsx";
import type { FC } from "react";
import type { ChromeVariant } from "@/components/chrome/header";
import { Button, type ButtonVariant } from "@/components/ui/button";
import styles from "./site-header-subscribe-button.module.css";

const subscribeButtonVariant: Record<ChromeVariant, ButtonVariant> = {
  light: "dark",
  dark: "light",
};

export interface SiteHeaderSubscribeButtonProps {
  variant?: ChromeVariant;
  classNames?: string;
}

export const SiteHeaderSubscribeButton: FC<SiteHeaderSubscribeButtonProps> = ({
  variant = "light",
  classNames,
}) => (
  <Button
    href="/subscribe"
    variant={subscribeButtonVariant[variant]}
    classNames={clsx(styles["site-header-subscribe-button"], classNames)}
  >
    Subscribe
  </Button>
);
