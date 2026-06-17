"use client";

import { useState } from "react";

export function useSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchWeather(cityName) {
    if (!cityName.trim()) {
      setError("Wpisz nazwę miasta");
      setWeather(null);
      return;
    }
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

  return { city, setCity, weather, error, loading, fetchWeather };
}
