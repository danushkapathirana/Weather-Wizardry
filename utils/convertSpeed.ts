// m/s to km/h speed converter
export function convertSpeed(speedInMetersPerSecond: number): number {
  const speedInKilometersPerHour = Number(
    (speedInMetersPerSecond * 3.6).toFixed(0)
  );
  return speedInKilometersPerHour;
}
