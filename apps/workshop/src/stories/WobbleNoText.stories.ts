import type { StoryObj } from '@storybook/react';

import { WobbleNoText } from '@bui/buttons';

const meta = {
  title: 'Buttons/WobbleNoText',
  component: WobbleNoText,
  // tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color', defaultValue: '#6633fe' },
  },
}

export default meta;

export const Default: StoryObj<typeof meta> = {};