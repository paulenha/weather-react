import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
