import { useCallback, useMemo, useState } from 'react';

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

export const useDatepickerRange = ({ value, onClick, onChange }: Props) => {
  const [selectedDays, setSelectedDays] = useState(value ? Object.values(value).sort() : []);

  const handleClick = useCallback(
    (dayTimestamp: number) => {
      if (onClick) {
        onClick(dayTimestamp);
      }

      const selectedDaysArray = Object
        .keys(selectedDays)
        .filter(Boolean)
        .sort();

      if (selectedDaysArray.length) {
        onChange({
          from: dayTimestamp,
          to: dayTimestamp,
        });
        return;
      }

      setSelectedDays((state) => ({
        ...state,
        [dayTimestamp]: true,
      }));
    },
    [onChange, onClick],
  );

  return {
    selectedDays,
    handleClick,
  };
};
