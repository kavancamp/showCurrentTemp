import React from "react";

export default function Weather(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    alert("Coming Soon...");
  }
  return (
    <button href="/" onClick={showFahrenheit}>
      Current Temperature
    </button>
  );
}
