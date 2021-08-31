import React, { useContext } from "react";
import { UnitContext } from "./UnitContext";
import Icon from "./Icon";

import "./Forecast.css";

export default function DayForecast(props) {
  const [unit] = useContext(UnitContext);
  let celsuisMax = Math.round(props.data.temp.max);
  let celsiusMin = Math.round(props.data.temp.min);
  let fahrenheitMax = Math.round((celsuisMax * 9) / 5 + 32);
  let fahrenheitMin = Math.round((celsiusMin * 9) / 5 + 32);
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  if (unit === "celsius") {
    return (
      <div className="eachDay">
        <div className="day">{day()}</div>
        <Icon icon={props.data.weather[0].icon} size={30} />
        <div className="forecastTemp">
          <span className="maxTemp">{celsuisMax}°</span>
          <span className="minTemp"> {celsiusMin}°</span>
        </div>
      </div>
    );
  } else if (unit === "fahrenheit") {
    return (
      <div className="eachDay">
        <div className="day">{day()}</div>
        <Icon icon={props.data.weather[0].icon} size={30} />
        <div className="forecastTemp">
          <span className="maxTemp">{fahrenheitMax}°</span>
          <span className="minTemp"> {fahrenheitMin}°</span>
        </div>
      </div>
    );
  }
}
