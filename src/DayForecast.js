import React from "react";

import "./Forecast.css";

export default function DayForecast(props) {
  return (
    <div className="col-2">
      <div className="day">{props.day}</div>
      <img src={props.icon} alt="partlySunny" className="forecastIcon" />
      <div className="forecastTemp">
        <span className="maxTemp">{props.maxTemp}°</span>
        <span className="minTemp"> {props.minTemp}°</span>
      </div>
    </div>
  );
}
