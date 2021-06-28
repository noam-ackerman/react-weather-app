import React, { useState } from "react";

import "./WeatherSection.css";

function CurrentTemp(props) {
  let [celsiusTemp, afterClickCelsius] = useState(props.CelsiusTemp);
  let [fahrenheitTemp, afterClickFahrenheit] = useState(props.FahrenheitTemp);
  function showFahrenheit(event) {
    event.preventDefault();
    afterClickCelsius("");
    afterClickFahrenheit(Math.round((props.CelsiusTemp * 9) / 5 + 32));
  }
  function showCelsius(event) {
    event.preventDefault();
    afterClickCelsius(props.CelsiusTemp);
    afterClickFahrenheit("");
  }
  return (
    <div className="tempSection">
      <span className="celsiusAndFahrenheit">
        <span className="currentCelsiusTemp">{celsiusTemp}</span>
        <a href="/" onClick={showCelsius} className="celsiusLink">
          °C
        </a>
        /<span className="currentfahrenheitTemp">{fahrenheitTemp}</span>
        <a href="/" onClick={showFahrenheit} className="fahrenheitLink">
          °F
        </a>
      </span>
    </div>
  );
}

export default CurrentTemp;
