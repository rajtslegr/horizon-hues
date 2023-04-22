import { useState } from 'react';

import Button from '@button/components/Button';
import { MapPinIcon } from '@heroicons/react/24/solid';
import useSunriseSunset from '@sunrise-sunset/hooks/useSunriseSunset';
import { timeFactory } from '@sunrise-sunset/utils/FormatDate';
import { roundFloat } from '@sunrise-sunset/utils/RoundFloat';
import { format } from 'date-fns';
import useGeolocation from 'react-hook-geolocation';

import DatePicker from './DatePicker';
import Item from './Item';
import TwentyFourHourCheckbox from './TwentyFourHourCheckbox';

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

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!!latitude && !!longitude) {
      setDate(event.target.value);
      refetch();
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-8 text-neutral-300">
      {!geolocationOptIn && (
        <p>Please allow access to geolocation service by clicking the icon.</p>
      )}
      {geolocationOptIn && isLoading && <p>Loading...</p>}

      {data && (
        <div className="flex flex-col space-y-4 md:space-y-8">
          <Item type="location" time={data?.results.timezone} />
          <div className="flex flex-row space-x-4 md:space-x-16">
            <Item
              type="sunrise"
              time={timeFactory(date, data?.results.sunrise, isTwentyFourHour)}
            />
            <Item
              type="sunset"
              time={timeFactory(date, data?.results.sunset, isTwentyFourHour)}
            />
          </div>
        </div>
      )}
      <div className="absolute bottom-12 mx-auto flex space-x-4 rounded bg-neutral-900 p-6">
        <Button
          aria-label="Geolocation button"
          onClick={() => setGeolocationOptIn(true)}
        >
          <MapPinIcon className="h-6 w-6" />
        </Button>
        <DatePicker date={date} handleDateChange={handleDateChange} />
        <TwentyFourHourCheckbox
          isTwentyFourHour={isTwentyFourHour}
          handleTwentyFourHourChange={() =>
            setIsTwentyFourHour(!isTwentyFourHour)
          }
        />
      </div>
    </div>
  );
};

export default SunriseSunset;
