import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

const startOfMonth = (monthTimestamp: number): number => {
  const date = new Date(monthTimestamp);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date.getTime();
};

const getNextMonthTimestamp = (monthTimestamp: number): number => {
  const currentDate = new Date(monthTimestamp);
  const nextDate = new Date(monthTimestamp);
  nextDate.setDate(1);
  nextDate.setHours(0, 0, 0, 0);
  nextDate.setMonth(currentDate.getMonth() + 1);

  return nextDate.getTime();
};

const getPrevMonthTimestamp = (monthTimestamp: number): number => {
  const currentDate = new Date(monthTimestamp);
  const prevDate = new Date(monthTimestamp);
  prevDate.setDate(1);
  prevDate.setHours(0, 0, 0, 0);
  prevDate.setMonth(currentDate.getMonth() - 1);

  return prevDate.getTime();
};

export const useCalendarMonth = (timestamp: number) => {
  const monthTimestamp = useMemo(() => startOfMonth(timestamp), [timestamp]);
  const [currentMonthTimestamp, setCurrentMonthTimestamp] = useState(monthTimestamp);

  const onPrevMonth = useCallback(() => {
    setCurrentMonthTimestamp((state) => getPrevMonthTimestamp(state));
  }, []);

  const onNextMonth = useCallback(() => {
    setCurrentMonthTimestamp((state) => getNextMonthTimestamp(state));
  }, []);

  useEffect(
    () => {
      setCurrentMonthTimestamp(monthTimestamp);
    },
    [monthTimestamp],
  );

  return {
    currentMonthTimestamp,
    prevMonthTimestamp: getPrevMonthTimestamp(currentMonthTimestamp),
    nextMonthTimestamp: getNextMonthTimestamp(currentMonthTimestamp),
    onPrevMonth,
    onNextMonth,
  };
};
