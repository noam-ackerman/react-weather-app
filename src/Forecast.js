import React, { useState, useEffect } from "react";
import DayForecast from "./DayForecast";
import axios from "axios";

import "./Forecast.css";
import { cleanup } from "@testing-library/react";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row forecastSection">
        {forecastData.map(function (daily, index) {
          if (index < 6) {
            return (
              <div className="col" key={index}>
                <DayForecast data={daily} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let apiKey = "b5a3097ed58959eb47ee948058cf6636";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
