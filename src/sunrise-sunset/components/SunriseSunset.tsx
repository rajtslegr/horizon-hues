import { useState } from 'react';

import Button from '@button/components/Button';
import useSunriseSunset from '@sunrise-sunset/hooks/useSunriseSunset';
import useGeolocation from 'react-hook-geolocation';

const SunriseSunset = () => {
  const [optInGeolocation, setOptInGeolocation] = useState(false);
  const { latitude, longitude } = useGeolocation(
    undefined,
    undefined,
    optInGeolocation,
  );
  const { data } = useSunriseSunset(
    { latitude, longitude },
    optInGeolocation && !!latitude && !!longitude,
  );

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Button onClick={() => setOptInGeolocation(true)}>geolocation</Button>
      <div>
        <p>Sunrise: {data?.results.sunrise}</p>
        <p>Sunset: {data?.results.sunset}</p>
      </div>
    </div>
  );
};

export default SunriseSunset;
