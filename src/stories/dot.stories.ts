import type { Meta, StoryObj } from '@storybook/react';

import Dot from '@/components/dot';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Dot',
  component: Dot,
  argTypes: {
    color: { control: 'color' },
    size: {control: 'number'}
  },
} satisfies Meta<typeof Dot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    x: 100,
    y: 100,
    size: 32,
    color: 'red'
  },
};
