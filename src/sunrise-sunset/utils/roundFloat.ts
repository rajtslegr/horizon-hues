export const roundFloat = (float: number, decimalPlaces: number) => {
  const multiplier = 10 ** decimalPlaces;
  const roundedFloat = Math.round(float * multiplier) / multiplier;

  return roundedFloat;
};
