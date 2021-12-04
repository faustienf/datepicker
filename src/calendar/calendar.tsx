import React, { FC, memo, useMemo } from 'react';
import { CalendarWeekDays } from '../calendar-week-days';
import { CalendarDay } from '../calendar-day';
import { CalendarHeader } from '../calendar-header';
import { makeCalendar } from '../make-calendar';
import './calendar.css';

type Props = {
  selectedDays?: Partial<Record<number, boolean>>;
  monthTimestamp: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onClick: (dayTimestamp: number) => void;
}

const isCurrentMonth = (monthTimestamp: number, dayTimestamp: number) => {
  const monthDate = new Date(monthTimestamp);
  const date = new Date(dayTimestamp);
  return monthDate.getMonth() === date.getMonth();
};

const displayDay = (timestamp: number): string => {
  const date = new Date(timestamp);
  return `0${date.getDate()}`.slice(-2);
};

const Calendar: FC<Props> = (props) => {
  const {
    selectedDays = {},
    monthTimestamp,
    onPrevMonth,
    onNextMonth,
    onClick,
  } = props;

  const calendar = useMemo(
    () => makeCalendar(monthTimestamp),
    [monthTimestamp],
  );

  return (
    <div className="calendar">
      <CalendarHeader
        monthTimestamp={monthTimestamp}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />
      <table className="calendar-table">
        <thead>
          <CalendarWeekDays />
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={String(index)}>
              {week.map((dayTimestamp) => (
                <CalendarDay
                  key={String(dayTimestamp)}
                  isCurrentMonth={isCurrentMonth(monthTimestamp, dayTimestamp)}
                  isSelected={selectedDays[dayTimestamp]}
                  dayTimestamp={dayTimestamp}
                  onClick={onClick}
                >
                  {displayDay(dayTimestamp)}
                </CalendarDay>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CalendarMemo = memo(Calendar);
export { CalendarMemo as Calendar };
