import React from "react";

import "./WeatherSection.css";

export default function localDate(props) {
  //to display correct local time
  let localTimeZone = props.date.timezone / 3600;
  let unixTimestamp = Date.now() / 1000;
  let time = new Date(unixTimestamp * 1000);
  let localHours = (time.getUTCHours() + localTimeZone + 24) % 24;
  let hours = ("0" + localHours).slice(-2);
  let minutes = ("0" + time.getMinutes()).slice(-2);
  //to display correct local day
  let day = new Date(props.date.dt * 1000);
  let dayOffset = day.getTimezoneOffset() * 60;
  day.setSeconds(day.getSeconds() + dayOffset + props.date.timezone);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let localDay = days[day.getDay()];
  //

  return (
    <div className="Date">
      <p>
        {localDay} {hours}:{minutes}
      </p>
    </div>
  );
}
