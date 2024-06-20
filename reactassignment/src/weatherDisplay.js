// WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ weather , searchPerformed , apiError }) => {

  if (!searchPerformed) return null;

  if (!weather || Object.keys(weather).length === 0) {
    return <p style={{textAlign:'center'}}>{apiError}</p>;
  }

  const { main, name, sys, weather: conditions } = weather;
  const { temp, humidity } = main;
  const { country } = sys;

  return (
    <div className="weather-display">
      <h2>
        {name}, {country}
      </h2>
      <p>Temperature: {temp}K</p>
      <p>Humidity: {humidity}%</p>
      <p>Conditions: {conditions[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;