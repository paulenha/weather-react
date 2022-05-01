import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "481e368995b179f7b5471393b825546c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  Axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="01d" size={50} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">18°</span>
            <span className="WeatherForecast-temp-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
