import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [weatherDetails, getWeatherDetails] = useState("");

  const url = "https://api.openweathermap.org/data/2.5/forecast";

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };
  useEffect(() => {
    void getLocation();
  }, []);

  useEffect(() => {
    if (lat !== null && lng !== null) {
      getAllWeatherDetails(lat, lng);
    }
  }, [lat, lng]);

  const getAllWeatherDetails = (latitude, longitude) => {
    axios
      .get(`${url}`, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        const allWeatherDetails = response.data;
        console.log(allWeatherDetails);
        getWeatherDetails(allWeatherDetails);
      });
  };

  return (
    <div className="App">
      {status && <h1>{status}</h1>}
      {weatherDetails && <Forecast weatherDetails={weatherDetails} />}
    </div>
  );
};

export default App;
