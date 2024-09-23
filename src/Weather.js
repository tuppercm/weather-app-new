import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  // Gets and returns weather data for a location from App.js or user-entry

  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    // Trys to set the useState for WeatherData and alerts user if unable to do so

    try {
      setWeatherData({
        city: response.data.city,
        country: response.data.country,
        date: new Date(response.data.time * 1000),
        description: response.data.condition.description,
        feelsLike: response.data.temperature.feels_like,
        humidity: response.data.temperature.humidity,
        icon: response.data.condition.icon,
        iconUrl: response.data.condition.icon_url,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        ready: true,
      });
    } catch (e) {
      alert("That city was not found. Please try again.");
    }
  }

  function search() {
    // Calls the SheCodes Weather API for given city
    const apiKey = "bb1ff32oa1215694c28tecb0d1659beb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    // Searches for city when user clicks Search button
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    // Updates the city value as user enters form
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-success w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <hr />
        <h2>This Week's Daily Forecast</h2>
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
