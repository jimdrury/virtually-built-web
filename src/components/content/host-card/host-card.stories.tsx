import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SpeakerList } from "@/components/content/speaker-list";

import { HostCard } from ".";

const meta = {
  title: "Components/Host Card",
  component: HostCard,
  parameters: {
    layout: "centered",
  },
  args: {
    name: "Jim Drury",
    role: "Co-host & builder",
  },
} satisfies Meta<typeof HostCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CoHost: Story = {
  args: {
    name: "Matthew Law",
    role: "Co-host & builder",
  },
};

export const HostsRow: Story = {
  render: () => (
    <SpeakerList
      speakers={[
        { name: "Jim Drury", role: "Co-host & builder" },
        { name: "Matthew Law", role: "Co-host & builder" },
      ]}
    />
  ),
  decorators: [
    (Story) => (
      <div style={{ width: "480px" }}>
        <Story />
      </div>
    ),
  ],
};
