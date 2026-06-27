import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  LuArrowLeft,
  LuBot,
  LuBoxes,
  LuLayers,
  LuMenu,
  LuPlay,
  LuSparkles,
  LuX,
  LuYoutube,
} from "react-icons/lu";
import { MdPlayArrow, MdVideocam } from "react-icons/md";
import { expect } from "storybook/test";

import { PodcastsAppIcon } from "@/components/icons/material-symbols-podcasts-app";

const catalog = [
  { label: "PodcastsAppIcon", Icon: PodcastsAppIcon },
  { label: "LuMenu", Icon: LuMenu },
  { label: "LuX", Icon: LuX },
  { label: "LuArrowLeft", Icon: LuArrowLeft },
  { label: "LuPlay", Icon: LuPlay },
  { label: "LuSparkles", Icon: LuSparkles },
  { label: "LuBot", Icon: LuBot },
  { label: "LuLayers", Icon: LuLayers },
  { label: "LuBoxes", Icon: LuBoxes },
  { label: "LuYoutube", Icon: LuYoutube },
  { label: "MdPlayArrow", Icon: MdPlayArrow },
  { label: "MdVideocam", Icon: MdVideocam },
] as const;

const meta = {
  title: "Foundations/Icons",
  tags: ["ai-generated"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Catalog: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {catalog.map(({ label, Icon }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-3 rounded-lg border border-black/10 p-4 dark:border-white/10"
        >
          <Icon size={24} className="text-foreground" aria-hidden />
          <code className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
            {label}
          </code>
        </div>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("LuMenu")).toBeVisible();
    const cell = canvas.getByText("LuMenu").closest("div");
    const svg = cell?.querySelector("svg");
    await expect(svg).toHaveAttribute("aria-hidden", "true");
  },
};
