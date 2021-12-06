import React, {
  FC, memo, useMemo, ReactNode,
} from 'react';
import { CalendarWeekDays } from '../calendar-week-days';
import { CalendarHeader } from '../calendar-header';
import { makeCalendar } from '../make-calendar';
import './calendar.css';

type Props = {
  monthTimestamp: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  children: (dayTimestamp: number) => ReactNode;
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
    children,
    monthTimestamp,
    onPrevMonth,
    onNextMonth,
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
              {week.map(children)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CalendarMemo = memo(Calendar);
export { CalendarMemo as Calendar };
