function WeatherCard({ weather }) {
  return (
    <div className="weather-card">

      <h2>
        📍 {weather.location.name}, {weather.location.country}
      </h2>

      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
      />

      <h1>{weather.current.temp_c}°C</h1>

      <h3>{weather.current.condition.text}</h3>

      <p className="updated">
        Last Updated: {weather.current.last_updated}
      </p>

      <div className="weather-details">

        <p>
          🌡️ Feels Like
          <span>{weather.current.feelslike_c}°C</span>
        </p>

        <p>
          💧 Humidity
          <span>{weather.current.humidity}%</span>
        </p>

        <p>
          🌬️ Wind Speed
          <span>{weather.current.wind_kph} km/h</span>
        </p>

        <p>
          🧭 Wind Direction
          <span>{weather.current.wind_dir}</span>
        </p>

        <p>
          🌡️ Pressure
          <span>{weather.current.pressure_mb} mb</span>
        </p>

        <p>
          👁️ Visibility
          <span>{weather.current.vis_km} km</span>
        </p>

        <p>
          ☁️ Cloud Cover
          <span>{weather.current.cloud}%</span>
        </p>

        <p>
          ☀️ UV Index
          <span>{weather.current.uv}</span>
        </p>

        <p>
          🌅 Sunrise
          <span>{weather.forecast.forecastday[0].astro.sunrise}</span>
        </p>

        <p>
          🌇 Sunset
          <span>{weather.forecast.forecastday[0].astro.sunset}</span>
        </p>

      </div>

      <div className="air-quality">

        <h3>🌫 Air Quality</h3>

        <p>
          CO
          <span>{weather.current.air_quality.co.toFixed(2)}</span>
        </p>

        <p>
          O₃
          <span>{weather.current.air_quality.o3.toFixed(2)}</span>
        </p>

        <p>
          NO₂
          <span>{weather.current.air_quality.no2.toFixed(2)}</span>
        </p>

        <p>
          PM2.5
          <span>{weather.current.air_quality.pm2_5.toFixed(2)}</span>
        </p>

        <p>
          PM10
          <span>{weather.current.air_quality.pm10.toFixed(2)}</span>
        </p>

      </div>

    </div>
  );
}

export default WeatherCard;