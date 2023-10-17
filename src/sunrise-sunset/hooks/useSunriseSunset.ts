import { Config } from '@config/Config';
import { fetchFactory } from '@fetch/FetchFactory';
import { SunriseSunset } from '@sunrise-sunset/types/types';
import { useQuery } from '@tanstack/react-query';

interface QueryOptions {
  latitude: number;
  longitude: number;
  date: string;
}

const fetchSunriseSunset = async ({
  latitude,
  longitude,
  date,
}: QueryOptions) =>
  fetchFactory<SunriseSunset>(
    `${Config.baseUrl}lat=${latitude}&lng=${longitude}&timezone=Europe/Prague&date=${date}`,
  );

const useSunriseSunset = (
  { latitude, longitude, date }: QueryOptions,
  enabled: boolean,
) =>
  useQuery<SunriseSunset>({
    queryKey: [`sunrise-sunset-${latitude}-${longitude}-${date}`],
    queryFn: () => fetchSunriseSunset({ latitude, longitude, date }),
    enabled,
  });

export default useSunriseSunset;
