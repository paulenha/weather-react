import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    temperature: 18,
    city: "Campbell",
    date: "Monday 6pm",
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/02d@2x.png",
    humidity: 80,
    wind: 10,
    feel: 16,
  };

  return (
    <div class="container">
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="type a city..."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-secondary shadow-sm w-100"
              />
            </div>
            <div className="col-3">
              <button
                className="btn btn-dark shadow-sm w-100"
                id="current-location-button"
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature} </strong>
                <span className="units">
                  <a href="/">°C</a> |<a href="/"> °F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} Km/h</li>
              <li>Feels Like: {weatherData.feel}°C</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast">
          <div className="row">
            <div className="col-2">
              <div className="weather-forecast-date">Mon</div>
              <img
                src="http://openweathermap.org/img/wn/01n@2x.png"
                alt=""
                width="44"
              />
              <div className="weather-forecast-temp">
                <span className="weather-forecast-temp-max">18°</span>
                <span className="weather-forecast-temp-min">12°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small className="name">
        <a
          href="https://https://github.com/paulenha/weather-react"
          target="_blank"
        >
          {" "}
          coded by{" "}
        </a>{" "}
        Paula Silva
      </small>
    </div>
  );
}
