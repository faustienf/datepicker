import { useMemo } from 'react';
import { makeCalendar } from './make-calendar';

export const useDatepicker = () => {
  const calendar = useMemo(
    () => {
      const date = new Date();
      const validValue = Number.isNaN(date.getDate())
        ? Date.now()
        : date.getTime();
      return makeCalendar(validValue);
    },
    [],
  );

  return {
    calendar,
  };
};
