import React from "react";

import "./WeatherSection.css";

export default function Date(props) {
  let localTime = props.date;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[localTime.getDay()];
  let hour = ("0" + localTime.getHours()).slice(-2);
  let minutes = ("0" + localTime.getMinutes()).slice(-2);
  return (
    <div className="Date">
      <p>
        {day} {hour}:{minutes}
      </p>
    </div>
  );
}
