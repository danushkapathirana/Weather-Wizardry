export interface CurrentWeatherDataType {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: CoordinatesType;
  dt: number;
  id: number;
  main: MainWeatherType;
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: WeatherDescriptionType[];
  wind: WindType;
}

export interface ForecastWeatherDataType {
  city: {
    coord: CoordinatesType;
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: ForecastWeatherListType[];
}

// common types
export interface CoordinatesType {
  lat: number;
  lon: number;
}

export interface MainWeatherType {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

export interface WeatherDescriptionType {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WindType {
  deg: number;
  gust: number;
  speed: number;
}

export interface ForecastWeatherListType {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  main: MainWeatherType;
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: WeatherDescriptionType[];
  wind: WindType;
  message: number;
}
