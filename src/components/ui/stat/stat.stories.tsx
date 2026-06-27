import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Stat } from ".";

const meta = {
  title: "Components/Stat",
  component: Stat,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Avg length",
    value: "42 min",
  },
} satisfies Meta<typeof Stat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Episodes: Story = {
  args: {
    label: "Episodes",
    value: "48",
  },
};

export const Listeners: Story = {
  args: {
    label: "Listeners",
    value: "12K+",
  },
};

export const Inverse: Story = {
  args: {
    label: "Published",
    value: "24 Jun 2026",
    variant: "inverse",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const InverseRunningTime: Story = {
  args: {
    label: "Running time",
    value: "47 min",
    variant: "inverse",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const HeroMetaRow: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <Stat label="Episodes" value="48" />
      <Stat label="Listeners" value="12K+" />
      <Stat label="Avg length" value="42 min" />
    </div>
  ),
};

export const StatsRow: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "48px",
        justifyContent: "center",
        padding: "24px 0",
        borderBlock: "1px solid rgb(255 255 255 / 0.1)",
        background: "#171717",
      }}
    >
      <Stat label="Published" value="24 Jun 2026" variant="inverse" />
      <Stat label="Running time" value="47 min" variant="inverse" />
      <Stat label="Guest" value="Sarah Chen" variant="inverse" />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
};
