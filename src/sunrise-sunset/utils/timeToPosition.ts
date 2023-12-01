export const timeToPosition = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return ((hours + minutes / 60) / 24) * 100; // Convert to percentage of the day
};
