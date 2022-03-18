import {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { startOfDay } from './date-helpers';
import { Timestamp } from './types';

type Props = {
  selected?: [Timestamp, Timestamp];
  onSelect: (nextSelected: [Timestamp, Timestamp]) => void;
};

export const useDatepickerRange = ({ selected, onSelect }: Props) => {
  const [nextSelected, setNextSelected] = useState<Timestamp[]>(() => {
    if (!selected) {
      return [];
    }

    return selected
      .map(startOfDay)
      .sort();
  });

  const [highlightedDay, setHighlightedDay] = useState<Timestamp>(0);

  // cache - fix recreating handleClick by selectedState
  const selectedCountRef = useRef(nextSelected);
  selectedCountRef.current = nextSelected;

  const onClick = useCallback(
    (dayTimestamp: Timestamp) => {
      if (selectedCountRef.current.length === 1) {
        const finalNextSelected = [
          selectedCountRef.current[0],
          dayTimestamp,
        ].sort() as [Timestamp, Timestamp];

        setNextSelected(finalNextSelected);
        onSelect(finalNextSelected);
        setHighlightedDay(0);
        return;
      }

      setNextSelected([dayTimestamp]);
      setHighlightedDay(dayTimestamp);
    },
    [onSelect],
  );

  const onHighlight = useCallback(
    (dayTimestamp: Timestamp) => {
      if (nextSelected.length !== 1) {
        return;
      }

      setHighlightedDay(dayTimestamp);
    },
    [nextSelected],
  );

  const highlightedDays = useMemo(
    () => [...nextSelected, highlightedDay].slice(0, 2).sort(),
    [nextSelected, highlightedDay],
  );

  return {
    nextSelected,
    highlightedDays,
    highlightedDay,
    onClick,
    onHighlight,
  };
};
