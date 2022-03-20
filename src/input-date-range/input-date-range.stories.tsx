import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputDateRange } from './input-date-range';
import { Timestamp } from '../types';

export default {
  title: 'Input/date-range',
  component: InputDateRange,
} as ComponentMeta<typeof InputDateRange>;

const Template: ComponentStory<typeof InputDateRange> = (args) => {
  const [value, setValue] = useState<[Timestamp, Timestamp] | undefined>();

  return (
    <InputDateRange
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
