interface DatePickerProps {
  date: string;
  handleDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker = ({ date, handleDateChange }: DatePickerProps) => (
  <input
    className="rounded-lg border-black bg-neutral-700 px-4 pt-[11px] text-neutral-300"
    type="date"
    value={date}
    onChange={handleDateChange}
  />
);

export default DatePicker;
