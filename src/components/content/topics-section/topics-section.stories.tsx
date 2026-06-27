import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LuBot, LuBoxes, LuLayers, LuSparkles } from "react-icons/lu";

import { TopicsSection } from ".";

const defaultTopics = [
  {
    label: "Building with AI",
    href: "/episodes?topic=building-with-ai",
    icon: LuSparkles,
  },
  {
    label: "Agent Frameworks",
    href: "/episodes?topic=agent-frameworks",
    icon: LuBot,
  },
  {
    label: "Google's Agentic Offerings",
    href: "/episodes?topic=google-agentic-offerings",
    icon: LuLayers,
  },
  {
    label: "Different Models and Modalities",
    href: "/episodes?topic=different-models-and-modalities",
    icon: LuBoxes,
  },
] as const;

const meta = {
  title: "Home/Topics Section",
  component: TopicsSection,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    topics: [...defaultTopics],
  },
} satisfies Meta<typeof TopicsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
