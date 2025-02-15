import { format } from "date-fns";

import { convertDistance } from "../../utils/convertDistance";
import { convertSpeed } from "../../utils/convertSpeed";

import classes from "./SingleDetailedWeather.module.css";
import DropIcon from "../icons/weather-icons/drop-icon";
import EyeIcon from "../icons/weather-icons/eye-icon";
import GaugeIcon from "../icons/weather-icons/gauge-icon";
import SunriseIcon from "../icons/weather-icons/sunrise-icon";
import SunsetIcon from "../icons/weather-icons/sunset-icon";
import WindIcon from "../icons/weather-icons/wind-icon";

interface SingleDetailedWeatherProps {
  information: string;
  visibility?: number;
  humidity?: number;
  windSpeed?: number;
  airPressure?: number;
  sunrise?: number;
  sunset?: number;
  iconColor?: string;
}

export default function SingleDetailedWeather({
  information,
  visibility,
  humidity,
  windSpeed,
  airPressure,
  sunrise,
  sunset,
  iconColor,
}: SingleDetailedWeatherProps) {
  const renderDetailedWeatherIcon = () => {
    switch (information) {
      case "visibility":
        return <EyeIcon color={iconColor ? iconColor : "white"} />;
      case "humidity":
        return <DropIcon color={iconColor ? iconColor : "white"} />;
      case "wind speed":
        return <WindIcon color={iconColor ? iconColor : "white"} />;
      case "air pressure":
        return <GaugeIcon color={iconColor ? iconColor : "white"} />;
      case "sunrise":
        return <SunriseIcon color={iconColor ? iconColor : "white"} />;
      case "sunset":
        return <SunsetIcon color={iconColor ? iconColor : "white"} />;
      default:
        return <div />;
    }
  };

  const renderDetailedWeatherValue = () => {
    switch (information) {
      case "visibility":
        return `${visibility && convertDistance(visibility)}km`;
      case "humidity":
        return `${humidity}%`;
      case "wind speed":
        return `${windSpeed && convertSpeed(windSpeed)}km/h`;
      case "air pressure":
        return `${airPressure}hPa`;
      case "sunrise":
        return `${sunrise && format(sunrise, "H:mm")}`;
      case "sunset":
        return `${sunset && format(sunset, "H:mm")}`;
      default:
        return null;
    }
  };

  return (
    <div className={classes.container}>
      <p style={{ color: `${iconColor ? iconColor : "white"}` }}>
        {information}
      </p>
      <div>{renderDetailedWeatherIcon()}</div>
      <p style={{ color: `${iconColor ? iconColor : "white"}` }}>
        {renderDetailedWeatherValue()}
      </p>
    </div>
  );
}
