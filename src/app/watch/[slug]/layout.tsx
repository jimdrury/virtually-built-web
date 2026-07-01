import type { FC } from "react";

import { SiteFooter } from "@/components/chrome/footer";
import { SiteHeader } from "@/components/chrome/header";
import { SubscribeSection } from "@/components/content/subscribe-section";

const WatchLayout: FC<LayoutProps<"/watch/[slug]">> = ({ children }) => (
  <>
    <SiteHeader variant="dark" />
    <main>
      {children}
      <SubscribeSection />
    </main>
    <SiteFooter />
  </>
);

export default WatchLayout;
