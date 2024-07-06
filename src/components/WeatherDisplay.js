import React, { useContext } from 'react';
import { UnitContext } from '../context/UnitContext';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
    const { unit } = useContext(UnitContext);

    if (!weatherData) return null;

    const temperature = unit === 'C' 
        ? weatherData.current.temp_c 
        : weatherData.current.temp_f;

    return (
        <div className="weather-display">
            <h2>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h2>
            <p>Temperature: {temperature}°{unit}</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
            <p>Humidity: {weatherData.current.humidity} %</p>
            <p>Pressure: {weatherData.current.pressure_mb} mb</p>
            <p>Visibility: {weatherData.current.vis_km} km</p>
        </div>
    );
};

export default WeatherDisplay;
