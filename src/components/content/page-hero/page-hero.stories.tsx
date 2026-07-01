import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PageHero } from ".";

const meta = {
  title: "Content/PageHero",
  component: PageHero,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    eyebrow: "Episode archive",
    title: "All episodes",
    subtitle:
      "Conversations on software, systems, and the people building the digital world.",
  },
} satisfies Meta<typeof PageHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
