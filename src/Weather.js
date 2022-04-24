import React, { useState } from "react";
import ActualDate from "./ActualDate";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: "http://openweathermap.org/img/wn/02d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,
    });
  }

  function search() {
    const apiKey = "481e368995b179f7b5471393b825546c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div class="container">
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="type a city..."
                    className="form-control"
                    autoComplete="off"
                    onChange={handleCityChange}
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
            </div>
          </form>
          <WeatherInfo data={weatherData} />
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
    search();
    return "loading...";
  }
}
