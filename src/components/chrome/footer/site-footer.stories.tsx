import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ReactNode } from "react";

import { SiteFooter } from ".";

const meta = {
  title: "Chrome/SiteFooter",
  component: SiteFooter,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SiteFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

const lightPageCanvas = [
  (Story: () => ReactNode) => (
    <div className="flex min-h-screen flex-col justify-end bg-[#fafafa]">
      <Story />
    </div>
  ),
];

const darkPageCanvas = [
  (Story: () => ReactNode) => (
    <div className="flex min-h-screen flex-col justify-end bg-[#0a0a0a]">
      <div className="flex-1" />
      <Story />
    </div>
  ),
];

export const Default: Story = {
  decorators: lightPageCanvas,
};

export const OnDarkPage: Story = {
  decorators: darkPageCanvas,
};
