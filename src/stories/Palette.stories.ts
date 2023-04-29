import type { Meta, StoryObj } from "@storybook/react";

import Palette from "@/components/Palette";

const meta = {
  title: "Palette",
  component: Palette,
  argTypes: { onClick: { action: "clicked" } },
} satisfies Meta<typeof Palette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
