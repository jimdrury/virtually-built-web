import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Section } from ".";

const placeholder = (
  <div className="rounded-md border border-dashed border-current/30 py-8 text-center text-sm opacity-70">
    Section content sits inside Container for aligned horizontal padding.
  </div>
);

const meta = {
  title: "Layout/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    background: {
      control: "select",
      options: ["white", "black", "grey"],
    },
    paddingY: {
      control: "select",
      options: ["none", "default", "large", "compact"],
    },
  },
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const White: Story = {
  args: {
    background: "white",
    paddingY: "default",
    children: placeholder,
  },
};

export const Black: Story = {
  args: {
    background: "black",
    paddingY: "default",
    children: placeholder,
  },
};

export const Grey: Story = {
  args: {
    background: "grey",
    paddingY: "default",
    children: placeholder,
  },
};

export const LargePadding: Story = {
  args: {
    background: "white",
    paddingY: "large",
    children: placeholder,
  },
};

export const CompactPadding: Story = {
  args: {
    background: "grey",
    paddingY: "compact",
    children: placeholder,
  },
};

export const NoPadding: Story = {
  args: {
    background: "white",
    paddingY: "none",
    children: placeholder,
  },
};

export const StackedSections: Story = {
  args: {
    background: "white",
    paddingY: "default",
    children: placeholder,
  },
  render: () => (
    <>
      <Section background="white" paddingY="large">
        {placeholder}
      </Section>
      <Section background="grey" paddingY="default">
        {placeholder}
      </Section>
      <Section background="black" paddingY="default">
        {placeholder}
      </Section>
    </>
  ),
};
