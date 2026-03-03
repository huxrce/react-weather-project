import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDaily.css";

export default function ForecastDaily(props) {
  function max() {
    let temperature = Math.round(props.forecast.temperature.maximum);
    return `${temperature}°`;
  }

  function min() {
    let temperature = Math.round(props.forecast.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecast.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDaily">
      <div>{day()}</div>
      <WeatherIcon code={props.forecast.condition.icon} size={36} />
      <div>
        <span className="weather-details forecast-temp max">{max()}</span>
        <span className="weather-details forecast-temp min">{min()}</span>
      </div>
    </div>
  );
}
