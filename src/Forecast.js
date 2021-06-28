import React from "react";
import DayForecast from "./DayForecast";
import RainyIcon from "./img/rainy.png";
import SunnyIcon from "./img/sunny.png";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row forecastSection">
      <DayForecast day="Thu" maxTemp={19} minTemp={13} icon={RainyIcon} />
      <DayForecast day="Fri" maxTemp={28} minTemp={20} icon={SunnyIcon} />
      <DayForecast day="Sat" maxTemp={17} minTemp={12} icon={RainyIcon} />
      <DayForecast day="Sun" maxTemp={18} minTemp={14} icon={RainyIcon} />
      <DayForecast day="Mon" maxTemp={25} minTemp={21} icon={SunnyIcon} />
      <DayForecast day="Tue" maxTemp={24} minTemp={19} icon={SunnyIcon} />
    </div>
  );
}
