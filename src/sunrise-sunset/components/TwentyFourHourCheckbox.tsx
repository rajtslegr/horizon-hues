interface TwentyFourHourCheckboxProps {
  isTwentyFourHour: boolean;
  handleTwentyFourHourChange: () => void;
}

const TwentyFourHourCheckbox = ({
  isTwentyFourHour,
  handleTwentyFourHourChange,
}: TwentyFourHourCheckboxProps) => (
  <div className="flex items-center space-x-2">
    <input
      className="rounded border-black bg-neutral-500 p-2 text-neutral-700"
      type="checkbox"
      checked={isTwentyFourHour}
      onChange={handleTwentyFourHourChange}
    />
    <label htmlFor="isTwentyFourHour">24-hour</label>
  </div>
);

export default TwentyFourHourCheckbox;
