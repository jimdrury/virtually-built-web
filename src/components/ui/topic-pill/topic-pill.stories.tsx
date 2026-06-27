import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LuBot, LuBoxes, LuLayers, LuSparkles } from "react-icons/lu";

import { TopicPill } from ".";

const meta = {
  title: "Components/Topic Pill",
  component: TopicPill,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Building with AI",
  },
} satisfies Meta<typeof TopicPill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    children: "Building with AI",
    icon: LuSparkles,
  },
};

export const AsLink: Story = {
  args: {
    children: "Building with AI",
    href: "/episodes?topic=building-with-ai",
    icon: LuSparkles,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Different Models and Modalities",
    icon: LuBoxes,
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "390px" }}>
        <Story />
      </div>
    ),
  ],
};

export const TopicsRow: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
      <TopicPill icon={LuSparkles}>Building with AI</TopicPill>
      <TopicPill icon={LuBot}>Agent Frameworks</TopicPill>
      <TopicPill icon={LuLayers}>Google&apos;s Agentic Offerings</TopicPill>
      <TopicPill icon={LuBoxes}>Different Models and Modalities</TopicPill>
    </div>
  ),
};
