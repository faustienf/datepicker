import React, { FC } from 'react';
import './datepicker-popup.css';

export const DatepickerPopup: FC = ({ children }) => (
  <div className="datepicker-popup">
    {children}
  </div>
);
