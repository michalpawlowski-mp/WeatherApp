"use client";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherResult from "./components/WeatherResult";
import CityGrid from "./components/CityGrid";

export default function WeatherApp() {
  const {
    city,
    setCity,
    weather,
    error,
    loading,
    cityCards,
    fetchWeather,
    handleCityClick,
  } = useWeather();

  return (
    <>
      <h1 className="text-center text-light fs-1 fw-semibold">Aplikacja pogodowa</h1>
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
