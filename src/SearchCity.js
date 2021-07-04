import React, { useState } from "react";
import WeatherSection from "./WeatherSection";
import axios from "axios";

import "./SearchCity.css";

export default function SearchCity() {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  let SearchEngine = (
    <div className="SearchEngine">
      <form>
        <input
          type="search"
          placeholder="Type a City..."
          autoComplete="off"
          className="cityInput"
          id="city-input"
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    </div>
  );

  if (weatherData.ready) {
    return (
      <div className="SearchAndDisplay">
        {SearchEngine}
        <WeatherSection data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "b5a3097ed58959eb47ee948058cf6636";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="load">
      {SearchEngine}
      <div className="loading">Loading...</div>
    </div>
  );
}
