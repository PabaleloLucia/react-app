import React from "react";

export default function Weather() {
  return (
    <div class="card">
      <div class="container">
        <div class="wrapper">
          <div class="the-app">
            <form
              class="row row-cols-lg-auto g-3 align-items-center mb-4"
              id="city-form"
            >
              <div class="col-12">
                <input
                  type="search"
                  autocomplete="off"
                  autofocus="on"
                  class="form-control"
                  id="cityWeatherForecast"
                  placeholder="Enter city name"
                />
              </div>
              <div class="col-12">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-outline-secondary w-100"
                />
              </div>
              <div class="col-12">
                <input
                  type="submit"
                  value="Current"
                  id="current-location"
                  class="btn btn-outline-secondary w-100"
                />
              </div>
              <div class="col-12">
                <span id="theme_toggler"> Change theme </span>
              </div>
            </form>

            <div class="weather">
              <h1 id="city"></h1>
              <ul>
                <li>
                  Today: <span id="date"></span>
                </li>
                <li id="description"></li>
              </ul>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="clearfix temp">
                  <img src="" alt="clear" id="icon" class="float-left" />
                  <div class="float-left">
                    <strong id="temperature"></strong>
                    <span class="weather-units">
                      <a href="#" tabindex="1" class="focus" id="key2">
                        ℃
                      </a>{" "}
                      |
                      <a href="#" tabindex="1" class="pointer" id="key">
                        ℉
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: <span id="wind"></span>km/h
                  </li>
                </ul>
              </div>
            </div>
            <div class="app-forecast" id="weather-forecast"></div>
          </div>
          <small>
            Open Source Code on
            <a
              href="https://github.com/PabaleloLucia/My-Project.git"
              target="_blank"
              title="Project on GitHub"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            by
            <a href="mailto:pabalelotsebempe@gmail.com" target="_blank">
              Pabalelo Tsebempe
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
