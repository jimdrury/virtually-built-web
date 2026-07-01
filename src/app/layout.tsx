import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import type { FC } from "react";
import { Suspense } from "react";

import { SanityPreviewShell } from "@/components/sanity/sanity-preview-shell";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Virtually Built",
    template: "%s | Virtually Built",
  },
  description:
    "A podcast on software, systems, and the people building the digital world — from architecture to craft, with guests who ship.",
};

const Layout: FC<LayoutProps<"/">> = ({ children }) => (
  <html lang="en" className={`h-full antialiased font-sans ${fontVariables}`}>
    <body className="min-h-full flex flex-col bg-background text-foreground">
      {children}
      <Suspense fallback={null}>
        <SanityPreviewShell />
      </Suspense>
      <Analytics />
    </body>
  </html>
);

export default Layout;
