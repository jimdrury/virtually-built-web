import type { FC } from "react";

import { SiteFooter } from "@/components/chrome/footer";
import { SiteHeader } from "@/components/chrome/header";
import { PageHero } from "@/components/content/page-hero";
import { SubscribeSection } from "@/components/content/subscribe-section";

const EpisodesLayout: FC<LayoutProps<"/episodes">> = ({ children }) => (
  <>
    <SiteHeader variant="light" />
    <main>
      <PageHero
        eyebrow="Episode archive"
        title="All episodes"
        subtitle="Conversations on software, systems, and the people building the digital world."
      />

      {children}

      <SubscribeSection />
    </main>
    <SiteFooter />
  </>
);

export default EpisodesLayout;
