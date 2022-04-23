import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: "Sunday",
      description: response.data.weather[0].description,
      imgUrl: "http://openweathermap.org/img/wn/02d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,
    });
  }

  if (weatherData.ready) {
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
              <li className="text-capitalize">{weatherData.description}</li>
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
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}{" "}
                  </span>
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
                <li>Feels Like: {Math.round(weatherData.feel)}°C</li>
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
      </div>
    );
  } else {
    const apiKey = "481e368995b179f7b5471393b825546c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
