// api.js
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b232de1a3d2cc75ebf8c66af052b2fe2'
const fetchWeatherData = async (city) => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};

export { fetchWeatherData };