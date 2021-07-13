import React, { useState } from "react";

import "./WeatherSection.css";

export default function CurrentTemp(props) {
  let [unit, setUnit] = useState("celsius");
  let celsiusTemp = props.CelsiusTemp;
  let fahrenheitTemp = Math.round((celsiusTemp * 9) / 5 + 32);
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="tempSection">
        <span className="celsiusAndFahrenheit">
          <span className="currentCelsiusTemp">{celsiusTemp}</span>
          <span className="celsiusLink">°C</span>/
          <span className="currentfahrenheitTemp"></span>
          <a href="/" onClick={showFahrenheit} className="fahrenheitLink">
            °F
          </a>
        </span>
      </div>
    );
  } else if (unit === "fahrenheit") {
    return (
      <div className="tempSection">
        <span className="celsiusAndFahrenheit">
          <span className="currentfahrenheitTemp">{fahrenheitTemp}</span>
          <span className="fahrenheitLink">°F</span>/
          <span className="currentCelsiusTemp"></span>
          <a href="/" onClick={showCelsius} className="celsiusLink">
            °C
          </a>
        </span>
      </div>
    );
  }
}
