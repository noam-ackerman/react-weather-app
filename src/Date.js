import React from "react";

import "./WeatherSection.css";

export default function localDate(props) {
  //to display correct local time
  let localTimeZone = props.date.timezone / 3600;
  let time = new Date();
  let utc = time.getTime() + (time.getTimezoneOffset() * 60000);
  let localTime = new Date(utc + (3600000 * localTimeZone));
  let localHours = localTime.getHours()
  let localMinutes =  localTime.getMinutes()
  let hours = ("0" + localHours).slice(-2);
  let minutes = ("0" + localMinutes).slice(-2);
  //to display correct local day
  let localDayIndex = localTime.getDay()
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let localDay = days[localDayIndex];
  //

  return (
    <div className="Date">
      <p>
        {localDay} {hours}:{minutes}
      </p>
    </div>
  );
}
