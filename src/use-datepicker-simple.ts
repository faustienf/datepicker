import { useCallback, useMemo } from 'react';

import { Value } from './types';

type Props = {
  value?: Value;
  onClick?: (dayTimestamp: number) => void;
  onChange: (nextValue: Value) => void;
};

const startOfDay = (dayTimestamp: number): number => {
  const date = new Date(dayTimestamp);
  date.setHours(0, 0, 0, 0);
  return date.getTime();
};

export const useDatepickerSimple = ({ value, onClick, onChange }: Props) => {
  const selectedDays = useMemo(
    () => ({
      [value ? startOfDay(value.from) : 0]: true,
    }),
    [value],
  );

  const handleClick = useCallback(
    (dayTimestamp: number) => {
      if (onClick) {
        onClick(dayTimestamp);
      }

      onChange({
        from: dayTimestamp,
        to: dayTimestamp,
      });
    },
    [onChange, onClick],
  );

  return {
    selectedDays,
    handleClick,
  };
};
