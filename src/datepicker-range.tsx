import React, { FC, memo } from 'react';
import { Calendar } from './calendar';
import { CalendarDay } from './calendar-day';
import { displayDay, isCurrentMonth } from './date-helpers';
import { useCalendarMonth } from './use-calendar-month';
import { useDatepickerRange } from './use-datepicker-range';

type Props = Parameters<typeof useDatepickerRange>[0];

const DatepickerRange: FC<Props> = (props) => {
  const {
    selected,
  } = props;

  const {
    currentMonthTimestamp,
    onPrevMonth,
    onNextMonth,
  } = useCalendarMonth(selected ? selected[0] : Date.now());

  const {
    selectedSet,
    handleClick,
  } = useDatepickerRange(props);

  return (
    <Calendar
      monthTimestamp={currentMonthTimestamp}
      onPrevMonth={onPrevMonth}
      onNextMonth={onNextMonth}
    >
      {(dayTimestamp) => (
        <CalendarDay
          key={String(dayTimestamp)}
          isCurrentMonth={isCurrentMonth(currentMonthTimestamp, dayTimestamp)}
          isSelected={selectedSet.has(dayTimestamp)}
          dayTimestamp={dayTimestamp}
          onClick={handleClick}
        >
          {displayDay(dayTimestamp)}
        </CalendarDay>
      )}
    </Calendar>
  );
};

const DatepickerRangeMemo = memo(DatepickerRange);
export { DatepickerRangeMemo as DatepickerRange };
