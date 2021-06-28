import React from "react";

import "./WeatherSection.css";

export default function City(props) {
  return (
    <div className="cityTitle">
      <h1>{props.value}</h1>
    </div>
  );
}
