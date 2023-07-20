import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card">
        <div className="container">
          <div className="wrapper">
            <div className="the-app">
              <form
                className="row row-cols-lg-auto g-3 align-items-center mb-4"
                id="city-form"
              >
                <div className="col-6">
                  <input
                    type="search"
                    autocomplete="off"
                    autofocus="on"
                    className="form-control"
                    id="cityWeatherForecast"
                    placeholder="Enter city name"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-outline-secondary w-100"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Current"
                    id="current-location"
                    className="btn btn-outline-secondary w-100"
                  />
                </div>
              </form>

              <div className="weather">
                <h1 id="city">Gaborone</h1>
                <ul>
                  <li>
                    Today: <span id="date"> 13:00</span>
                  </li>
                  <li id="description"> windy</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="clearfix temp">
                    <i class="fa-solid fa-wind"></i>
                    <div className="float-left">
                      <strong id="temperature">12</strong>
                      <span className="weather-units">
                        <a
                          type="button"
                          className="btn btn-link focus"
                          id="key2"
                        >
                          ℃
                        </a>{" "}
                        |
                        <a type="button" className="btn btn-link " id="key">
                          ℉
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Humidity: <span id="humidity">3</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">21</span>km/h
                    </li>
                  </ul>
                </div>
              </div>
              <div className="app-forecast" id="weather-forecast"></div>
            </div>

            <small>
              Open Source Code on{" "}
              <a
                href="https://github.com/PabaleloLucia/My-Project.git"
                rel="noreferrer"
                title="Project on GitHub"
                target="_blank"
                className="btn btn-link "
              >
                GitHub
              </a>{" "}
              by{" "}
              <a
                href="mailto:pabalelotsebempe@gmail.com"
                target="_blank"
                className="btn btn-link "
                title="email me"
                rel="noreferrer"
              >
                Pabalelo Tsebempe
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
