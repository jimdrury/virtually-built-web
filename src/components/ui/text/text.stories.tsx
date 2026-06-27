import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { Text, type TextVariant } from ".";
import { Prose } from "./prose";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "padded",
  },
  args: {
    children: "Virtually Built",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

const variantStory = (variant: TextVariant, children: string): Story => ({
  name: variant,
  args: {
    variant,
    children,
  },
});

export const Display: Story = variantStory(
  "display",
  "Ideas that shape what we build next.",
);

export const PageTitle: Story = variantStory("page-title", "All episodes");

export const TheatreTitle: Story = variantStory(
  "theatre-title",
  "Designing for durability in distributed systems",
);

export const SectionTitle: Story = variantStory(
  "section-title",
  "Recent conversations",
);

export const IntroTitle: Story = variantStory(
  "intro-title",
  "Built in the open, discussed in depth.",
);

export const PromoTitle: Story = variantStory(
  "promo-title",
  "Never miss an episode",
);

export const Lead: Story = variantStory(
  "lead",
  "A podcast on software, systems, and the people building the digital world.",
);

export const Body: Story = variantStory(
  "body",
  "Conversations on software, systems, and the people building the digital world.",
);

export const Ui: Story = variantStory("ui", "Episodes");

export const ProseDefault: Story = {
  render: () => <Prose>Shared prose styling for supporting copy.</Prose>,
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Shared prose styling for supporting copy."),
    ).toBeVisible();
  },
};

export const ProseActive: Story = {
  render: () => <Prose state="active">Active state prose.</Prose>,
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Active state prose.")).toBeVisible();
  },
};
