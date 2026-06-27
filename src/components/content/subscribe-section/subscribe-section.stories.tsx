import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SubscribeSection } from ".";

const meta = {
  title: "Home/Subscribe Section",
  component: SubscribeSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SubscribeSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
