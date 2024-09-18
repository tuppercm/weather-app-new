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

  return (
    <div>
      <div className="forecast-day">{props.data.time}</div>
      <div className="forecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <div className="forecast-temperature">
        <span className="forecast-high">{maxTemperature()}</span>
        <span className="forecast-low">{minTemperature()}</span>
      </div>
    </div>
  );
}
