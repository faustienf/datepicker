import {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { startOfDay } from './date-helpers';

type Props = {
  selected?: [number, number];
  onSelect: (nextSelected: [number, number]) => void;
};

export const useDatepickerRange = ({ selected, onSelect }: Props) => {
  const [selectedState, setSelectedState] = useState<number[]>(() => {
    if (!selected) {
      return [];
    }

    return selected
      .map(startOfDay)
      .sort();
  });

  // cache, fix recreating handleClick by selectedState
  const selectedCountRef = useRef(selectedState);
  selectedCountRef.current = selectedState;

  const handleClick = useCallback(
    (dayTimestamp: number) => {
      if (selectedCountRef.current.length === 1) {
        const nextSelected = [selectedCountRef.current[0], dayTimestamp].sort() as [number, number];
        setSelectedState(nextSelected);
        onSelect(nextSelected);
        return;
      }

      setSelectedState([dayTimestamp]);
    },
    [onSelect],
  );

  const selectedSet = useMemo(
    () => new Set(selectedState),
    [selectedState],
  );

  return {
    selectedSet,
    handleClick,
  };
};
