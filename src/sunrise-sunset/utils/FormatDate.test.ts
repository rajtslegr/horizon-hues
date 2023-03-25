import { timeFactory } from './FormatDate';

describe('timeFactory', () => {
  it('should format time to 24 hour format', () => {
    const date = '2020-01-01';
    const time = '12:00:00';
    const isTwentyFourHour = true;
    const formattedTime = timeFactory(date, time, isTwentyFourHour);

    expect(formattedTime).toEqual('12:00');
  });

  it('should format time to 12 hour format', () => {
    const date = '2020-01-01';
    const time = '12:01:00';
    const isTwentyFourHour = false;
    const formattedTime = timeFactory(date, time, isTwentyFourHour);

    expect(formattedTime).toEqual('12:01 PM');
  });
});
