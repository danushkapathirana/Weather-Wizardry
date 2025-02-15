"use client";

import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";

import Navbar from "../components/navbar";
import Container from "../components/ui/container";
import DetailedWeather from "../components/weather/DetailedWeather";
import { fetchCurrentWeatherInfo } from "../api/fetchCurrentWeatherInfo";
import { fetchForecastWeatherInfo } from "../api/fetchForecastWeatherInfo";
import {
  CurrentWeatherDataType,
  ForecastWeatherDataType,
} from "../helpers/types";
import { getDayOrNightIcon } from "../utils/getDayOrNightIcon";
import { convertTemperature } from "../utils/convertTemperature";

import "./globals.css";
import classes from "./index.module.css";
import ArrowUpIcon from "../components/icons/arrow-up-icon";
import ArrowDownIcon from "../components/icons/arrow-down-icon";
import WeatherIcon from "../components/icons/weather-icons/weather-icon";

export default function Page() {
  const [searchPlace, setSearchPlace] = useState<string | null>(null);
  const [currentGeoPosition, setCurrentGeoPosition] = useState<
    GeolocationPosition | undefined
  >(undefined);
  const [currentWeatherInfo, setCurrentWeatherInfo] =
    useState<CurrentWeatherDataType>();
  const [forecastWeatherInfo, setForecastWeatherInfo] =
    useState<ForecastWeatherDataType>();

  // get geo coordinates
  const getGeoCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentGeoPosition(position);
      });
    }
  };

  // fetch current weather info
  const fetchCurrentWeatherData = async () => {
    if (currentGeoPosition !== undefined || searchPlace !== null) {
      const coordinates = currentGeoPosition
        ? {
            latitude: String(currentGeoPosition.coords.latitude),
            longitude: String(currentGeoPosition.coords.longitude),
          }
        : undefined;
      const response = await fetchCurrentWeatherInfo(coordinates, searchPlace);
      const data: CurrentWeatherDataType = await response?.json();
      setCurrentWeatherInfo(data);
      return data;
    }
  };

  // fetch forecast weather info
  const fetchForecastWeatherData = async () => {
    if (currentGeoPosition !== undefined || searchPlace !== null) {
      const coordinates = currentGeoPosition
        ? {
            latitude: String(currentGeoPosition.coords.latitude),
            longitude: String(currentGeoPosition.coords.longitude),
          }
        : undefined;
      const response = await fetchForecastWeatherInfo(coordinates, searchPlace);
      const data: ForecastWeatherDataType = await response?.json();
      setForecastWeatherInfo(data);
      return data;
    }
  };

  useEffect(() => {
    getGeoCoordinates();
  }, []);

  useEffect(() => {
    fetchCurrentWeatherData();
  }, [currentGeoPosition, searchPlace]);

  useEffect(() => {
    fetchForecastWeatherData();
  }, [currentGeoPosition, searchPlace]);

  return (
    <div>
      <Navbar
        onSearchValueSubmit={(value) => {
          setCurrentGeoPosition(undefined);
          setSearchPlace(value);
        }}
        onSelectCurrentLocation={() => {
          setSearchPlace(null);
          getGeoCoordinates();
        }}
        location={currentWeatherInfo ? currentWeatherInfo.name : ""}
      />
      <main className={classes.main}>
        <div className={classes.content}>
          <div className={classes.date}>
            <p>
              {forecastWeatherInfo &&
                format(
                  parseISO(forecastWeatherInfo.list[0].dt_txt),
                  "dd.MM.yyyy"
                )}
            </p>
            <p>
              {forecastWeatherInfo &&
                format(parseISO(forecastWeatherInfo.list[0].dt_txt), "EEEE")}
            </p>
          </div>
          <Container classNames={classes.current_date_weather__container}>
            <div className={classes.current_date__temperature}>
              <p>
                {currentWeatherInfo &&
                  convertTemperature(currentWeatherInfo.main.temp)}
                °
              </p>
              <p>
                <span>Feels like </span>
                <span>
                  {currentWeatherInfo &&
                    convertTemperature(currentWeatherInfo.main.feels_like)}
                  °
                </span>
              </p>
              <p>
                <span>
                  {currentWeatherInfo &&
                    convertTemperature(currentWeatherInfo.main.temp_max)}
                  °
                  <ArrowUpIcon width="12px" height="12px" />
                </span>
                <span>
                  {currentWeatherInfo &&
                    convertTemperature(currentWeatherInfo.main.temp_min)}
                  °
                  <ArrowDownIcon width="12px" height="12px" />
                </span>
              </p>
            </div>
            <div className={classes.current_date__forecast}>
              {forecastWeatherInfo?.list.map((item, index) => (
                <div
                  key={index}
                  className={classes.current_date__forecast_details}
                >
                  <p>{format(parseISO(item.dt_txt), "h:mm a")}</p>
                  <div>
                    <WeatherIcon
                      width={75}
                      height={75}
                      iconName={getDayOrNightIcon(
                        item.weather[0].icon,
                        item.dt_txt
                      )}
                    />
                  </div>
                  <p>{convertTemperature(item.main.temp)}°</p>
                </div>
              ))}
            </div>
          </Container>
          <div className={classes.current_date_detailed_weather__wrapper}>
            <Container classNames={classes.cd_dw_clouds_desc__container}>
              <p>{forecastWeatherInfo?.list[0].weather[0].description}</p>
              <WeatherIcon
                width={75}
                height={75}
                iconName={
                  forecastWeatherInfo
                    ? getDayOrNightIcon(
                        forecastWeatherInfo.list[0].weather[0].icon,
                        forecastWeatherInfo.list[0].dt_txt
                      )
                    : ""
                }
              />
            </Container>
            <Container classNames={classes.cd_dw_forecast__container}>
              <DetailedWeather
                visibility={currentWeatherInfo?.visibility}
                humidity={currentWeatherInfo?.main.humidity}
                windSpeed={currentWeatherInfo?.wind.speed}
                airPressure={currentWeatherInfo?.main.pressure}
                sunrise={currentWeatherInfo?.sys.sunrise}
                sunset={currentWeatherInfo?.sys.sunset}
              />
            </Container>
          </div>
        </div>
      </main>
    </div>
  );
}
