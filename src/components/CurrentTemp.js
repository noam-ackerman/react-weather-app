import React, { useContext } from "react";
import { UnitContext } from "../UnitContext";

import "../styles/WeatherSection.css";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useContext(UnitContext);
  let celsiusTemp = props.CelsiusTemp;
  let fahrenheitTemp = Math.round((celsiusTemp * 9) / 5 + 32);
  function convertUnit(event) {
    event.preventDefault();
    if (unit === "fahrenheit") {
      setUnit("celsius");
    } else {
      setUnit("fahrenheit");
    }
  }

  return (
    <div className="tempSection">
      <span className="celsiusAndFahrenheit">
        <span className="currentTemp">
          {unit === "fahrenheit" ? fahrenheitTemp : celsiusTemp}
        </span>
        <span className="currentUnit">
          {unit === "fahrenheit" ? "°F" : "°C"}
        </span>
        /
        <a href="/" onClick={convertUnit} className="conversionLink">
          {unit === "fahrenheit" ? "°C" : "°F"}
        </a>
      </span>
    </div>
  );
}
