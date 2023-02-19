import { Config } from '@config/Config';
import { fetchFactory } from '@fetch/FetchFactory';
import { SunriseSunset } from '@sunrise-sunset/types/types';
import { useQuery } from '@tanstack/react-query';

interface QueryOptions {
  latitude: number;
  longitude: number;
}

const fetchSunriseSunset = async ({ latitude, longitude }: QueryOptions) =>
  fetchFactory<SunriseSunset>(
    `${Config.baseUrl}lat=${latitude}&lng=${longitude}&timezone=Europe/Prague&date=today`,
  );

const useSunriseSunset = (
  { latitude, longitude }: QueryOptions,
  enabled: boolean,
) =>
  useQuery<SunriseSunset>(
    ['sunrise-sunset'],
    () => fetchSunriseSunset({ latitude, longitude }),
    { enabled },
  );

export default useSunriseSunset;
