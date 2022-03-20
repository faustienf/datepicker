import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatepickerRange } from './datepicker-range';
import { DatepickerPopup } from '../datepicker-popup';
import { Timestamp } from '../types';
import { checkInRange } from '../utils';

const minDate = new Date();
minDate.setHours(0, 0, 0, 0);
minDate.setDate(minDate.getDate());
const maxDate = new Date();
maxDate.setHours(0, 0, 0, 0);
maxDate.setDate(minDate.getDate() + 30);

const onDisableDay = (dateTimestamp: Timestamp): boolean => !checkInRange(
  dateTimestamp,
  [minDate.getTime(), maxDate.getTime()],
);

export default {
  title: 'Datepicker/range',
  component: DatepickerRange,
} as ComponentMeta<typeof DatepickerRange>;

const Template: ComponentStory<typeof DatepickerRange> = (args) => {
  const [value, setValue] = useState<[Timestamp, Timestamp]>([Date.now(), maxDate.getTime()]);

  return (
    <DatepickerPopup>
      <DatepickerRange
        {...args}
        selected={value}
        onSelect={setValue}
        onDisableDay={onDisableDay}
      />
    </DatepickerPopup>
  );
};

export const Default = Template.bind({});
Default.args = {};
