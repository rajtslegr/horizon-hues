import { roundFloat } from './roundFloat';

// write a tests for roundFloat, write more tests cases for different floats and decimalPlaces every time
describe('roundFloat', () => {
  it('should round float to 2 decimal places', () => {
    const float = 1.23456789;
    const decimalPlaces = 2;
    const roundedFloat = roundFloat(float, decimalPlaces);

    expect(roundedFloat).toEqual(1.23);
  });

  it('should round float to 3 decimal places', () => {
    const float = 1.23456789;
    const decimalPlaces = 3;
    const roundedFloat = roundFloat(float, decimalPlaces);

    expect(roundedFloat).toEqual(1.235);
  });
});
