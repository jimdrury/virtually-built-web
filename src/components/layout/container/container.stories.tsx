import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Container } from ".";

const meta = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="rounded-md border border-dashed border-border py-8 text-center text-sm text-muted-foreground">
        Content is constrained to 1440px with responsive horizontal padding
        (48px desktop, 24px tablet, 16px mobile).
      </div>
    ),
  },
};
