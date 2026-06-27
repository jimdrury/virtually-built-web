import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AboutSection } from ".";

const defaultSpeakers = [
  {
    name: "Jim Drury",
    role: "Co-host & builder",
  },
  {
    name: "Matthew Law",
    role: "Co-host & builder",
  },
] as const;

const meta = {
  title: "Home/About Section",
  component: AboutSection,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    speakers: [...defaultSpeakers],
  },
} satisfies Meta<typeof AboutSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
