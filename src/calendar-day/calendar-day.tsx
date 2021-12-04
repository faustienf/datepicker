import React, {
  FC,
  memo,
  PropsWithChildren,
} from 'react';
import './calendar-day.css';

type Props = {
  isCurrentMonth?: boolean;
  isSelected?: boolean;
  dayTimestamp: number;
  onClick: (dayTimestamp: number) => void;
};

const CalendarDay: FC<PropsWithChildren<Props>> = (props) => {
  const {
    children,
    isCurrentMonth = false,
    isSelected = false,
    dayTimestamp,
    onClick,
  } = props;

  const now = new Date();
  const date = new Date(dayTimestamp);
  const isToday = date.toDateString() === now.toDateString();

  return (
    <td className="calendar-day">
      <button
        type="button"
        className="calendar-day-button"
        data-today={isToday}
        data-selected={isSelected}
        data-current-month={isCurrentMonth}
        onClick={() => onClick(dayTimestamp)}
      >
        {children}
      </button>
    </td>
  );
};

const CalendarDayMemo = memo(CalendarDay);
export { CalendarDayMemo as CalendarDay };
