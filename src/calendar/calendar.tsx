import React, {
  FC, memo, useMemo, ReactNode,
} from 'react';
import { CalendarWeekDays } from '../calendar-week-days';
import { CalendarHeader } from '../calendar-header';
import { makeCalendar } from '../make-calendar';
import { Timestamp } from '../types';
import './calendar.css';

type Props = {
  monthTimestamp: Timestamp;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  children: (dayTimestamp: Timestamp) => ReactNode;
}

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
              {week.map((day) => (
                <td
                  key={day}
                  className="calendar-table-cell"
                >
                  {children(day)}
                </td>
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
