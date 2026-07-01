import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HeroTeaser } from ".";

const heroTeaserArgs = {
  label: "Latest video episode",
  title: "Designing for durability in distributed systems",
  guestName: "Sarah Chen",
  publishedAt: "24 Jun 2026",
  duration: "47 min",
  imageSrc: "/images/featured-episode-art.png",
  imageAlt: "Sarah Chen and guest recording a video podcast episode",
  episodeHref:
    "/watch/episode-010-designing-for-durability-in-distributed-systems",
} as const;

const meta = {
  title: "Components/HeroTeaser",
  component: HeroTeaser,
  parameters: {
    layout: "centered",
  },
  args: heroTeaserArgs,
} satisfies Meta<typeof HeroTeaser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
