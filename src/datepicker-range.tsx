import React, { FC, memo } from 'react';
import { Calendar } from './calendar';
import { Value } from './types';
import { useCalendarMonth } from './use-calendar-month';
import { useDatepickerRange } from './use-datepicker-range';

type Props = {
  value?: Value;
  onChange: (nextValue: Value) => void;
};

const DatepickerRange: FC<Props> = (props) => {
  const {
    value,
    onChange,
  } = props;

  const {
    currentMonthTimestamp,
    onPrevMonth,
    onNextMonth,
  } = useCalendarMonth(value ? value.from : Date.now());

  const {
    selectedDays,
    handleClick,
  } = useDatepickerRange({
    value,
    onChange,
  });

  return (
    <Calendar
      selectedDays={selectedDays}
      monthTimestamp={currentMonthTimestamp}
      onPrevMonth={onPrevMonth}
      onNextMonth={onNextMonth}
      onClick={handleClick}
    />
  );
};

const DatepickerRangeMemo = memo(DatepickerRange);
export { DatepickerRangeMemo as DatepickerRange };
