import type { Meta, StoryObj } from '@storybook/react';
import Letter from '.';

const meta = {
  title: 'Components/Letter',
  component: Letter,
  tags: ['autodocs'],
} satisfies Meta<typeof Letter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    animate: true,
    initialQuote: {
      author: 'Author',
      text: 'Text',
    },
  },
};
