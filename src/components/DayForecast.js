import React, { useContext } from "react";
import { UnitContext } from "../UnitContext";
import Icon from "./Icon";

import "../styles/Forecast.css";

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

  return (
    <div className="eachDay">
      <div className="day">{day()}</div>
      <Icon icon={props.data.weather[0].icon} size={30} />
      <div className="forecastTemp">
        <span className="minTemp">
          {unit === "celsius" ? celsiusMin + "°" : fahrenheitMin + "°"}
        </span>
        <span className="maxTemp">
          {" "}
          {unit === "celsius" ? celsuisMax + "°" : fahrenheitMax + "°"}
        </span>
      </div>
    </div>
  );
}
