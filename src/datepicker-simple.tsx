import React, { FC, memo } from 'react';
import { Calendar } from './calendar';
import { useCalendarMonth } from './use-calendar-month';
import { useDatepickerSimple } from './use-datepicker-simple';

type Props = Parameters<typeof useDatepickerSimple>[0];

const DatepickerSimple: FC<Props> = (props) => {
  const {
    value,
  } = props;

  const {
    currentMonthTimestamp,
    onPrevMonth,
    onNextMonth,
  } = useCalendarMonth(value ? value.from : Date.now());

  const {
    selectedDays,
    handleClick,
  } = useDatepickerSimple(props);

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

const DatepickerSimpleMemo = memo(DatepickerSimple);
export { DatepickerSimpleMemo as DatepickerSimple };
