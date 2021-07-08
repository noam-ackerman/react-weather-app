import React, { useState } from "react";
import WeatherSection from "./WeatherSection";
import axios from "axios";

import "./SearchCity.css";

export default function SearchCity(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function Search() {
    const apiKey = "b5a3097ed58959eb47ee948058cf6636";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  let SearchEngine = (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a City..."
          autoComplete="off"
          className="cityInput"
          id="city-input"
          size="42"
          onChange={handleCityChange}
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
    Search();
  }
  return (
    <div className="load">
      {SearchEngine}
      <div className="loading">Loading...</div>
    </div>
  );
}
