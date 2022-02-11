import React from "react";
import {
  TiWeatherStormy,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherCloudy,
  TiWeatherDownpour,
} from "react-icons/ti";

const Forecast = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-light mb-5 mt-4">
        <div className="container">
          <h1 className="display-4 fw-bold">5-Day Forecast</h1>
          <p className="lead"></p>
        </div>
      </div>
      <h5>New York,US</h5>
      <div className="card-group col-md-12">
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">Friday</h5>
            <p className="card-text">
              <small className="text-muted">March 1st, 1:00 pm </small>
            </p>
            <h2 className="">
              <TiWeatherStormy />
            </h2>
            <h3>35°F</h3>
            <p className="card-text">
              <small className="text-dark">Clear Sky </small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">Saturday</h5>
            <p className="card-text">
              <small className="text-muted">March 2nd, 1:00 pm</small>
            </p>
            <h2 className="">
              <TiWeatherPartlySunny />
            </h2>
            <h3>35°F</h3>
            <p className="card-text">
              <small className="text-dark">Light Rain</small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">Sunday</h5>
            <p className="card-text">
              <small className="text-muted">March 3rd, 1:00 pm</small>
            </p>
            <h2 className="">
              <TiWeatherShower />
            </h2>
            <h3>35°F</h3>
            <p className="card-text">
              <small className="text-dark">Broken Clouds </small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">Monday</h5>
            <p className="card-text">
              <small className="text-muted">March 4th, 1:00 pm</small>
            </p>
            <h2 className="">
              <TiWeatherCloudy />
            </h2>
            <h3>35°F</h3>
            <p className="card-text">
              <small className="text-dark">Clear Sky</small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">Tuesday</h5>
            <p className="card-text">
              <small className="text-muted">March 5th, 1:00 pm</small>
            </p>
            <h2 className="">
              <TiWeatherDownpour />
            </h2>
            <h3>35°F</h3>
            <p className="card-text">
              <small className="text-dark">Scattered Clouds </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
