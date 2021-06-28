import React from "react";

import "./WeatherSection.css";

export default function Date(props) {
  return (
    <div className="Date">
      <p>
        {props.day} {props.hour}:{props.minutes}
      </p>
    </div>
  );
}
