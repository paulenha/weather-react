import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import Axios from "axios";
import WeatherForecastDay from "./ForecastDayDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "481e368995b179f7b5471393b825546c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    Axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
