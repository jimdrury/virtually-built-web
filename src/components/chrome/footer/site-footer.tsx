import clsx from "clsx";
import type { FC } from "react";
import { Suspense } from "react";
import { SiteLogo } from "@/components/chrome/logo";
import { Container } from "@/components/layout/container";
import { TextLink } from "@/components/ui/text/text-link";
import { CopyrightYear } from "./copyright-year";
import styles from "./site-footer.module.css";

const FOOTER_LINKS = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
] as const;

export interface SiteFooterProps {
  classNames?: string;
}

export const SiteFooter: FC<SiteFooterProps> = ({ classNames }) => (
  <footer className={clsx(styles["site-footer"], classNames)}>
    <Container>
      <div className={styles["site-footer__inner"]}>
        <div
          className={clsx({
            [styles["site-footer__brand"]]: true,
            [styles["site-footer__brand--tablet-order"]]: true,
          })}
        >
          <SiteLogo placement="footer" />
        </div>

        <nav
          aria-label="Footer"
          className={clsx({
            [styles["site-footer__links"]]: true,
            [styles["site-footer__links--tablet-order"]]: true,
          })}
        >
          {FOOTER_LINKS.map(({ label, href }) => (
            <TextLink
              key={href}
              href={href}
              classNames={styles["site-footer__link"]}
            >
              {label}
            </TextLink>
          ))}
        </nav>

        <p
          className={clsx({
            [styles["site-footer__copyright"]]: true,
            [styles["site-footer__copyright--tablet-order"]]: true,
          })}
        >
          <Suspense fallback={<>© Virtually Built</>}>
            <CopyrightYear />
          </Suspense>
        </p>
      </div>
    </Container>
  </footer>
);
