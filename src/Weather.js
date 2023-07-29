import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Gaborone",
    temperature: 19,
    date: "Tuesday",
    time: "11:00",
    description: "Windy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/windy.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="container">
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city name..."
                autocomplete="on"
                className="form-control shadow-sm"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-light shadow-sm"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Current"
                id="current-location"
                className="form-control btn btn-light shadow-sm"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            Last updated: {weatherData.date}{" "}
            <span id="date-time">{weatherData.time}</span>
          </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-4">
            <div className="clearfix">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>{" "}
                | <a href="/">°F</a>
              </span>
            </div>
          </div>

          <div className="col-4">
            <ul>
              <li> Humidity: {weatherData.humidity}%</li>
              <li> Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
          <hr />
          <p class="githubLink">
            <small>
              Open Source Code on{" "}
              <a
                class="gitHub"
                href="https://github.com/PabaleloLucia/My-Project.git"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>{" "}
              by
              <a
                class="email"
                href="mailto:pabalelotsebempe@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Pabalelo Tsebempe
              </a>
              <span id="theme_toggler"> Change theme </span>
            </small>
          </p>
        </div>
      </div>{" "}
    </div>
  );
}
