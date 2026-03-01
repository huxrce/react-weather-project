import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let key = "etab4ae54eba8ab35o7f9e68e3e0f304";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
    axios.get(url).then(displayWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                required
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn submit-btn w-100"
              />
            </div>
          </div>
        </form>
        <h1 className="text-capitalize">{city}</h1>
        <ul>
          <li>Sunday 13:25</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix d-flex">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="icon float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity:{" "}
                <span className="weather-details">{weatherData.humidity}%</span>
              </li>
              <li>
                Wind:{" "}
                <span className="weather-details">{weatherData.wind} km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let key = "etab4ae54eba8ab35o7f9e68e3e0f304";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
    axios.get(url).then(displayWeather);

    return "Loading...";
  }
}
