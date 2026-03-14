"use client";

export default function ShowWeather({ weather }) {
  return (
    <>
      {weather && (
        <div className="card p-3">
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </>
  );
}
