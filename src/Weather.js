import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>New York</h1>
      <ul>
        <li>Friday 10:00 AM</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
          alt="Cloudy"
          />
          6°C
        </div>
      </div>
    </div>
  );
}
