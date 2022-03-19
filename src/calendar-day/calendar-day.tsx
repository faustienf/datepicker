import React, {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
} from 'react';
import { Timestamp } from '../types';
import './calendar-day.css';

type Props = {
  isCurrentMonth?: boolean;
  isSelected?: boolean;
  highlightedMode?: 'from' | 'to' | 'middle' | null;
  dayTimestamp: Timestamp;
  onClick: (dayTimestamp: Timestamp) => void;
  onPointerEnter?: (dayTimestamp: Timestamp) => void;
  onPointerLeave?: (dayTimestamp: Timestamp) => void;
};

const CalendarDay: FC<PropsWithChildren<Props>> = (props) => {
  const {
    children,
    isCurrentMonth = false,
    isSelected = false,
    dayTimestamp,
    highlightedMode,
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
      data-selected={isSelected}
      data-highlighted-mode={highlightedMode}
    >
      <button
        type="button"
        className="calendar-day-button"
        data-today={isToday}
        data-selected={isSelected}
        data-current-month={isCurrentMonth}
        data-highlighted-mode={highlightedMode}
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
