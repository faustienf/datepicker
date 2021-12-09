import {
  useCallback, useRef, useState,
} from 'react';
import { startOfDay } from './date-helpers';

type Props = {
  selected?: [number, number];
  onSelect: (nextSelected: [number, number]) => void;
};

export const useDatepickerRange = ({ selected, onSelect }: Props) => {
  const [nextSelected, setNextSelected] = useState<number[]>(() => {
    if (!selected) {
      return [];
    }

    return selected
      .map(startOfDay)
      .sort();
  });

  // cache - fix recreating handleClick by selectedState
  const selectedCountRef = useRef(nextSelected);
  selectedCountRef.current = nextSelected;

  const handleClick = useCallback(
    (dayTimestamp: number) => {
      if (selectedCountRef.current.length === 1) {
        const finalNextSelected = [
          selectedCountRef.current[0],
          dayTimestamp,
        ].sort() as [number, number];

        setNextSelected(finalNextSelected);
        onSelect(finalNextSelected);
        return;
      }

      setNextSelected([dayTimestamp]);
    },
    [onSelect],
  );

  return {
    nextSelected,
    handleClick,
  };
};
