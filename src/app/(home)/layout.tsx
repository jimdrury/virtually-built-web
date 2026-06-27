import type { FC } from "react";
import { SiteFooter } from "@/components/chrome/footer";
import { SiteHeader } from "@/components/chrome/header";

const Layout: FC<LayoutProps<"/">> = ({ children }) => {
  return (
    <>
      <SiteHeader variant="light" />
      {children}
      <SiteFooter />
    </>
  );
};

export default Layout;
