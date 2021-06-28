import React from "react";

import "./WeatherSection.css";

export default function CurrentIcon(props) {
  return <img src={props.icon} alt="partlySunny" className="currentIcon" />;
}
