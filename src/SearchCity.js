import React from "react";
import WeatherSection from "./WeatherSection";

import "./SearchCity.css";

export default function SearchCity() {
  return (
    <div className="SearchAndDisplay">
      <div className="SearchEngine">
        <form>
          <input
            type="search"
            placeholder="Type a City..."
            autoComplete="off"
            className="cityInput"
            id="city-input"
          />
          <input type="submit" value="Search" className="searchButton" />
        </form>
      </div>
      <WeatherSection />
    </div>
  );
}
