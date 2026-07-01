import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import type { EpisodeSummary } from "@/components/content/episode-card";

import { RecentConversationsSection } from ".";

const defaultEpisodes: EpisodeSummary[] = [
  {
    number: "047",
    title: "Why local-first still matters",
    guestName: "Marcus Webb",
    publishedAt: "17 Jun 2026",
    duration: "38 min",
    imageSrc: "/images/featured-episode-art.png",
    imageAlt: "Marcus Webb recording a podcast episode",
    href: "/watch/episode-006-why-local-first-still-matters",
    showVideoBadge: false,
  },
  {
    number: "046",
    title: "The craft of incremental delivery",
    guestName: "Elena Torres",
    publishedAt: "10 Jun 2026",
    duration: "52 min",
    imageSrc: "/images/featured-episode-art.png",
    imageAlt: "Elena Torres recording a podcast episode",
    href: "/watch/episode-007-the-craft-of-incremental-delivery",
    showVideoBadge: false,
  },
  {
    number: "045",
    title: "Platform teams without bottlenecks",
    guestName: "James Okonkwo",
    publishedAt: "3 Jun 2026",
    duration: "44 min",
    imageSrc: "/images/featured-episode-art.png",
    imageAlt: "James Okonkwo recording a podcast episode",
    href: "/watch/episode-008-platform-teams-without-bottlenecks",
    showVideoBadge: false,
  },
  {
    number: "044",
    title: "Observability without the overhead",
    guestName: "Priya Sharma",
    publishedAt: "27 May 2026",
    duration: "41 min",
    imageSrc: "/images/featured-episode-art.png",
    imageAlt: "Priya Sharma recording a podcast episode",
    href: "/watch/episode-009-observability-without-the-overhead",
    showVideoBadge: true,
  },
];

const meta = {
  title: "Home/Recent Conversations Section",
  component: RecentConversationsSection,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    episodes: defaultEpisodes,
  },
} satisfies Meta<typeof RecentConversationsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithVideoBadges: Story = {
  args: {
    episodes: defaultEpisodes.map((episode) => ({
      ...episode,
      showVideoBadge: true,
    })),
  },
};
