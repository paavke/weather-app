import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import LoadingIndicator from "./components/LoadingIndicator";
import RecentSearches from "./components/RecentSearches";
import UnitToggle from "./components/UnitToggle";
import WeatherDisplay from "./components/WeatherDisplay";
import { UnitProvider } from "./context/UnitContext";
import "./App.css";  // Import the CSS file here

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searches, setSearches] = useState([]);

  const fetchData = async (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      try {
        const data = await fetchWeather(cityName);
        setWeatherData(data);
        setCityName("");
        setError(null);
        setSearches((prevSearches) => [cityName, ...prevSearches.slice(0, 4)]); // Store recent searches
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRecentSearch = (city) => {
    setCityName(city);
    fetchData({ key: "Enter" }); // Trigger fetch
  };

  return (
    <UnitProvider>
      <div className="app">
        <header className="app-header">
          <img src="/logo.png" alt="Weather App Logo" className="logo" />
          <h1>Weather App</h1>
          <UnitToggle />
        </header>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter city name..."
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onKeyDown={fetchData}
          />
        </div>
        {loading && <LoadingIndicator />}
        {error && <div className="error">{error}</div>}
        <RecentSearches searches={searches} onSearch={handleRecentSearch} />
        <WeatherDisplay weatherData={weatherData} />
      </div>
    </UnitProvider>
  );
};

export default App;
