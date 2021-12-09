import React, { FC, useRef } from 'react';
import { useTrapFocus } from '../use-trap-focus';
import './datepicker-popup.css';

export const DatepickerPopup: FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useTrapFocus(ref);

  return (
    <div
      ref={ref}
      className="datepicker-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog1Title"
      aria-describedby="dialog1Desc"
    >
      {children}
    </div>
  );
};
