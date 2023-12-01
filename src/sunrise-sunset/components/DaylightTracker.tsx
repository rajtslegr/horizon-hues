import { timeToPosition } from '@sunrise-sunset/utils/timeToPosition';
import clsx from 'clsx';

interface DaylightTrackerProps {
  sunrise: string;
  sunset: string;
}

const DaylightTracker = ({ sunrise, sunset }: DaylightTrackerProps) => {
  const sunrisePosition = timeToPosition(sunrise);
  const sunsetPosition = timeToPosition(sunset);

  const hourLines = Array.from({ length: 25 }).map((_, index) => {
    const isLabelHour = index % 6 === 0;

    return (
      <div
        key={index}
        className={clsx(
          'absolute bottom-0 h-full w-px',
          [0, 24].includes(index) ? 'bg-transparent' : 'bg-gray-600',
        )}
        style={{
          left: `${(index / 24) * 100}%`,
        }}
      >
        {isLabelHour && (
          <span className="absolute -bottom-5 -left-1 text-xs text-white">
            {index}
          </span>
        )}
      </div>
    );
  });

  return (
    <div className="relative h-16 w-full rounded-xl bg-black">
      <div
        className="absolute h-full bg-gray-400"
        style={{
          left: `${sunrisePosition}%`,
          right: `${100 - sunsetPosition}%`,
        }}
      />
      {hourLines}
    </div>
  );
};

export default DaylightTracker;
