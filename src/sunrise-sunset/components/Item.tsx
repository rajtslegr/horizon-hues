interface TimeProps {
  type: 'sunrise' | 'sunset' | 'location';
  time: string;
}

const Item = ({ type, time }: TimeProps) => (
  <div className="flex min-w-[80px] flex-col md:min-w-[120px]">
    <span className="text-2xl uppercase">{type}</span>
    <span className="text-3xl font-semibold">{time}</span>
  </div>
);

export default Item;
