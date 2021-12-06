export const isCurrentMonth = (monthTimestamp: number, dayTimestamp: number): boolean => {
  const monthDate = new Date(monthTimestamp);
  const date = new Date(dayTimestamp);
  return monthDate.getMonth() === date.getMonth();
};

export const startOfDay = (dayTimestamp: number): number => {
  const date = new Date(dayTimestamp);
  return date.setHours(0, 0, 0, 0);
};

export const displayDay = (timestamp: number): string => {
  const date = new Date(timestamp);
  return `0${date.getDate()}`.slice(-2);
};
