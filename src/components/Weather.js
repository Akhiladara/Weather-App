import React, { useState } from 'react';
import './Weather.css';

const Weather = ({darkMode}) => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const apiKey = '302024345bb749c5f06cb8ca0999caf6'; 
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    }
  };

  return (
    <div className={darkMode ? 'weather-container dark-mode' : 'weather-container'}>
      <div className='heading-card'>
      <img src="https://cdn.pixabay.com/photo/2021/01/24/20/21/cloud-5946381_1280.jpg" alt="weather"  className='cloud-image'/>
      <h1 className='weather-heading'>Weather App</h1>
      </div>
      <input
        type="text"
        placeholder="Enter city or zip code"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <p><span className='bold-sub-heading'>Location:</span> {weatherData.name}</p>
          <p><span className='bold-sub-heading'>Date:</span> {new Date().toLocaleDateString()}</p>
          <p><span className='bold-sub-heading'>Time:</span> {new Date().toLocaleTimeString()}</p>
          <p><span className='bold-sub-heading'>Temperature:</span> {weatherData.main.temp}°C</p>
          <p><span className='bold-sub-heading'>Humidity:</span> {weatherData.main.humidity}</p>
          <p><span className='bold-sub-heading'>Wind Speed:</span> {weatherData.wind.speed}</p>
          <p><span className='bold-sub-heading'>Weather Description:</span> {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
