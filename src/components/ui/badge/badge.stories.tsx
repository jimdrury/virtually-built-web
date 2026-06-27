import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from ".";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Season 3 · Now streaming",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Badge",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Badge",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Badge",
  },
};
