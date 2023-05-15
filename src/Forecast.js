import React from "react";

export default function Forecast(props) {
  function showForecast(event) {
    event.preventDefault();
    alert("Forecast feature is not ready yet");
  }
  return (
    <button href="/" onClick={showForecast}>
      Show Forecast
    </button>
  );
}
