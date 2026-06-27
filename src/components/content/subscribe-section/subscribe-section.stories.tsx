import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SubscribeSection } from ".";

const defaultLinks = [
  {
    label: "Apple Podcasts",
    href: "#apple-podcasts",
    variant: "primary" as const,
  },
  { label: "Spotify", href: "#spotify", variant: "secondary" as const },
  { label: "YouTube", href: "#youtube", variant: "secondary" as const },
  { label: "RSS Feed", href: "#rss", variant: "secondary" as const },
];

const meta = {
  title: "Home/Subscribe Section",
  component: SubscribeSection,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    links: defaultLinks,
  },
} satisfies Meta<typeof SubscribeSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
