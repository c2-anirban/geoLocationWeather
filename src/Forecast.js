import React from "react";
import {
  TiWeatherStormy,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherCloudy,
  TiWeatherDownpour,
} from "react-icons/ti";
// import useState from "react";

const Forecast = ({ weatherDetails }) => {
  let date = new Date();
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let i = 0;
  function CheckDay(day) {
    if (day + date.getDay() > 6) {
      return day + date.getDay() - 6;
    } else {
      return day + date.getDay();
    }
  }

  // for (let i = 0; i < 5; i++) {
  //   let allDay = weekday[CheckDay(i)];
  //   console.log(allDay);
  // }

  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-light mb-5 mt-4">
        <div className="container">
          <h1 className="display-4 fw-bold">5-Day Forecast</h1>
          <p className="lead"></p>
        </div>
      </div>
      <h5>
        {weatherDetails.city.name}, {weatherDetails.city.country}
      </h5>
      <div className="card-group col-md-12">
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title"> {weekday[CheckDay(i)]}</h5>
            <p className="card-text">
              <small className="text-muted">
                {weatherDetails.list[0].dt_txt}
              </small>
            </p>
            <h2 className="">
              {weatherDetails.list[0].weather.icon}
              <TiWeatherStormy />
            </h2>
            <h3>{(weatherDetails.list[0].main.temp - 273.15).toFixed(2)} °C</h3>
            <p className="card-text">
              <small className="text-dark">
                {weatherDetails.list[0].weather[0].description}
              </small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title"> {weekday[CheckDay(i + 1)]}</h5>
            <p className="card-text">
              <small className="text-muted">
                {weatherDetails.list[8].dt_txt}
              </small>
            </p>
            <h2 className="">
              <TiWeatherPartlySunny />
            </h2>
            <h3>{(weatherDetails.list[8].main.temp - 273.15).toFixed(2)} °C</h3>
            <p className="card-text">
              <small className="text-dark">
                {" "}
                {weatherDetails.list[8].weather[0].description}
              </small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">{weekday[CheckDay(i + 2)]}</h5>
            <p className="card-text">
              <small className="text-muted">
                {weatherDetails.list[16].dt_txt}
              </small>
            </p>
            <h2 className="">
              <TiWeatherShower />
            </h2>
            <h3>
              {(weatherDetails.list[16].main.temp - 273.15).toFixed(2)} °C
            </h3>
            <p className="card-text">
              <small className="text-dark">
                {" "}
                {weatherDetails.list[16].weather[0].description}
              </small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">{weekday[CheckDay(i + 3)]}</h5>
            <p className="card-text">
              <small className="text-muted">
                {weatherDetails.list[24].dt_txt}
              </small>
            </p>
            <h2 className="">
              <TiWeatherCloudy />
            </h2>
            <h3>
              {(weatherDetails.list[24].main.temp - 273.15).toFixed(2)} °C
            </h3>
            <p className="card-text">
              <small className="text-dark">
                {" "}
                {weatherDetails.list[24].weather[0].description}
              </small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">{weekday[CheckDay(i + 4)]}</h5>
            <p className="card-text">
              <small className="text-muted">
                {weatherDetails.list[32].dt_txt}
              </small>
            </p>
            <h2 className="">
              <TiWeatherDownpour />
            </h2>
            <h3>
              {(weatherDetails.list[32].main.temp - 273.15).toFixed(2)} °C
            </h3>
            <p className="card-text">
              <small className="text-dark">
                {" "}
                {weatherDetails.list[32].weather[0].description}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
