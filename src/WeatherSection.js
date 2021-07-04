import React from "react";
import City from "./City";
import Date from "./Date";
import CurrentTemp from "./CurrentTemp";
import CurrentIcon from "./CurrentIcon";
import ExtraNotes from "./ExtraNotes";
import partlySunny from "./img/partlySunny.png";

import "./WeatherSection.css";

export default function WeatherSection(props) {
  return (
    <div className="weatherSection">
      <div className="leftSide">
        <City value={props.data.city} />
        <div className="noteDate">Latest data update:</div>
        <Date date={props.data.date} />
        <CurrentTemp CelsiusTemp={props.data.temp} />
      </div>
      <div className="rightSide">
        <CurrentIcon icon={partlySunny} />
        <ExtraNotes
          description={props.data.description}
          wind={props.data.wind}
          humidity={props.data.humidity}
        />
      </div>
    </div>
  );
}
