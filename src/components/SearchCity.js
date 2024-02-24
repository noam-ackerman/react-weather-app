import React, { useState, useReducer } from "react";
import WeatherSection from "./WeatherSection";
import Forecast from "./Forecast";
import { UnitName } from "../UnitContext";
import { Oval } from "react-loader-spinner";

import "../styles/SearchCity.css";

function reducer(state, action) {
  switch (action.type) {
    case "pending": {
      return { status: "pending", error: null, weatherData: null };
    }
    case "resolved": {
      return { status: "resolved", error: null, weatherData: action.data };
    }
    case "rejected": {
      return { status: "rejected", error: action.error, weatherData: null };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function SearchCity(props) {
  const [state, dispatch] = useReducer(reducer, {
    status: "pending",
    error: null,
    weatherData: null,
  });
  const { status, error, weatherData } = state;
  const [city, setCity] = useState(props.defaultCity);
  const cityInput = React.useRef();

  React.useEffect(() => {
    const apiKey = "b5a3097ed58959eb47ee948058cf6636";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    dispatch({ type: "pending" });
    fetch(apiUrl).then(async (resp) => {
      const response = await resp.json();
      if (!resp.ok) {
        dispatch({ type: "rejected", error: response });
      } else {
        const data = {
          city: response.name,
          temp: Math.round(response.main.temp),
          humidity: response.main.humidity,
          wind: Math.round(response.wind.speed),
          description: response.weather[0].description,
          icon: response.weather[0].icon,
          date: response,
          coords: response.coord,
        };
        dispatch({ type: "resolved", data: data });
      }
    });
  }, [city]);

  function handleSubmit(event) {
    event.preventDefault();
    if (cityInput.current.value.trim().length !== 0) {
      setCity(cityInput.current.value);
      cityInput.current.value = "";
    }
  }

  let SearchEngine = (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a City..."
          autoComplete="off"
          className="cityInput"
          id="city-input"
          ref={cityInput}
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
    </div>
  );

  return (
    <UnitName>
      <div className="SearchAndDisplay">
        {SearchEngine}
        {status === "pending" && (
          <div className="loading">
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
        {status === "resolved" && (
          <>
            <WeatherSection data={weatherData} />
            <Forecast coords={weatherData.coords} />
          </>
        )}
        {status === "rejected" && <div className="error">{error.message}</div>}
      </div>
    </UnitName>
  );
}
