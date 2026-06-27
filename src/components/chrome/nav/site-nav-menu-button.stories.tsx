import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent } from "storybook/test";
import { siteNavEmitter } from "./site-nav-emitter";
import { SiteNavInteractionDemo } from "./site-nav-interaction-demo";
import { SiteNavMenuButton } from "./site-nav-menu-button";

const meta = {
  title: "Chrome/SiteNavMenuButton",
  component: SiteNavMenuButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SiteNavMenuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    action: "open",
  },
  play: async ({ canvas }) => {
    const handler = fn();
    const unsubscribe = siteNavEmitter.on("openMenu", handler);

    await userEvent.click(canvas.getByRole("button", { name: "Open menu" }));
    await expect(handler).toHaveBeenCalledOnce();

    unsubscribe();
    await userEvent.click(canvas.getByRole("button", { name: "Open menu" }));
    await expect(handler).toHaveBeenCalledOnce();
  },
};

export const Close: Story = {
  args: {
    action: "close",
  },
  play: async ({ canvas }) => {
    const handler = fn();
    const unsubscribe = siteNavEmitter.on("closeMenu", handler);

    await userEvent.click(canvas.getByRole("button", { name: "Close menu" }));
    await expect(handler).toHaveBeenCalledOnce();

    unsubscribe();
  },
};

export const Interaction: Story = {
  args: {
    action: "open",
  },
  render: () => <SiteNavInteractionDemo />,
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Menu closed")).toBeVisible();

    await userEvent.click(canvas.getByRole("button", { name: "Open menu" }));
    await expect(canvas.getByText("Menu open")).toBeVisible();

    await userEvent.click(canvas.getByRole("button", { name: "Close menu" }));
    await expect(canvas.getByText("Menu closed")).toBeVisible();
  },
};
