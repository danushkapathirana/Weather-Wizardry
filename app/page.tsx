"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import { fetchCurrentWeatherInfo } from "../api/fetchCurrentWeatherInfo";
import { fetchForecastWeatherInfo } from "../api/fetchForecastWeatherInfo";
import {
  CurrentWeatherDataType,
  ForecastWeatherDataType,
} from "../helpers/types";

import "./globals.css";

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
    </div>
  );
}
