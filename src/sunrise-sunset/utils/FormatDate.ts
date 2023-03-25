import { format } from 'date-fns';

export const timeFactory = (
  date: string,
  time: string,
  isTwentyFourHour: boolean,
) =>
  format(new Date(`${date} ${time}`), isTwentyFourHour ? 'HH:mm' : 'hh:mm a');
