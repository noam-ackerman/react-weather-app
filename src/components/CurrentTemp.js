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
          <sup>
            <strong>{unit === "fahrenheit" ? "°F " : "°C "}</strong>
          </sup>
        </span>
        <sup style={{ top: "-0.55em" }}>|</sup>
        <a href="/" onClick={convertUnit} className="conversionLink">
          <sup>{unit === "fahrenheit" ? " °C" : " °F"}</sup>
        </a>
      </span>
    </div>
  );
}
