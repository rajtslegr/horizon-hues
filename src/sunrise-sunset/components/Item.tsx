interface TimeProps {
  type: 'sunrise' | 'sunset' | 'location';
  time: string;
}

const Item = ({ type, time }: TimeProps) => (
  <div className="flex min-w-[80px] flex-col md:min-w-[120px]">
    <span className="text-xs uppercase lg:text-base">{type}</span>
    <span className="text-base font-semibold lg:text-xl">{time}</span>
  </div>
);

export default Item;
