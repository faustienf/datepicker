import React, { ComponentProps, FC } from 'react';
import { DatepickerRange } from './datepicker-range';
import { DatepickerSimple } from './datepicker-simple';

type DatepickerProps = ComponentProps<typeof DatepickerSimple>;

type Props = DatepickerProps & {
  mode: 'simple' | 'range';
};

const datepickers = {
  simple: DatepickerSimple,
  range: DatepickerRange,
};

export const Datepicker: FC<Props> = (props) => {
  const {
    mode,
    ...rest
  } = props;

  const DatepickerByMode = datepickers[mode];
  return (
    <DatepickerByMode {...rest} />
  );
};
