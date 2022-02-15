import React from "react";
/* import {
  TiWeatherStormy,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherCloudy,
  TiWeatherDownpour,
} from "react-icons/ti"; */
// import useState from "react";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = ({ weatherDetails }) => {
  function CheckDay(day) {
    const date = new Date(day);
    return weekday[date.getDay()];
  }

  return (
    <div>
      <div className="jumbotron jumbotron-fluid mb-5 mt-4 ">
        <div className="container">
          <h1 className="display-4 fw-bold">5-Day Forecast</h1>
          <p className="lead"></p>
        </div>
      </div>
      <h5>
        {weatherDetails.city.name}, {weatherDetails.city.country}
      </h5>
      <div className="card-group col-md-12">
        {weatherDetails.list.slice(0, 5).map((el, i) => (
          <div className="card col-md-2" key={i}>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                {CheckDay(el.dt * 1000 - weatherDetails.city.timezone * 1000)}
              </h5>
              <p className="card-text">
                <small className="text-muted">
                  {new Date(
                    el.dt * 1000 - weatherDetails.city.timezone * 1000
                  ).toLocaleString()}
                </small>
              </p>
              <p className="card-text">
                <small className="">
                  Sunrise : {new Date(el.sunrise).toLocaleTimeString()}
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Sunset : {new Date(el.sunset).toLocaleTimeString()}
                </small>
              </p>
              <h2 className="">
                <img
                  src={`http://openweathermap.org/img/w/${el.weather[0].icon}.png`}
                  alt="wthr img"
                />

                {/* <TiWeatherStormy /> */}
              </h2>
              <h3>{(el.temp.day - 273.15).toFixed(2)}°C</h3>
              <p className="minValues" id="day2Min">
                {(el.temp.min - 273.15).toFixed(2)}°C
              </p>
              <p className="maxValues" id="day2Max">
                {(el.temp.max - 273.15).toFixed(2)}°C
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Feels Like : {(el.feels_like.day - 273.15).toFixed(2)}°C
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Wind Speed : {(el.wind_speed * 3.6).toFixed(2)}km/h
                </small>
              </p>
              <p className="card-text">
                <strong className="text-dark text-capitalize">
                  {el.weather[0].description}
                </strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
