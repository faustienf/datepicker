[<img src="https://raw.githubusercontent.com/faustienf/datepicker/main/public/datepicker-range.png" width="600">](https://faustienf.github.io/datepicker/?path=/story/datepicker-range--default)
# ⚛️ Modular DatePicker

Make your DatePicker from calendar-components 📅 [Demo](https://faustienf.github.io/datepicker/?path=/story/datepicker-range--default)

## Usage

#### Simple datepicker
```js
// write a facade-component
const DatepickerSimple: FC<Props> = (props) => {
  const {
    selected = 0 as Timestamp,
    onSelect,
  } = props;

  // use hooks for manage states, e.g. switching a month
  const {
    currentMonthTimestamp,
    onPrevMonth,
    onNextMonth,
  } = useCalendarMonth(selected || Date.now() as Timestamp);

  return (
    <Calendar
      // pass states and callbacks from logic hooks
      monthTimestamp={currentMonthTimestamp}
      onPrevMonth={onPrevMonth}
      onNextMonth={onNextMonth}
    >
      {(dayTimestamp) => (
        <CalendarDay
          // highlight the selected day
          isSelected={selected === dayTimestamp}
          // select the clicked day
          onClick={() => onSelect(dayTimestamp)}
        >
          {/* display a date */}
          {(new Date(dayTimestamp)).getDate()}
        </CalendarDay>
      )}
    </Calendar>
  );
};
```

#### Datepicker with 2 calendars
```js
const BigDatepicker: FC<Props> = () => {
  ...

  return (
    <>
      {/* 1st calendar */}
      <Calendar monthTimestamp={currentMonthTimestamp}>
        ...
      </Calendar>
      {/* 2nd calendar */}
      <Calendar monthTimestamp={nextMonthTimestamp}>
        ...
      </Calendar>
    </>
  );
};
```

## License
MIT
