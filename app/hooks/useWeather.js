"use client";

import { useState, useEffect } from "react";
import { POPULAR_CITIES } from "../constants/cities";

export function useWeather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cityCards, setCityCards] = useState([]);
  const [loadingCards, setLoadingCards] = useState(true);

  useEffect(() => {
    async function fetchAllCities() {
      try {
        const results = await Promise.all(
          POPULAR_CITIES.map(async (name) => {
            const res = await fetch(`/api/weather?city=${encodeURIComponent(name)}`);
            const data = await res.json();
            return res.ok ? { name, data } : null;
          }),
        );
        setCityCards(results.filter(Boolean));
      } catch (err) {
        console.error("Błąd ładowania miast:", err);
      } finally {
        setLoadingCards(false);
      }
    }
    fetchAllCities();
  }, []);

  async function fetchWeather(cityName) {
    if (!cityName.trim()) return;
    setError(null);
    setWeather(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/weather?city=${encodeURIComponent(cityName)}`);
      const data = await res.json();
      if (!res.ok) setError(data.error);
      else setWeather(data);
    } catch (err) {
      setError("Błąd połączenia z internetem");
    } finally {
      setLoading(false);
    }
  }

  function handleCityClick(name) {
    setCity(name);
    fetchWeather(name);
  }

  return {
    city,
    setCity,
    weather,
    error,
    loading,
    cityCards,
    loadingCards,
    fetchWeather,
    handleCityClick,
  };
}
