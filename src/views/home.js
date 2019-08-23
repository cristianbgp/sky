/** @jsx jsx */
import React from "react";
import { getWeatherLocation } from "../services/weather";
import { jsx } from "@emotion/core";
import { Title, MapPin } from "../components/ui";

const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

function Home() {
  const [weatherLocation, setWeatherLocation] = React.useState({});
  const [weather, setWeather] = React.useState({});
  const [position, setPosition] = React.useState({ latitude: 0, longitude: 0 });
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

  if (position.latitude === 0)
    return (
      <div
        css={{
          ...styleContainer,
          justifyContent: "center",
          backgroundColor: "#ffffff",
          color: "#000000"
        }}
      >
        <MapPin css={{ margin: "1em" }} />
        <p css={{ fontSize: "0.8em" }}>Please allow location access</p>
      </div>
    );

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
        {weather.icon && isChrome ? (
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            loading="lazy"
            alt="weather status"
            height="100px"
            width="100px"
          />
        ) : (
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
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
