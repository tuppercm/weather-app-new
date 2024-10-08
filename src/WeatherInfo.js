import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  // Returns the current weather data

  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <ul>
        <li className="country">{props.data.country}</li>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.icon} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels Like: {Math.round(props.data.feelsLike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
