import type { StoryObj } from '@storybook/react';

import { Lava } from '@bui/buttons';

const meta = {
  title: 'Buttons/Lava',
  component: Lava,
  // tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
}

export default meta;

export const Default: StoryObj<typeof meta> = {};