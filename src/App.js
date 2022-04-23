import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Inverness" />

        <footer>
          <a href="https://github.com/paulenha/weather-react" target="_blank">
            coded by
          </a>{" "}
          Paula Silva
        </footer>
      </div>
    </div>
  );
}
