import type { FC, ReactNode } from "react";

import { SiteFooter } from "@/components/chrome/footer";
import { SiteHeader } from "@/components/chrome/header";

const WatchLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <SiteHeader variant="light" />
    {children}
    <SiteFooter />
  </>
);

export default WatchLayout;
