import type { Meta, StoryObj } from "@storybook/react";

import Canvas from "@/components/Canvas";

const meta = {
  title: "Canvas",
  component: Canvas,
  argTypes: { onClick: { action: "clicked" } },
} satisfies Meta<typeof Canvas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cols: 6,
    rows: 6,
    dx: 70,
    dy: 70,
  },
};
