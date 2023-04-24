import React, {useEffect, useReducer } from "react";
import DayForecast from "./DayForecast";

import "./Forecast.css";

function reducer(state, action) {
  switch (action.type){
    case "pending" : {
      return {ready: false, forecastData: null}
    }
    case "resolved" : {
      return {ready: true, forecastData: action.data}
    } 
    case "rejected" : {
      return {ready: false, forecastData: null}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default function Forecast(props) {
  const [state, dispatch] = useReducer(reducer, {ready: false, forecastData : null})
  const {ready, forecastData} = state;

  useEffect(() => {
    let apiKey = "b5a3097ed58959eb47ee948058cf6636";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    dispatch({type:"pending"});
    fetch(apiUrl).then(async resp => {
      const response = await resp.json()
      if(!resp.ok) {
        dispatch({type:"rejected"})
      } else {
        dispatch({type:"resolved", data:response.daily})
      }
    })
  }, [props.coords]);

  if (ready) {
    return (
      <div className="row forecastSection">
        {forecastData.map(function (daily, index) {
          if (index < 6) {
            return (
              <div className="col" key={index}>
                <DayForecast data={daily} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
