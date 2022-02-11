import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
// import env from "react-dotenv";

const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [weatherDetails, getWeatherDetails] = useState("");

  // const appId = process.env.APP_ID;
  console.log(process.env.REACT_APP_API_KEY);
  console.log(weatherDetails);

  const url = "https://api.openweathermap.org/data/2.5/forecast";

  useEffect(() => {
    getAllWeatherDetails();
  }, []);

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

  const getAllWeatherDetails = () => {
    axios
      .get(`${url}`, {
        // crossdomain: true,
        params: {
          lat: 22.6479701,
          lon: 88.430686,
          appid: process.env.REACT_APP_API_KEY,
        },
      })
      .then((response) => {
        const allWeatherDetails = response.data.list;
        console.log(allWeatherDetails);
        getWeatherDetails(allWeatherDetails);
      });
  };
  // getLocation();

  // useEffect(() => {
  //   if (!lat || !lng) return;
  //   getAllWeatherDetails();
  // }, [lat, lng]);

  return (
    <div className="App">
      <Forecast weatherDetails={weatherDetails} />
    </div>
  );
};

export default App;
