import react from "react";
import ActualDate from "./ActualDate";

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
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}{" "}
              </span>
              <span className="units">
                <a href="/">°C</a> |<a href="/"> °F</a>
              </span>
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
