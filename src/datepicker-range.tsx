import React, { FC, memo } from 'react';
import { Calendar } from './calendar';
import { CalendarDay } from './calendar-day';
import { displayDay, isCurrentMonth } from './date-helpers';
import { useCalendarMonth } from './use-calendar-month';
import { useDatepickerRange } from './use-datepicker-range';
import { useSet } from './use-set';

type Props = Parameters<typeof useDatepickerRange>[0];

const checkInRange = (target: number, range: number[]): boolean => {
  const [min = 0, max = 0] = range;

  return target >= min && target <= max;
};

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
    nextSelected,
    handleClick,
  } = useDatepickerRange(props);

  const nextSelectedSet = useSet(nextSelected);

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
          isSelected={nextSelectedSet.has(dayTimestamp)}
          inRange={checkInRange(dayTimestamp, nextSelected)}
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
