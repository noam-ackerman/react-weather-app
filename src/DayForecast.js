import React from "react";
import Icon from "./Icon";

import "./Forecast.css";

export default function DayForecast(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <Icon icon={props.data.weather[0].icon} size={30} />
      <div className="forecastTemp">
        <span className="maxTemp">{Math.round(props.data.temp.max)}°</span>
        <span className="minTemp"> {Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
