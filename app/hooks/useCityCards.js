"use client";

import { useState, useEffect } from "react";
import { POPULAR_CITIES } from "../constants/cities";

export function useCityCards() {
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

  return { cityCards, loadingCards };
}
