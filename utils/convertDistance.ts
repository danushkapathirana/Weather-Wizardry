// m to km distance converter
export function convertDistance(distanceInMeters: number): number {
  const distanceInKilometers = Number((distanceInMeters / 1000).toFixed(0));
  return distanceInKilometers;
}
