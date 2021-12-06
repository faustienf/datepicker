import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatepickerRange } from './datepicker-range';
import { DatepickerPopup } from './datepicker-popup';

export default {
  title: 'Datepicker/range',
  component: DatepickerRange,
} as ComponentMeta<typeof DatepickerRange>;

const Template: ComponentStory<typeof DatepickerRange> = (args) => {
  const [value, setValue] = useState<[number, number] | undefined>();

  return (
    <DatepickerPopup>
      <DatepickerRange
        {...args}
        selected={value}
        onSelect={setValue}
      />
    </DatepickerPopup>
  );
};

export const Default = Template.bind({});
Default.args = {};
