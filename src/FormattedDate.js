import React from "react";

export default function FormattedWeather(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let hours = props.date.getHours();
  let amPm = "";
  if (hours < 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }
  if (hours > 0 && hours < 10) {
    hours = `0${hours}`;
  }
  if (hours > 12) {
    hours = `${hours - 12}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {month} {date} {hours}:{minutes} {amPm}
    </div>
  );
}
