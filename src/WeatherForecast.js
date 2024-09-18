import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Day</div>
          <div>Icon</div>
          <div className="forecast-temperature">
            <span className="forecast-high">100°</span> |{" "}
            <span className="forecast-low">-10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
