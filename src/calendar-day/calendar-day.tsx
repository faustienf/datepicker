import React, {
  FC,
  memo,
  PropsWithChildren,
} from 'react';
import './calendar-day.css';

type Props = {
  inRange?: boolean;
  isCurrentMonth?: boolean;
  isSelected?: boolean;
  isFocused?: boolean;
  dayTimestamp: number;
  onClick: (dayTimestamp: number) => void;
};

const CalendarDay: FC<PropsWithChildren<Props>> = (props) => {
  const {
    children,
    inRange = false,
    isCurrentMonth = false,
    isSelected = false,
    isFocused = false,
    dayTimestamp,
    onClick,
  } = props;

  const now = new Date();
  const date = new Date(dayTimestamp);
  const isToday = date.toDateString() === now.toDateString();

  return (
    <td
      className="calendar-day"
      data-in-range={inRange}
      data-selected={isSelected}
    >
      <button
        type="button"
        className="calendar-day-button"
        tabIndex={isToday ? 0 : -1}
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
