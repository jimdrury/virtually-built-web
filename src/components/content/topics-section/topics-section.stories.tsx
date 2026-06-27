import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LuBot, LuBoxes, LuLayers, LuSparkles } from "react-icons/lu";

import { TopicsSection } from ".";

const defaultTopics = [
  {
    label: "Building with AI",
    icon: LuSparkles,
  },
  {
    label: "Agent Frameworks",
    icon: LuBot,
  },
  {
    label: "Google's Agentic Offerings",
    icon: LuLayers,
  },
  {
    label: "Different Models and Modalities",
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
