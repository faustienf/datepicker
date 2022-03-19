import React, {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
} from 'react';
import { lastDateOfMonth } from '../utils';
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
    isCurrentMonth = true,
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
    <div
      className="calendar-day"
      data-day={date.getDay()}
      data-first-date={date.getDate() === 1}
      data-last-date={lastDateOfMonth(dayTimestamp) === date.getDate()}
      data-highlighted-mode={highlightedMode}
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
    </div>
  );
};

const CalendarDayMemo = memo(CalendarDay);
export { CalendarDayMemo as CalendarDay };
