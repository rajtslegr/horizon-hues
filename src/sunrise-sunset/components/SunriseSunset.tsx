import { useState } from 'react';

import Button from '@button/components/Button';
import { MapPinIcon } from '@heroicons/react/24/solid';
import useSunriseSunset from '@sunrise-sunset/hooks/useSunriseSunset';
import { timeFactory } from '@sunrise-sunset/utils/FormatDate';
import { format } from 'date-fns';
import useGeolocation from 'react-hook-geolocation';

const SunriseSunset = () => {
  const [geolocationOptIn, setGeolocationOptIn] = useState(false);
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [isTwentyFourHour, setIsTwentyFourHour] = useState(false);
  const { latitude, longitude } = useGeolocation(
    undefined,
    undefined,
    geolocationOptIn,
  );
  const { data, isLoading, refetch } = useSunriseSunset(
    { latitude, longitude, date },
    !!latitude && !!longitude && !!date,
  );

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-8 text-neutral-300">
      <Button
        aria-label="Geolocation button"
        onClick={() => setGeolocationOptIn(true)}
      >
        <MapPinIcon className="h-6 w-6" />
      </Button>
      <input
        className="rounded-lg border-black bg-neutral-700 p-2 text-neutral-300"
        type="date"
        value={date}
        onChange={(event) => {
          setDate(event.target.value);
          refetch();
        }}
      />
      <div className="flex space-x-2">
        <input
          type="checkbox"
          checked={isTwentyFourHour}
          onChange={() => setIsTwentyFourHour(!isTwentyFourHour)}
        />
        <label htmlFor="isTwentyFourHour">24-hour</label>
      </div>

      {data && (
        <div className="flex space-x-4 uppercase">
          <p>
            Sunrise:{' '}
            {timeFactory(date, data?.results.sunrise, isTwentyFourHour)}
          </p>
          <p>
            Sunrise: {timeFactory(date, data?.results.sunset, isTwentyFourHour)}
          </p>
        </div>
      )}
      {isLoading && <p>loading...</p>}
    </div>
  );
};

export default SunriseSunset;
