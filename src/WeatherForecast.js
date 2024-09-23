import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.city]);

  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setReady(true);
  }

  function showError() {
    //do somethig
  }

  function getWeatherData() {
    const apiKey = "bb1ff32oa1215694c28tecb0d1659beb";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div>
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col WeatherForecast" key={index}>
                  <WeatherForecastDay data={dailyForecast} index={index} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    getWeatherData();
    return "loading";
  }
}
