import React, { useState, useEffect } from "react";
import DayForecast from "./DayForecast";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.daily);
    setLoaded(true);
  }

  useEffect(() => {
    let apiKey = "b5a3097ed58959eb47ee948058cf6636";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(apiUrl).then(resp => {return resp.json()}).then(data => {handleResponse(data)})
    return () => {setLoaded(false);}
  }, [props.coords]);

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
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
