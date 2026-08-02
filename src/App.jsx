import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

import { getWeather } from "./services/weatherApi";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCitySearch(city) {
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError("City not found.");
    } finally {
      setLoading(false);
    }
  }

  function handleCurrentLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLoading(true);
        setError("");

        try {
          const data = await getWeather(`${latitude},${longitude}`);
          setWeather(data);
        } catch (err) {
          setWeather(null);
          setError("Unable to fetch weather.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied.");
      }
    );
  }
   let backgroundClass = "default-bg";

if (weather) {

  const condition = weather.current.condition.text.toLowerCase();

  if (condition.includes("sun")) {
    backgroundClass = "sunny";
  }

  else if (condition.includes("cloud")) {
    backgroundClass = "cloudy";
  }

  else if (condition.includes("rain")) {
    backgroundClass = "rainy";
  }

  else if (condition.includes("storm")) {
    backgroundClass = "storm";
  }

}
  return (
    <div className={`App ${backgroundClass}`}>
      <Header />

      <SearchBar
        onSearch={handleCitySearch}
        onCurrentLocation={handleCurrentLocation}
      />

      {loading && (
        <p className="loading">Loading weather...</p>
      )}

      {error && (
        <p className="error">{error}</p>
      )}

      {weather && (
        <WeatherCard weather={weather} />
      )}
      {weather && (

  <Forecast

      forecast={weather.forecast}

  />

)}
    </div>
  );
}

export default App;
