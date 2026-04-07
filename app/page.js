"use client";

import { useState, useEffect } from "react";

const POPULAR_CITIES = ["Warszawa", "Londyn", "Madryt", "Paryż", "Rzym", "Berlin"];

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cityCards, setCityCards] = useState([]);

  useEffect(() => {
    async function fetchAllCities() {
      const results = await Promise.all(
        POPULAR_CITIES.map(async (name) => {
          const res = await fetch(`/api/weather?city=${encodeURIComponent(name)}`);
          const data = await res.json();
          return res.ok ? { name, data } : null;
        }),
      );
      setCityCards(results.filter(Boolean));
    }
    fetchAllCities();
  }, []);

  async function fetchWeather(cityName) {
    if (!cityName.trim()) return;
    setError(null);
    setWeather(null);
    setLoading(true);
    const res = await fetch(`/api/weather?city=${encodeURIComponent(cityName)}`);
    const data = await res.json();
    setLoading(false);
    if (!res.ok) setError(data.error);
    else setWeather(data);
  }

  function handleSearch() {
    fetchWeather(city);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <>
      <div className="min-vh-100 py-5" style={{ background: "#0f0f13" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h1
            className="text-center fw-semibold mb-4"
            style={{ fontSize: 20, color: "#e8e8f0" }}
          >
            Aplikacja pogodowa
          </h1>

          <div className="input-group mb-5 mx-auto" style={{ maxWidth: 460 }}>
            <input
              type="text"
              className="form-control dark-input"
              placeholder="Wpisz miasto..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="btn px-3"
              style={{ background: "#5b5bd6", color: "#fff", border: "none" }}
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? <span className="spinner-border spinner-border-sm" /> : "Szukaj"}
            </button>
          </div>
          {cityCards.length > 0 && (
            <>
              <p
                className="mb-3"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}
              >
                Popularne miasta
              </p>
              <div className="row g-3 mb-3">
                {cityCards.map(({ name, data }) => (
                  <div className="col-6 col-md-4" key={name}>
                    <div
                      className="city-mini-card p-3"
                      onClick={() => {
                        setCity(data.name);
                        fetchWeather(data.name);
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span
                          className="fw-semibold"
                          style={{ fontSize: 15, color: "#e8e8f0" }}
                        >
                          {data.name}
                        </span>
                        <span style={{ fontSize: 18, fontWeight: 600, color: "#a5a5ff" }}>
                          {Math.round(data.main.temp)}°C
                        </span>
                      </div>
                      <p
                        className="mb-0 text-capitalize"
                        style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}
                      >
                        {data.weather[0].description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {error && (
            <div
              className="alert mx-auto mb-4"
              style={{
                maxWidth: 460,
                background: "rgba(220,53,69,0.15)",
                border: "0.5px solid rgba(220,53,69,0.3)",
                color: "#f08080",
              }}
            >
              {error}
            </div>
          )}

          {weather && (
            <div
              className="result-card p-3 text-white mx-auto mb-5"
              style={{ maxWidth: 460 }}
            >
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p
                    className="fw-semibold mb-0"
                    style={{ fontSize: 18, color: "#e8e8f0" }}
                  >
                    {weather.name}
                  </p>
                  <p
                    className="mb-3"
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}
                  >
                    {weather.sys.country}
                  </p>
                </div>
                <span className="temp-badge px-3 py-1">
                  {Math.round(weather.main.temp)}°C
                </span>
              </div>
              <p
                className="mb-3 text-capitalize"
                style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}
              >
                {weather.weather[0].description}
              </p>
              <div className="row g-2 text-center">
                {[
                  {
                    label: "Odczuwalna",
                    value: `${Math.round(weather.main.feels_like)}°C`,
                  },
                  { label: "Wilgotność", value: `${weather.main.humidity}%` },
                  { label: "Wiatr", value: `${Math.round(weather.wind.speed)} m/s` },
                ].map(({ label, value }) => (
                  <div className="col-4" key={label}>
                    <div className="stat-box py-2">
                      <p
                        className="mb-1"
                        style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}
                      >
                        {label}
                      </p>
                      <p
                        className="mb-0 fw-semibold"
                        style={{ fontSize: 14, color: "#e8e8f0" }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
