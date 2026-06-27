import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ReactNode } from "react";

import { SiteHeader } from ".";

const meta = {
  title: "Chrome/SiteHeader",
  component: SiteHeader,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["light", "dark"],
    },
  },
} satisfies Meta<typeof SiteHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

const lightCanvas = [
  (Story: () => ReactNode) => (
    <div className="bg-[#fafafa]">
      <Story />
    </div>
  ),
];

const darkCanvas = [
  (Story: () => ReactNode) => (
    <div className="bg-[#0a0a0a]">
      <Story />
    </div>
  ),
];

export const Light: Story = {
  args: {
    variant: "light",
  },
  decorators: lightCanvas,
};

export const Dark: Story = {
  args: {
    variant: "dark",
  },
  decorators: darkCanvas,
};
