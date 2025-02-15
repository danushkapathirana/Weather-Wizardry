// K to °C temperature converter
export function convertTemperature(temperatureInKelvin: number): number {
  return Math.floor(temperatureInKelvin - 273.15);
}
