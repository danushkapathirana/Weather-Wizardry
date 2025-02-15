import { API_KEY, API_URL } from "../constants/api";

export const fetchForecastWeatherInfo = async (
  coordinates?: {
    latitude: string;
    longitude: string;
  },
  searchPlace?: string | null
) => {
  let url = `${API_URL}forecast?`;

  if (coordinates) {
    url += `lat=${coordinates?.latitude}&lon=${coordinates?.longitude}&appid=${API_KEY}`;
  }

  if (searchPlace) {
    url += `q=${searchPlace}&appid=${API_KEY}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};
