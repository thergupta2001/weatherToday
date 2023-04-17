import React, { Component, useState } from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/currentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import Forecast from "./forecast/forecast";

function App() {
  const [current_weather, setcurrentweather] = useState(null);
  const [foreCast, setforeCast] = useState(null);

  const handleonSearchChange = (searchData) => {
    // console.log(searchData)

    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setcurrentweather({city: searchData.label, ...weatherResponse});
        setforeCast({city: searchData.label, ...forecastResponse});
      })
      .catch((err) => console.log(err));
  }

  console.log(current_weather);
  console.log(foreCast);

  return (
    <div className="container">
      {current_weather && <CurrentWeather data={current_weather}/>}
      <Search onSearchChange={handleonSearchChange}/>
      {/* {foreCast && <Forecast data={foreCast}/>} */}
    </div>
  );
}

export default App;
