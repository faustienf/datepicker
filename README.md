[<img src="https://raw.githubusercontent.com/faustienf/datepicker/main/public/datepicker-range.png" width="600">](https://faustienf.github.io/datepicker/?path=/story/datepicker-range--default)
# ⚛️ Modular DatePicker WIP!!!

Make your DatePicker from calendar-components [Demo](https://faustienf.github.io/datepicker/?path=/story/datepicker-range--default)

## Usage

Simple datepicker
```js
<Calendar monthTimestamp={Date.now()}>
  {(dayTimestamp) => (
    <CalendarDay
      key={String(dayTimestamp)}
      dayTimestamp={dayTimestamp}
      onClick={onSelect}
    >
      {(new Date(dayTimestamp)).getDate()}
    </CalendarDay>
  )}
</Calendar>
```

## License
MIT