import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatepickerSimple } from './datepicker-simple';
import { DatepickerPopup } from '../datepicker-popup';
import { Timestamp } from '../types';

export default {
  title: 'Datepicker/simple',
  component: DatepickerSimple,
} as ComponentMeta<typeof DatepickerSimple>;

const Template: ComponentStory<typeof DatepickerSimple> = (args) => {
  const [value, setValue] = useState<Timestamp | undefined>();

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
