import SingleDetailedWeather from "./SingleDetailedWeather";

import { DETAILED_WEATHER_ITEMS } from "../../constants/weather";

import classes from "./DetailedWeather.module.css";

interface DetailedWeatherProps {
  visibility?: number;
  humidity?: number;
  windSpeed?: number;
  airPressure?: number;
  sunrise?: number;
  sunset?: number;
  iconColor?: string;
}

export default function DetailedWeather({
  visibility,
  humidity,
  windSpeed,
  airPressure,
  sunrise,
  sunset,
  iconColor,
}: DetailedWeatherProps) {
  return (
    <div className={classes.container}>
      {DETAILED_WEATHER_ITEMS.map((item) => (
        <SingleDetailedWeather
          key={item}
          information={item}
          visibility={visibility}
          humidity={humidity}
          windSpeed={windSpeed}
          airPressure={airPressure}
          sunrise={sunrise}
          sunset={sunset}
          iconColor={iconColor}
        />
      ))}
    </div>
  );
}
