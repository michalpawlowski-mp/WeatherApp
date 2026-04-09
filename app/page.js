"use client";

import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherResult from "./components/WeatherResult";
import CityGrid from "./components/CityGrid";

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

  function handleCityClick(name) {
    setCity(name);
    fetchWeather(name);
  }

  return (
    <>
      <h1 className="text-center text-light fs-1 fw-semibold ">Aplikacja pogodowa</h1>
      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={() => fetchWeather(city)}
        loading={loading}
      />
      <WeatherResult weather={weather} error={error} />
      <CityGrid cityCards={cityCards} onCityClick={handleCityClick} />
    </>
  );
}
