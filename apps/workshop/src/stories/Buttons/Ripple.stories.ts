import type { StoryObj } from '@storybook/react';

import { Ripple } from '@bui/buttons';

const meta = {
  title: 'Buttons/Ripple',
  component: Ripple,
  // tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color', defaultValue: '#6633fe' },
    height: { control: 'number' },
    fontSize: { control: 'text', defaultValue: '1rem' },
  },
}

export default meta;

export const Default: StoryObj<typeof meta> = {};