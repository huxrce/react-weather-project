//import React, { useState } from "react";
import React from "react";

export default function WeatherTemperature(props) {
  //  let [unit, setUnit] = useState("celsius");

  //  function displayFahrenheit(event) {
  //    event.preventDefault();
  //    setUnit("fahrenheit");
  //  }

  //  function displayCelsius(event) {
  //    event.preventDefault();
  //    setUnit("celsius");
  //  }

  //  function fahrenheit() {
  //    return (props.celsius * 9) / 5 + 32;
  //  }

  //  if (unit === "celsius") {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
  //    return (
  //      <div className="WeatherTemperature">
  //        <span className="temperature">{Math.round(props.celsius)}</span>
  //        <span className="unit">°C</span>
  //      </div>
  //    );
  //  } else {
  //    return (
  //      <div className="WeatherTemperature">
  //        <span className="temperature">{Math.round(fahrenheit())}</span>
  //        <span className="unit">
  //          <a href="/" onClick={displayCelsius}>
  //            °C
  //          </a>{" "}
  //          | °F
  //        </span>
  //      </div>
  //    );
  //  }
}
