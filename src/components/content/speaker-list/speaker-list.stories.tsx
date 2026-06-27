import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SpeakerList } from ".";

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
  title: "Components/Speaker List",
  component: SpeakerList,
  parameters: {
    layout: "centered",
  },
  args: {
    speakers: [...defaultSpeakers],
  },
} satisfies Meta<typeof SpeakerList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
