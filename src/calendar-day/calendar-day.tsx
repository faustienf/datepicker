import React, {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
} from 'react';
import { Timestamp } from '../types';
import './calendar-day.css';

type Props = {
  inRange?: boolean;
  isCurrentMonth?: boolean;
  isSelected?: boolean;
  isHighlighted?: boolean;
  dayTimestamp: Timestamp;
  onClick: (dayTimestamp: Timestamp) => void;
  onPointerEnter?: (dayTimestamp: Timestamp) => void;
  onPointerLeave?: (dayTimestamp: Timestamp) => void;
};

const CalendarDay: FC<PropsWithChildren<Props>> = (props) => {
  const {
    children,
    inRange = false,
    isCurrentMonth = false,
    isSelected = false,
    isHighlighted = false,
    dayTimestamp,
    onClick,
    onPointerEnter,
    onPointerLeave,
  } = props;

  const now = new Date();
  const date = new Date(dayTimestamp);
  const isToday = date.toDateString() === now.toDateString();

  const handleClick = useCallback(
    () => {
      onClick(dayTimestamp);
    },
    [onClick, dayTimestamp],
  );

  const handlePointerEnter = useCallback(
    () => {
      if (onPointerEnter) {
        onPointerEnter(dayTimestamp);
      }
    },
    [onPointerEnter, dayTimestamp],
  );

  const handlePointerLeave = useCallback(
    () => {
      if (onPointerLeave) {
        onPointerLeave(dayTimestamp);
      }
    },
    [onPointerLeave, dayTimestamp],
  );

  return (
    <td
      className="calendar-day"
      data-in-range={inRange}
      data-selected={isSelected}
      data-highlighted={isHighlighted}
    >
      <button
        type="button"
        className="calendar-day-button"
        data-today={isToday}
        data-selected={isSelected}
        data-current-month={isCurrentMonth}
        onClick={handleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        {children}
      </button>
    </td>
  );
};

const CalendarDayMemo = memo(CalendarDay);
export { CalendarDayMemo as CalendarDay };
