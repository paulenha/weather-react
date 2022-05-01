import React from "react";
import ActualDate from "./ActualDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <ActualDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemp celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} Km/h</li>
            <li>Feels Like: {Math.round(props.data.feel)}°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
