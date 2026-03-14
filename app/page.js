"use client";

import { useState } from "react";
import ExampleCities from "./ExampleCities";
import SearchCity from "./SearchCity";
import ShowWeather from "./ShowWeather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();

    setWeather(data);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Weather App</h1>

      <SearchCity city={city} setCity={setCity} getWeather={getWeather} />
      {/* <ExampleCities /> */}
      <ShowWeather weather={weather} />
    </div>
  );
}
