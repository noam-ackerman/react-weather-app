import React, { useState } from "react";
import WeatherSection from "./WeatherSection";
import Forecast from "./Forecast";
import { UnitName } from "./UnitContext";
import {Oval } from 'react-loader-spinner'

import "./SearchCity.css";

export default function SearchCity(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const cityInput = React.useRef()

  function handleResponse(response) {
    if(response.cod === "404") {
      console.log(response.message);
    } else {
    setWeatherData({
      ready: true,
      city: response.name,
      temp: Math.round(response.main.temp),
      humidity: response.main.humidity,
      wind: Math.round(response.wind.speed),
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      date: response,
      coords: response.coord,
    });
   }
  }

  React.useEffect(() => {
    const apiKey = "b5a3097ed58959eb47ee948058cf6636";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl).then(resp => {return resp.json()}).then(data => {handleResponse(data)})
    return () => {
      setWeatherData({ready:false})
    }  
  }, [city])

  function handleSubmit(event) {
    event.preventDefault();
    setCity(cityInput.current.value);
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
          ref={cityInput}
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    </div>
  );

  if (weatherData.ready) {
    return (
      <UnitName>
        <div className="SearchAndDisplay">
          {SearchEngine}
          <WeatherSection data={weatherData} />
          <Forecast coords={weatherData.coords} />
        </div>
      </UnitName>
    );
  } else {
    return (
      <div className="load">
        {SearchEngine}
        <div className="loading">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      </div>
    );
  }
}
