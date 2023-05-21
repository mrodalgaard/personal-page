import type { Meta, StoryObj } from '@storybook/react';
import Envelope from '.';

const meta = {
  title: 'Components/Envelope',
  component: Envelope,
  tags: ['autodocs'],
} satisfies Meta<typeof Envelope>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
