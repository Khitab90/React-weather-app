import React, { useEffect, useState } from 'react';
import './style.css';
import Header from './Components/Header';
import InputCity from './Components/InputCity';
import ShowWeather from './Components/ShowWeather';

const App = () => {
  const [inputCity, setInputCity] = useState('Los Angeles');
  const [cityName, setCityName] = useState('Los Angeles');
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);

  // Weather api
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={{api_key_weather_app}}`;

  // Ferching weather data
  async function fetchData(apiUrl) {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.cod === '404') {
      setError(true);
    } else {
      setWeatherData(data);
    }
  }

  // To fetch weather data
  useEffect(() => {
    fetchData(apiUrl);
  }, [apiUrl]);

  //Input element Handler
  const inputHandler = (e) => {
    setInputCity(e.target.value);
  };

  // Search button
  const submitHandler = (e) => {
    e.preventDefault();
    setError(false);
    setCityName(inputCity);
  };

  return (
    <div>
      <Header />
      <InputCity
        city={inputCity}
        onInputHandeler={inputHandler}
        onSubmitHandler={submitHandler}
      />
      {error ? (
        <h3 className="error">Invalid City Name :( </h3>
      ) : (
        <ShowWeather data={weatherData} />
      )}
    </div>
  );
};

export default App;
