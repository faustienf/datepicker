import { Timestamp } from './types';

export const isCurrentMonth = (monthTimestamp: Timestamp, dayTimestamp: Timestamp): boolean => {
  const monthDate = new Date(monthTimestamp);
  const date = new Date(dayTimestamp);
  return monthDate.getMonth() === date.getMonth();
};

export const startOfDay = (dayTimestamp: Timestamp): Timestamp => {
  const date = new Date(dayTimestamp);
  return date.setHours(0, 0, 0, 0);
};

export const displayDay = (timestamp: Timestamp): string => {
  const date = new Date(timestamp);
  return `0${date.getDate()}`.slice(-2);
};

export const checkInRange = (target: number, range: number[]): boolean => {
  const [min = 0, max = 0] = range;

  return target >= min && target <= max;
};
