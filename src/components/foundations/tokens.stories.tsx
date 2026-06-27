import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { Text } from "@/components/ui/text";

const meta = {
  title: "Foundations/Tokens",
  tags: ["ai-generated"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="space-y-2">
        <div className="h-16 rounded-lg border border-black/10 bg-background" />
        <p className="text-sm font-medium">background</p>
      </div>
      <div className="space-y-2">
        <div className="h-16 rounded-lg bg-foreground" />
        <p className="text-sm font-medium">foreground</p>
      </div>
      <div className="space-y-2">
        <div className="h-16 rounded-lg bg-muted-foreground" />
        <p className="text-sm font-medium">muted-foreground</p>
      </div>
      <div className="space-y-2">
        <div className="h-16 rounded-lg bg-[#0a0a0a] p-2">
          <span className="text-text-inverse text-sm">text-inverse</span>
        </div>
        <p className="text-sm font-medium">text-inverse</p>
      </div>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("background")).toBeVisible();
  },
};

export const Typography: Story = {
  render: () => (
    <div className="space-y-4 font-sans">
      <Text variant="display" balance>
        Virtually Built
      </Text>
      <Text variant="lead" tone="muted">
        Shared page typography. Component-specific text lives in each
        component&apos;s CSS.
      </Text>
    </div>
  ),
};
