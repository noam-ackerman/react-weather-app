import React from "react";
import Date from "./Date";
import CurrentTemp from "./CurrentTemp";
import CurrentIcon from "./Icon";

import "./WeatherSection.css";

export default function WeatherSection(props) {
  return (
    <div className="weatherSection">
      <div className="leftSide">
        <div className="cityTitle">
          <h1>{props.data.city}</h1>
        </div>
        <div className="noteDate">Local time:</div>
        <Date date={props.data.date} />
        <CurrentTemp CelsiusTemp={props.data.temp} />
      </div>
      <div className="rightSide">
        <CurrentIcon icon={props.data.icon} size={105} />
        <div className="notesSection">
          <div className="description">{props.data.description}</div>
          <div className="humidityAndWind">
            Humidity: {props.data.humidity}% • Wind: {props.data.wind} km/h
          </div>
        </div>
      </div>
    </div>
  );
}
