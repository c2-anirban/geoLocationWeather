import React from "react";
import {
  TiWeatherStormy,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherCloudy,
  TiWeatherDownpour,
} from "react-icons/ti";

const Forecast = ({ weatherDetails }) => {
  //   console.log(weatherDetails);
  if (weatherDetails === "") {
    return <p>loading...</p>;
  }
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
              <small className="text-muted">{weatherDetails[0].dt_txt}</small>
            </p>
            <h2 className="">
              <TiWeatherStormy />
            </h2>
            <h3>35°F</h3>
            <p className="card-text">
              <small className="text-dark">
                {weatherDetails[0].weather[0].description}
              </small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">Saturday</h5>
            <p className="card-text">
              <small className="text-muted">{weatherDetails[8].dt_txt}</small>
            </p>
            <h2 className="">
              <TiWeatherPartlySunny />
            </h2>
            <h3>35°F</h3>
            <p className="card-text">
              <small className="text-dark">
                {" "}
                {weatherDetails[8].weather[0].description}
              </small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">Sunday</h5>
            <p className="card-text">
              <small className="text-muted">{weatherDetails[16].dt_txt}</small>
            </p>
            <h2 className="">
              <TiWeatherShower />
            </h2>
            <h3>35°F</h3>
            <p className="card-text">
              <small className="text-dark">
                {" "}
                {weatherDetails[16].weather[0].description}
              </small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">Monday</h5>
            <p className="card-text">
              <small className="text-muted">{weatherDetails[24].dt_txt}</small>
            </p>
            <h2 className="">
              <TiWeatherCloudy />
            </h2>
            <h3>35°F</h3>
            <p className="card-text">
              <small className="text-dark">
                {" "}
                {weatherDetails[24].weather[0].description}
              </small>
            </p>
          </div>
        </div>
        <div className="card col-md-2">
          <div className="card-body">
            <h5 className="card-title">Tuesday</h5>
            <p className="card-text">
              <small className="text-muted">{weatherDetails[32].dt_txt}</small>
            </p>
            <h2 className="">
              <TiWeatherDownpour />
            </h2>
            <h3>35°F</h3>
            <p className="card-text">
              <small className="text-dark">
                {" "}
                {weatherDetails[32].weather[0].description}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
