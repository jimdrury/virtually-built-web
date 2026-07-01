import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HomeHero } from ".";

const meta = {
  title: "Home/HomeHero",
  component: HomeHero,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    badge: "Season 3 · Now streaming",
    headline: "Ideas that shape what we build next.",
    description:
      "A podcast on software, systems, and the people building the digital world — from architecture to craft, with guests who ship.",
    primaryCta: {
      label: "Listen to latest",
      href: "/episodes/latest",
    },
    secondaryCta: {
      label: "View all episodes",
      href: "/episodes",
    },
    stats: [
      { label: "Episodes", value: "48" },
      { label: "Listeners", value: "12K+" },
      { label: "Avg length", value: "42 min" },
    ],
    featuredEpisode: {
      label: "Latest video episode",
      title: "Designing for durability in distributed systems",
      guestName: "Sarah Chen",
      publishedAt: "24 Jun 2026",
      duration: "47 min",
      imageSrc: "/images/featured-episode-art.png",
      imageAlt: "Sarah Chen and guest recording a video podcast episode",
      episodeHref:
        "/watch/episode-010-designing-for-durability-in-distributed-systems",
    },
  },
} satisfies Meta<typeof HomeHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
