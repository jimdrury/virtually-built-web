import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { EpisodeCard } from ".";

const meta = {
  title: "Components/EpisodeCard",
  component: EpisodeCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0a0a0a" }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "320px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    number: "047",
    title: "Why local-first still matters",
    guestName: "Marcus Webb",
    publishedAt: "17 Jun 2026",
    duration: "38 min",
    imageSrc: "/images/featured-episode-art.png",
    imageAlt: "Marcus Webb recording a podcast episode",
    href: "/episodes/why-local-first-still-matters",
    showVideoBadge: false,
  },
} satisfies Meta<typeof EpisodeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithVideoBadge: Story = {
  args: {
    showVideoBadge: true,
  },
};
