import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LuArrowRight, LuPlay } from "react-icons/lu";

import { Button } from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    href: "/watch/episode-001-example",
    children: "Play episode",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    variant: "dark",
    children: "Listen to latest",
  },
};

export const Outline: Story = {
  args: {
    variant: "light",
    children: "View all episodes",
  },
};

export const DarkLarge: Story = {
  args: {
    variant: "dark",
    size: "large",
    children: "Listen to latest",
  },
};

export const OutlineLarge: Story = {
  args: {
    variant: "light",
    size: "large",
    children: "View all episodes",
  },
};

export const WithStartIcon: Story = {
  args: {
    startIcon: LuPlay,
    children: "Play episode",
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: LuArrowRight,
    children: "View all episodes",
  },
};

export const WithBothIcons: Story = {
  args: {
    startIcon: LuPlay,
    endIcon: LuArrowRight,
    children: "Play episode",
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    startIcon: LuPlay,
    "aria-label": "Play episode",
    children: undefined,
  },
};

export const IconOnlyDark: Story = {
  args: {
    variant: "dark",
    iconOnly: true,
    startIcon: LuPlay,
    "aria-label": "Play episode",
    children: undefined,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const AsChild: Story = {
  render: (args) => (
    <Button {...args} asChild>
      <button type="button">Custom element</button>
    </Button>
  ),
  args: {
    variant: "light",
    href: undefined,
    children: undefined,
  },
};

export const GhostIconOnly: Story = {
  args: {
    variant: "ghost",
    iconOnly: true,
    startIcon: LuPlay,
    "aria-label": "Play episode",
    children: undefined,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
