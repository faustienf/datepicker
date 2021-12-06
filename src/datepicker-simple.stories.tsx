import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatepickerSimple } from './datepicker-simple';
import { DatepickerPopup } from './datepicker-popup';

export default {
  title: 'Datepicker/simple',
  component: DatepickerSimple,
} as ComponentMeta<typeof DatepickerSimple>;

const Template: ComponentStory<typeof DatepickerSimple> = (args) => {
  const [value, setValue] = useState<number | undefined>();

  return (
    <DatepickerPopup>
      <DatepickerSimple
        {...args}
        selected={value}
        onSelect={setValue}
      />
    </DatepickerPopup>
  );
};

export const Default = Template.bind({});
Default.args = {};
