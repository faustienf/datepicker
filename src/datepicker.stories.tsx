import React, { useState, ComponentProps } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Datepicker } from './datepicker';
import { DatepickerPopup } from './datepicker-popup';

type Props = ComponentProps<typeof Datepicker>;

export default {
  title: 'Datepicker/example',
  component: Datepicker,
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => {
  const [value, setValue] = useState<Props['value'] | undefined>();

  return (
    <DatepickerPopup>
      <Datepicker
        {...args}
        value={value}
        onChange={setValue}
      />
    </DatepickerPopup>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  mode: 'simple',
};

export const Range = Template.bind({});
Range.args = {
  mode: 'range',
};
