// Search.js
import React, { useState } from 'react';
import { fetchWeatherData } from './helper'
import { Loading } from "notiflix/build/notiflix-loading-aio";

const Search = ({ onSearch ,setSearchInput}) => {

  const [city, setCity] = useState('');
  const [isDisabled, setIsDisabled] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault();
    Loading.dots()
    const data = await fetchWeatherData(city);

    if (data.cod === '404') {
      Loading.remove()
      onSearch({}, 'City not found. Please try again.');
    } else {
      Loading.remove()
      onSearch(data, '');
    }
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setCity(inputValue);
    setIsDisabled(inputValue.trim() === '');
    setSearchInput(inputValue);
  
    if (inputValue.trim() === '') {
      onSearch({}, ''); 
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleSearchInput}
      />
      <button
        type="submit"
        disabled={isDisabled}
        className={isDisabled ? 'disabled-button' : ''}
      >
        Search
      </button>
    </form>
  );
};

export default Search;