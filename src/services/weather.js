import { apiURL } from "../utils";

async function getWeatherLocation(position) {
  const response = await fetch(
    `${apiURL}/weather?lat=${position.latitude}&lon=${
      position.longitude
    }&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  );

  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}

export { getWeatherLocation };
