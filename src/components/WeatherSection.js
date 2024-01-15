import React from "react";
import Date from "./Date";
import CurrentTemp from "./CurrentTemp";
import CurrentIcon from "./Icon";
import { UnitContext } from "../UnitContext";

import "../styles/WeatherSection.css";

export default function WeatherSection(props) {
  const [unit] = React.useContext(UnitContext);
  let mph = (+props.data.wind * 0.621371).toFixed(1);
  return (
    <div className="weatherSection">
      <div className="leftSide">
        <div className="cityTitle">
          <span>{props.data.city}</span>
          <span className="country">{props.data.date.sys.country}</span>
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
            Humidity: {props.data.humidity}% • Wind:{" "}
            {unit === "celsius" ? props.data.wind + " km/h" : mph + " mi/h"}
          </div>
        </div>
      </div>
    </div>
  );
}
