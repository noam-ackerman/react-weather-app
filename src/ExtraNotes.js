import React from "react";

import "./WeatherSection.css";

export default function ExtraNotes(props) {
  return (
    <div className="notesSection">
      <div className="description">{props.description}</div>
      <div className="humidityAndWind">
        Humidity: {props.humidity}% • Wind: {props.wind} km/h
      </div>
    </div>
  );
}
