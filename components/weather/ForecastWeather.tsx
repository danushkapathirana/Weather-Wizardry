import { format, parseISO } from "date-fns";

import DetailedWeather from "./DetailedWeather";
import { ForecastWeatherListType } from "../../helpers/types";
import { convertTemperature } from "../../utils/convertTemperature";

import classes from "./ForecastWeather.module.css";
import WeatherIcon from "../icons/weather-icons/weather-icon";

interface ForecastWeatherProps {
  data: ForecastWeatherListType;
  iconColor?: string;
}

export default function ForecastWeather({
  data,
  iconColor,
}: ForecastWeatherProps) {
  return (
    <div className={classes.container}>
      <div className={classes.weather__container}>
        <div className={classes.cloud_desc}>
          <WeatherIcon width={75} height={75} iconName={data.weather[0].icon} />
          <p>{format(parseISO(data.dt_txt), "dd.MM")}</p>
        </div>
        <div className={classes.temperature}>
          <p>{convertTemperature(data.main.temp)}°</p>
          <p>{`Feels like ${convertTemperature(data.main.feels_like)}°`}</p>
        </div>
      </div>
      <div className={classes.detailed_weather__container}>
        <DetailedWeather
          visibility={data.visibility}
          humidity={data.main.humidity}
          windSpeed={data.wind.speed}
          airPressure={data.main.pressure}
          sunrise={1739623866}
          sunset={1739623866}
          iconColor={iconColor}
        />
      </div>
    </div>
  );
}
