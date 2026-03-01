import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              required
              placeholder="Enter a city..."
              autoFocus="on"
              className="form-control"
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
      <h1>Venice</h1>
      <ul>
        <li>Sunday 13:25</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix d-flex">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
              alt="Mostly Cloudy"
              className="icon float-left"
            />
            <div className="float-left">
              <span className="temperature">7</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Precipitation: <span className="weather-details">15%</span>
            </li>
            <li>
              Humidity: <span className="weather-details">72%</span>
            </li>
            <li>
              Wind: <span className="weather-details">13 km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
