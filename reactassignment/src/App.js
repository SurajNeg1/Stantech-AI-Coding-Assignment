// App.js
import React, { useState } from 'react';
import Search from './search'
import WeatherDisplay from './weatherDisplay'
import "./App.css"

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [apiError, setApiError] = useState('');
  const [searchInput, setSearchInput] = useState(''); // Add this state to store the search input value

  const handleSearch = (data, apiError) => {
    if (!data) { 
      setWeatherData(null);
    } else {
      setSearchPerformed(true);
      setApiError(apiError);
      setWeatherData(data);
    }
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Weather Dashboard</h1>
      <Search onSearch={handleSearch} setSearchInput={setSearchInput} />
      {searchInput.trim() !== '' && weatherData && 
        <WeatherDisplay weather={weatherData} searchPerformed={searchPerformed} apiError={apiError} />
      }
    </div>
  );
}

export default App;