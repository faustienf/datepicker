import React, { FC, memo, useMemo } from 'react';
import { Calendar } from './calendar';
import { CalendarDay } from './calendar-day';
import { displayDay, isCurrentMonth, startOfDay } from './date-helpers';
import { useCalendarMonth } from './use-calendar-month';

type Props = {
  selected?: number;
  onSelect: (nextSelected: number) => void;
};

const DatepickerSimple: FC<Props> = (props) => {
  const {
    selected = 0,
    onSelect,
  } = props;

  const {
    currentMonthTimestamp,
    onPrevMonth,
    onNextMonth,
  } = useCalendarMonth(selected || Date.now());

  const selectedStartOfDay = useMemo(
    () => startOfDay(selected),
    [selected],
  );

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
          isSelected={selectedStartOfDay === dayTimestamp}
          dayTimestamp={dayTimestamp}
          onClick={onSelect}
        >
          {displayDay(dayTimestamp)}
        </CalendarDay>
      )}
    </Calendar>
  );
};

const DatepickerSimpleMemo = memo(DatepickerSimple);
export { DatepickerSimpleMemo as DatepickerSimple };
