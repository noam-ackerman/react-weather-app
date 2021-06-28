import React from "react";
import City from "./City";
import Date from "./Date";
import CurrentTemp from "./CurrentTemp";
import CurrentIcon from "./CurrentIcon";
import ExtraNotes from "./ExtraNotes";
import partlySunny from "./img/partlySunny.png";

import "./WeatherSection.css";

export default function WeatherSection() {
  return (
    <div className="weatherSection">
      <div className="leftSide">
        <City value="London" />
        <Date day="Thursday" hour={14} minutes={30} />
        <CurrentTemp CelsiusTemp={25} FahrenheitTemp="" />
      </div>
      <div className="rightSide">
        <CurrentIcon icon={partlySunny} />
        <ExtraNotes description="Partly Clouded" wind={4} humidity={40} />
      </div>
    </div>
  );
}
