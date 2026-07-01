import type { Preview } from "@storybook/nextjs-vite";
import { MINIMAL_VIEWPORTS } from "storybook/viewport";

import { fontVariables } from "../src/lib/fonts";
import "../src/app/globals.css";

const siteViewports = {
  desktop: {
    name: "Desktop (1440)",
    styles: { width: "1440px", height: "900px" },
    type: "desktop" as const,
  },
  tablet: {
    name: "Tablet (768)",
    styles: { width: "768px", height: "1024px" },
    type: "tablet" as const,
  },
  mobile: {
    name: "Mobile (390)",
    styles: { width: "390px", height: "844px" },
    type: "mobile" as const,
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={fontVariables}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          "Foundations",
          "Chrome",
          "Home",
          "Episodes",
          "UI",
          "*",
        ],
      },
    },
    viewport: {
      options: {
        ...MINIMAL_VIEWPORTS,
        ...siteViewports,
      },
    },
  },
};

export default preview;
