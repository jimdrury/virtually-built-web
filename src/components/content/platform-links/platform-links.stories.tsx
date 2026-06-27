import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PlatformLinks } from ".";

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
  title: "Components/Platform Links",
  component: PlatformLinks,
  parameters: {
    layout: "centered",
  },
  args: {
    links: defaultLinks,
  },
} satisfies Meta<typeof PlatformLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Narrow: Story = {
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
};
