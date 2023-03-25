import { useState } from 'react';

import Button from '@button/components/Button';
import { MapPinIcon } from '@heroicons/react/24/solid';
import useSunriseSunset from '@sunrise-sunset/hooks/useSunriseSunset';
import { timeFactory } from '@sunrise-sunset/utils/FormatDate';
import { roundFloat } from '@sunrise-sunset/utils/RoundFloat';
import { format } from 'date-fns';
import useGeolocation from 'react-hook-geolocation';

import Item from './Item';

const SunriseSunset = () => {
  const [geolocationOptIn, setGeolocationOptIn] = useState(false);
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [isTwentyFourHour, setIsTwentyFourHour] = useState(false);
  const { latitude, longitude } = useGeolocation(
    { enableHighAccuracy: false, maximumAge: 3600 },
    undefined,
    geolocationOptIn,
  );
  const { data, isLoading, refetch } = useSunriseSunset(
    {
      latitude: roundFloat(latitude, 3),
      longitude: roundFloat(longitude, 3),
      date,
    },
    !!latitude && !!longitude && !!date,
  );

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-8 text-neutral-300">
      {data && (
        <div className="flex flex-col space-y-4 md:space-y-8">
          <Item type="location" time={data?.results.timezone} />
          <div className="flex flex-row space-x-4 md:space-x-16">
            <Item
              type="sunset"
              time={timeFactory(date, data?.results.sunset, isTwentyFourHour)}
            />
            <Item
              type="sunrise"
              time={timeFactory(date, data?.results.sunrise, isTwentyFourHour)}
            />
          </div>
        </div>
      )}
      {geolocationOptIn && isLoading && <p>loading...</p>}
      <div className="absolute bottom-12 mx-auto flex space-x-4 rounded bg-neutral-900 p-6">
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
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isTwentyFourHour}
            onChange={() => setIsTwentyFourHour(!isTwentyFourHour)}
          />
          <label htmlFor="isTwentyFourHour">24-hour</label>
        </div>
      </div>
    </div>
  );
};

export default SunriseSunset;
