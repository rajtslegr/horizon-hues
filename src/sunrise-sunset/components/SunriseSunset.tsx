import { useState } from 'react';

import Button from '@button/components/Button';
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
    <div className="flex flex-col items-center justify-center space-y-4">
      <Button onClick={() => setGeolocationOptIn(true)}>geolocation</Button>
      <input
        type="date"
        value={date}
        onChange={(event) => {
          setDate(event.target.value);
          refetch();
        }}
      />
      <input
        type="checkbox"
        checked={isTwentyFourHour}
        onChange={() => setIsTwentyFourHour(!isTwentyFourHour)}
      />
      <label htmlFor="isTwentyFourHour">24-hour</label>
      {data && (
        <div>
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
