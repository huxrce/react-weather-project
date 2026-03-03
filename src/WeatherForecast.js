import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDaily from "./ForecastDaily";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let key = "etab4ae54eba8ab35o7f9e68e3e0f304";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${key}`;
    axios.get(url).then(handleResponse);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.data.city]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDaily forecast={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
  }
}
