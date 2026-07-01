import type { FC } from "react";

import { SiteFooter } from "@/components/chrome/footer";
import { SiteHeader } from "@/components/chrome/header";
import { SubscribeSection } from "@/components/content/subscribe-section";

const EpisodesLayout: FC<LayoutProps<"/episodes">> = ({ children }) => (
  <>
    <SiteHeader variant="light" />
    {children}
    <SubscribeSection />
    <SiteFooter />
  </>
);

export default EpisodesLayout;
