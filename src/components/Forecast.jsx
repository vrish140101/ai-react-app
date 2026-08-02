function Forecast({ forecast }) {
  return (
    <div className="forecast-container">

      <h2>5-Day Forecast</h2>

      <div className="forecast-cards">

        {forecast.forecastday.map((day) => (

          <div
            key={day.date}
            className="forecast-card"
          >

            <h4>
              {new Date(day.date).toLocaleDateString(
                "en-US",
                { weekday: "short" }
              )}
            </h4>

            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
            />

            <h3>{day.day.avgtemp_c}°C</h3>

            <p>{day.day.condition.text}</p>

            <hr />

            <p>
              🔺 Max:
              <strong>{day.day.maxtemp_c}°C</strong>
            </p>

            <p>
              🔻 Min:
              <strong>{day.day.mintemp_c}°C</strong>
            </p>

            <p>
              💧 Rain Chance:
              <strong>{day.day.daily_chance_of_rain}%</strong>
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Forecast;