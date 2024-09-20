import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if (props.index == 0) {
      return "Today";
    }
    if (props.index == 1) {
      return "Tomorrow";
    } else {
      return days[day];
    }
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
          className="forecast-icon"
        />
      </div>
      <div className="forecast-temperature">
        <span className="forecast-high">{maxTemperature()}</span>
        <span className="forecast-low">{minTemperature()}</span>
      </div>
    </div>
  );
}
