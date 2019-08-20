/** @jsx jsx */
import React from "react";
import { getWeatherLocation } from "../services/weather";
import { jsx } from "@emotion/core";
import { Title } from "../components/ui";

function Home() {
  const [weatherLocation, setWeatherLocation] = React.useState({});
  const [weather, setWeather] = React.useState({});
  const [position, setPosition] = React.useState();
  const [backgroundApp, setBackgroundApp] = React.useState("#ffffff");
  const [colorApp, setColorApp] = React.useState("#000000");

  React.useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(pos => {
      setPosition(pos.coords);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, [setPosition]);

  React.useEffect(() => {
    getWeatherLocation(position).then(weather => {
      console.log(weather);
      setWeatherLocation(weather);
      setWeather(weather.weather[0]);
    });
  }, [setWeatherLocation, setWeather, position]);

  React.useEffect(() => {
    if (weather.icon && weather.icon.endsWith("d")) {
      setBackgroundApp("#efeb3d");
      setColorApp("#1e1e30");
    } else {
      setBackgroundApp("#1e1e30");
      setColorApp("#ffffff");
    }
  }, [weather.icon]);

  const styleContainer = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    color: colorApp,
    backgroundColor: backgroundApp,
    transition: "background-color 0.5s ease"
  };

  return (
    <div css={styleContainer}>
      <Title>{weatherLocation.name}</Title>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {weather.icon && (
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            loading="lazy"
            alt="weather status"
            height="100px"
            width="100px"
          />
        )}
        <p>{weatherLocation.main && `${weatherLocation.main.temp}°`}</p>
      </div>
      <p>
        {weather.main} - {weather.description}
      </p>
    </div>
  );
}

export default Home;
