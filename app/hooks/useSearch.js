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
      const res = await fetch(
        `/api/weather?city=${encodeURIComponent(cityName)}`,
      );
      const data = await res.json();
      if (!res.ok) setError(data.error);
      else setWeather(data);
    } catch (err) {
      setError("Błąd połączenia z internetem");
    } finally {
      setLoading(false);
    }
  }

  async function fetchByLocation() {
    if (!navigator.geolocation) {
      setError("Twoja przeglądarka nie obsługuje geolokalizacji");
      return;
    }

    setError(null);
    setWeather(null);
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(
            `/api/weather?lat=${latitude}&lon=${longitude}`,
          );
          const data = await res.json();
          if (!res.ok) setError(data.error);
          else setWeather(data);
        } catch (err) {
          setError("Błąd połączenia z internetem");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setLoading(false);
        const errorMap = {
          1: "Brak zgody na dostęp do lokalizacji",
          2: "Nie udało się pobrać lokalizacji",
          3: "Przekroczono czas oczekiwania",
        };
        setError(errorMap[err.code] || "Błąd geolokalizacji");
      },
    );
  }

  return {
    city,
    setCity,
    weather,
    error,
    loading,
    fetchWeather,
    fetchByLocation,
  };
}
